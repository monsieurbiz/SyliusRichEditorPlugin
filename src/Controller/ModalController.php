<?php
declare(strict_types=1);

namespace Monsieurbiz\SyliusCmsPlugin\Controller;

use Monsieurbiz\SyliusCmsPlugin\Exception\UndefinedUiElementTypeException;
use Monsieurbiz\SyliusCmsPlugin\UiElement\Factory;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Templating\EngineInterface;
use Symfony\Component\HttpFoundation\Response;

class ModalController extends AbstractController
{
    /** @var EngineInterface */
    private $templatingEngine;

    /** @var Factory */
    private $factory;

    /**
     * ModalController constructor.
     * @param EngineInterface $templatingEngine
     * @param Factory $factory
     */
    public function __construct(
        EngineInterface $templatingEngine,
        Factory $factory
    ) {
        $this->templatingEngine = $templatingEngine;
        $this->factory = $factory;
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

        try {
            $uiElement = $this->factory->getUiElementByType($data['type']);
        } catch (UndefinedUiElementTypeException $exception) {
            throw $this->createNotFoundException($exception->getMessage());
        }

        // Create form depending on UI Element with data
        $form = $this->createForm($uiElement->getFormClass(), $data['fields']);

        return $this->templatingEngine->renderResponse('@MonsieurbizSyliusCmsPlugin/Admin/Modal/edit.html.twig', [
            'form' => $form->createView(),
            'uiElement' => $uiElement,
            'data' => $data['fields'],
        ]);
    }

    public function uploadAction(Request $request): Response
    {
        /** @var UploadedFile $file */
        $file = $request->files->get('file') ?? null;
        if (!$request->isXmlHttpRequest() || empty($file)) {
            throw $this->createNotFoundException();
        }

        $originalFilename = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
        // this is needed to safely include the file name as part of the URL
        $safeFilename = transliterator_transliterate('Any-Latin; Latin-ASCII; [^A-Za-z0-9_] remove; Lower()', $originalFilename);
        $newFilename = $safeFilename . '-' . uniqid() . '.' . $file->guessExtension();

        // Move the file to the directory where brochures are stored
        $file = $file->move(
            $this->getParameter('monsieurbiz_sylius_cms.upload_directory'),
            $newFilename
        );

        // Generate path from public folder
        $relativePath = str_replace($this->getParameter('kernel.project_dir'), '', $file->getPathname());
        $relativePath = str_replace('/public', '', $relativePath);

        return new Response($relativePath);
    }
}
