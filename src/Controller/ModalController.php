<?php
declare(strict_types=1);

namespace MonsieurBiz\SyliusRichEditorPlugin\Controller;

use MonsieurBiz\SyliusRichEditorPlugin\Exception\UndefinedUiElementTypeException;
use MonsieurBiz\SyliusRichEditorPlugin\UiElement\Factory;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Templating\EngineInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Contracts\Translation\TranslatorInterface;

class ModalController extends AbstractController
{
    /** @var EngineInterface */
    private $templatingEngine;

    /** @var Factory */
    private $factory;

    /** @var TranslatorInterface */
    private $translator;

    /**
     * ModalController constructor.
     * @param EngineInterface $templatingEngine
     * @param Factory $factory
     * @param TranslatorInterface $translator
     */
    public function __construct(
        EngineInterface $templatingEngine,
        Factory $factory,
        TranslatorInterface $translator
    ) {
        $this->templatingEngine = $templatingEngine;
        $this->factory = $factory;
        $this->translator = $translator;
    }

    /**
     * Generate the form and render the edit markup
     *
     * @param Request $request
     * @return Response
     */
    public function formAction(Request $request): Response
    {
        // Check request
        $data = $request->query->get('data') ?? null;
        if (!$request->isXmlHttpRequest() || empty($data)) {
            throw $this->createNotFoundException();
        }

        // Correct JSON decode data
        $data = json_decode($data, true);
        if (!isset($data['type']) || !isset($data['fields'])) {
            throw $this->createNotFoundException();
        }

        // Find UI Element from type
        try {
            $uiElement = $this->factory->getUiElementByType($data['type']);
        } catch (UndefinedUiElementTypeException $exception) {
            throw $this->createNotFoundException($exception->getMessage());
        }

        // Create form depending on UI Element with data
        $form = $this->createForm($uiElement->getFormClass(), $data['fields']);

        return $this->templatingEngine->renderResponse('@MonsieurBizSyliusRichEditorPlugin/Admin/Modal/edit.html.twig', [
            'form' => $form->createView(),
            'uiElement' => $uiElement,
            'data' => $data['fields'],
        ]);
    }

    /**
     * Validate submitted data and return an UI Element JSON if everything is OK
     *
     * @param Request $request
     * @return Response
     */
    public function submitAction(Request $request): Response
    {
        $uiElementType = $request->request->get('uiElementType');
        if (!$request->isXmlHttpRequest() || empty($uiElementType)) {
            throw $this->createNotFoundException();
        }

        // Find UI Element from type
        try {
            $uiElement = $this->factory->getUiElementByType($uiElementType);
        } catch (UndefinedUiElementTypeException $exception) {
            throw $this->createNotFoundException($exception->getMessage());
        }

        // Create and validate form
        $form = $this->createForm($uiElement->getFormClass());
        $form->handleRequest($request);
        if (!$form->isSubmitted()) {
            throw $this->createNotFoundException();
        }

        // Generate array of errors with field name
        if (!$form->isValid()) {
            $errors = [];
            foreach ($form as $child) {
                if (!$child->isValid()) {
                    foreach ($child->getErrors() as $error) {
                        $childLabel = $this->translator->trans(sprintf('monsieurbiz_richeditorplugin.ui_element.%s.field.%s', $uiElementType, $child->getName()));
                        $errors[$childLabel][] = $error->getMessage();
                    }
                }
            }
            return new JsonResponse(['errors' => $errors], Response::HTTP_NOT_ACCEPTABLE);
        }

        // Create object with UiElement data
        $element = new \stdClass();
        $element->type = $uiElement->getType();
        $element->fields = new \stdClass();
        foreach ($uiElement->getFields() as $field) {
            // If file, upload it and retrieve the path
            if (($file = $request->files->get($uiElementType)) && isset($file[$field])) {
                $element->fields->{$field} = $this->uploadAndReturnPath($file[$field]);
            // Value in form exists, we take it
            } elseif (($value = $request->request->get($uiElementType)) && isset($value[$field])) {
                $element->fields->{$field} = (string) $value[$field];
            // Value is not set, set an empty one
            } else {
                $element->fields->{$field} = '';
            }
        }

        return new JsonResponse(['element' => $element]);
    }

    /**
     * Upload file in folder in config and return the path from public folder
     *
     * @param UploadedFile $file
     * @return mixed
     */
    private function uploadAndReturnPath(UploadedFile $file)
    {
        $originalFilename = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
        // this is needed to safely include the file name as part of the URL
        $safeFilename = transliterator_transliterate('Any-Latin; Latin-ASCII; [^A-Za-z0-9_] remove; Lower()', $originalFilename);
        $newFilename = $safeFilename . '-' . uniqid() . '.' . $file->guessExtension();

        // Move the file to the directory where brochures are stored
        $file = $file->move(
            $this->getParameter('monsieurbiz_sylius_rich_editor.upload_directory'),
            $newFilename
        );

        // Generate path from public folder
        $relativePath = str_replace($this->getParameter('kernel.project_dir'), '', $file->getPathname());
        $relativePath = str_replace('/public', '', $relativePath);

        return $relativePath;
    }
}
