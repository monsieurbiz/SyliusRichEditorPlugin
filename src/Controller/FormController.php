<?php

/*
 * This file is part of Monsieur Biz' Rich Editor plugin for Sylius.
 *
 * (c) Monsieur Biz <sylius@monsieurbiz.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

declare(strict_types=1);

namespace MonsieurBiz\SyliusRichEditorPlugin\Controller;

use MonsieurBiz\SyliusRichEditorPlugin\Event\RenderUiElementEvent;
use MonsieurBiz\SyliusRichEditorPlugin\Exception\UiElementNotFoundException;
use MonsieurBiz\SyliusRichEditorPlugin\Service\FileUploader;
use MonsieurBiz\SyliusRichEditorPlugin\UiElement\RegistryInterface;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class FormController extends AbstractController
{
    /**
     * @var RegistryInterface
     */
    private $uiElementRegistry;

    /**
     * FormController constructor.
     *
     * @param RegistryInterface $uiElementRegistry
     */
    public function __construct(RegistryInterface $uiElementRegistry)
    {
        $this->uiElementRegistry = $uiElementRegistry;
    }

    /**
     * Generate the form for an element.
     *
     * @param Request $request
     * @param string $code
     *
     * @return Response
     */
    public function viewAction(Request $request, string $code): Response
    {
        // Find UI Element from type
        try {
            $uiElement = $this->uiElementRegistry->getUiElement($code);
        } catch (UiElementNotFoundException $exception) {
            throw $this->createNotFoundException($exception->getMessage());
        }

        // Check data in post
        $data = [];
        $isEdition = $request->isMethod('post');
        if ($isEdition && ($data = $request->get('data'))) {
            $data = json_decode($data, true);
            if (!\is_array($data)) {
                throw $this->createNotFoundException();
            }
        }

        // Create form depending on UI Element with data
        $form = $this->createForm($uiElement->getFormClass(), $data);

        return new JsonResponse([
            'code' => $uiElement->getCode(),
            'form_html' => $this->renderView($uiElement->getAdminFormTemplate(), [
                'form' => $form->createView(),
                'uiElement' => $uiElement,
                'data' => $data,
                'isEdition' => (int) $isEdition,
            ]),
        ]);
    }

    /**
     * Render all UI elements in HTML.
     *
     * @param Request $request
     * @param EventDispatcherInterface $eventDispatcher
     *
     * @return Response
     */
    public function renderElementsAction(Request $request, EventDispatcherInterface $eventDispatcher): Response
    {
        if ($uiElements = $request->get('ui_elements')) {
            $uiElements = json_decode($uiElements, true);
            if (!\is_array($uiElements)) {
                throw $this->createNotFoundException();
            }
        }

        $result = [];
        foreach ($uiElements as $uiElementIndex => $uiElementData) {
            if (!isset($uiElementData['code'])) {
                continue;
            }

            try {
                $uiElement = $this->uiElementRegistry->getUiElement($uiElementData['code']);
            } catch (UiElementNotFoundException $exception) {
                continue;
            }

            $template = $uiElement->getAdminRenderTemplate();

            $event = new RenderUiElementEvent($uiElement, $uiElementData);
            $eventDispatcher->dispatch($event);
            $uiElement = $event->getElement();

            $result[$uiElementIndex] = $this->renderView($template, [
                'uiElement' => $uiElement,
                'element' => $uiElementData['data'],
            ]);
        }

        return new JsonResponse($result);
    }

    /**
     * Validate submitted data and return an UI Element JSON if everything is OK.
     *
     * @param Request $request
     * @param EventDispatcherInterface $eventDispatcher
     * @param FileUploader $fileUploader
     * @param string $code
     * @param bool $isEdition
     *
     * @return Response
     */
    public function submitAction(Request $request, EventDispatcherInterface $eventDispatcher, FileUploader $fileUploader, string $code, bool $isEdition): Response
    {
        // Find UI Element from type
        try {
            $uiElement = $this->uiElementRegistry->getUiElement($code);
        } catch (UiElementNotFoundException $exception) {
            throw $this->createNotFoundException($exception->getMessage());
        }

        // Create and validate form
        $form = $this->createForm($uiElement->getFormClass());
        $form->handleRequest($request);
        if (!$form->isSubmitted()) {
            throw $this->createNotFoundException();
        }

        // Convert uploaded files to string in form data if necessary, or retrieve current image path if edition
        $formData = $this->processFormData($form, $fileUploader, $request->request->get($form->getName()));

        // Generate form render with error display
        if (!$form->isValid()) {
            // Manage current uplodaded files to be sure the user will not loose it
            $request->request->add(['rich_editor_uploaded_files' => $this->convertFormDataForRequest(
                [$form->getName() => $formData]
            )]);

            return new JsonResponse([
                'error' => true,
                'code' => $uiElement->getCode(),
                'form_html' => $this->renderView($uiElement->getAdminFormTemplate(), [
                    'form' => $form->createView(),
                    'uiElement' => $uiElement,
                    'data' => $formData,
                    'isEdition' => (int) $isEdition,
                ]),
            ]);
        }

        $template = $uiElement->getAdminRenderTemplate();
        $event = new RenderUiElementEvent($uiElement, $formData);
        $eventDispatcher->dispatch($event);
        $element = $event->getElement();

        $previewHtml = $this->renderView($template, [
            'uiElement' => $element,
            'element' => $formData,
        ]);

        return new JsonResponse([
            'code' => $uiElement->getCode(),
            'data' => $formData,
            'previewHtml' => $previewHtml,
        ]);
    }

    /**
     * Build a new form data array with the uploaded file path instead of files, or current filenames on edition.
     *
     * @param FormInterface $form
     * @param FileUploader $fileUploader
     * @param array|string $requestData
     *
     * @return array|mixed|string
     */
    private function processFormData(FormInterface $form, FileUploader $fileUploader, $requestData)
    {
        // No child, end of recursivity, return form value or uploaded file path
        if (!\count($form->all())) {
            if ($form->isValid() && $form->getData() instanceof UploadedFile) {
                // Upload image selected by user
                return $fileUploader->upload($form->getData());
            }
            if ($form->getConfig()->getType()->getInnerType() instanceof FileType && !empty($requestData)) {
                // Check if we have a string value for this fields which is the file path (During edition for example)
                return $requestData; // Will return the current filename string
            }

            return $form->getData();
        }

        $processedData = [];
        foreach ($form as $child) {
            $formData = $this->processFormData($child, $fileUploader, $requestData[$child->getName()] ?? []);
            $processedData[$child->getName()] = $formData;
        }

        return $processedData;
    }

    /**
     * Recursively convert multidimensional array to one dimension
     * The key is the full input name (ex : `image_collection[images][0][image]`)
     * It is used in form with file inputs when the form is not valid to avoid to loose uploaded files.
     *
     * @param array $formData
     * @param string $prefix
     *
     * @return array
     */
    private function convertFormDataForRequest(array $formData, string $prefix = ''): array
    {
        $items = [];

        foreach ($formData as $key => $value) {
            if (\is_array($value)) {
                if (empty($prefix)) {
                    $items = array_merge($items, $this->convertFormDataForRequest($value, sprintf('%s', $key)));
                } else {
                    $items = array_merge($items, $this->convertFormDataForRequest($value, sprintf('%s[%s]', $prefix, $key)));
                }
            } else {
                $items[sprintf('%s[%s]', $prefix, $key)] = $value;
            }
        }

        return $items;
    }
}
