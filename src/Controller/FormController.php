<?php

/*
 * This file is part of Monsieur Biz' Rich Editor plugin for Sylius.
 *
 * (c) Monsieur Biz <sylius@monsieurbiz.com>
 *
 * For the full copyright and license information, please view the LICENSE.txt
 * file that was distributed with this source code.
 */

declare(strict_types=1);

namespace MonsieurBiz\SyliusRichEditorPlugin\Controller;

use MonsieurBiz\SyliusRichEditorPlugin\Exception\UiElementNotFoundException;
use MonsieurBiz\SyliusRichEditorPlugin\Switcher\SwitchAdminLocaleInterface;
use MonsieurBiz\SyliusRichEditorPlugin\UiElement\RegistryInterface;
use MonsieurBiz\SyliusRichEditorPlugin\UiElement\UiElementFormOptionsInterface;
use MonsieurBiz\SyliusRichEditorPlugin\UiElement\UiElementInterface;
use MonsieurBiz\SyliusRichEditorPlugin\Uploader\FileUploaderInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\Extension\Core\Type\FileType as NativeFileType;
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
     */
    public function __construct(RegistryInterface $uiElementRegistry)
    {
        $this->uiElementRegistry = $uiElementRegistry;
    }

    /**
     * Generate the form for an element.
     *
     * @SuppressWarnings(PHPMD.CyclomaticComplexity)
     */
    public function viewAction(Request $request, SwitchAdminLocaleInterface $switchAdminLocale, string $code): Response
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
        $locale = $request->get('locale');

        // if we have a locale value in the post data, we change the current
        // admin locale to make the ui elements in the correct version.
        if (($locale = $request->get('locale')) && \is_string($locale)) {
            $switchAdminLocale->switchLocale($locale);
        }

        if ($isEdition && ($data = $request->get('data'))) {
            if (!\is_string($data)) {
                throw $this->createNotFoundException();
            }
            $data = json_decode($data, true);
            if (!\is_array($data)) {
                throw $this->createNotFoundException();
            }
        }

        // Create form depending on UI Element with data
        $formOptions = array_merge(['attr' => ['data-locale' => $locale]], $this->getFormOptions($uiElement));
        $form = $this->createForm($uiElement->getFormClass(), $data, $formOptions);

        return new JsonResponse([
            'code' => $uiElement->getCode(),
            'locale' => $locale,
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
     * @SuppressWarnings(PHPMD.CyclomaticComplexity)
     * @SuppressWarnings(PHPMD.ElseExpression)
     */
    public function renderElementsAction(Request $request, SwitchAdminLocaleInterface $switchAdminLocale): Response
    {
        if ($uiElements = $request->get('ui_elements')) {
            if (!\is_string($uiElements)) {
                throw $this->createNotFoundException();
            }
            $uiElements = json_decode($uiElements, true);
            if (!\is_array($uiElements)) {
                throw $this->createNotFoundException();
            }
        }

        // if we have a locale value in the post data, we change the current
        // admin locale to make the ui elements in the correct version.
        if (($locale = $request->get('locale')) && \is_string($locale)) {
            $switchAdminLocale->switchLocale($locale);
        }

        $result = [];
        /** @phpstan-ignore-next-line */
        foreach ($uiElements as $uiElementIndex => $uiElementData) {
            $result[$uiElementIndex] = '';

            if (!isset($uiElementData['code'])) {
                if (isset($uiElementData['type'], $uiElementData['fields'])) {
                    $uiElementData['code'] = $uiElementData['type'];
                    $uiElementData['data'] = $uiElementData['fields'];
                    unset($uiElementData['type'], $uiElementData['fields']);
                } else {
                    continue;
                }
            }

            try {
                $uiElement = $this->uiElementRegistry->getUiElement($uiElementData['code']);
            } catch (UiElementNotFoundException $exception) {
                continue;
            }

            $template = $uiElement->getAdminRenderTemplate();

            $result[$uiElementIndex] = $this->renderView($template, [
                'ui_element' => $uiElement,
                'element' => $uiElementData['data'],
            ]);
        }

        return new JsonResponse($result);
    }

    /**
     * Validate submitted data and return an UI Element JSON if everything is OK.
     *
     * @SuppressWarnings(PHPMD.CyclomaticComplexity)
     */
    public function submitAction(Request $request, FileUploaderInterface $fileUploader, SwitchAdminLocaleInterface $switchAdminLocale, string $code, bool $isEdition): Response
    {
        // Find UI Element from type
        try {
            $uiElement = $this->uiElementRegistry->getUiElement($code);
        } catch (UiElementNotFoundException $exception) {
            throw $this->createNotFoundException($exception->getMessage());
        }

        // if we have a locale value in the post data, we change the current
        // admin locale to make the ui elements in the correct version.
        if (($locale = $request->get('locale')) && \is_string($locale)) {
            $switchAdminLocale->switchLocale($locale);
        }

        // Create and validate form
        $form = $this->createForm($uiElement->getFormClass(), null, $this->getFormOptions($uiElement));
        $form->handleRequest($request);
        if (!$form->isSubmitted()) {
            throw $this->createNotFoundException();
        }

        $data = $request->request->all()[$form->getName()];

        // Convert uploaded files to string in form data if necessary, or retrieve current image path if edition
        $formData = $this->processFormData($form, $fileUploader, $data);

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

        $previewHtml = $this->renderView($template, [
            'ui_element' => $uiElement,
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
     * @param array|string $requestData
     *
     * @return array|mixed|string
     */
    private function processFormData(FormInterface $form, FileUploaderInterface $fileUploader, $requestData)
    {
        // No child, end of recursivity, return form value or uploaded file path
        if (!\count($form->all())) {
            return $this->processFormDataWithoutChild($form, $fileUploader, $requestData);
        }

        $processedData = [];
        foreach ($form as $child) {
            $formData = $this->processFormData($child, $fileUploader, $requestData[$child->getName()] ?? []);
            $processedData[$child->getName()] = $formData;
        }

        return $processedData;
    }

    /**
     * @param array|string $requestData
     *
     * @return array|mixed|string
     *
     * @SuppressWarnings(PHPMD.CyclomaticComplexity)
     */
    private function processFormDataWithoutChild(FormInterface $form, FileUploaderInterface $fileUploader, $requestData)
    {
        if ($form->isValid() && $form->getData() instanceof UploadedFile) {
            // Upload image selected by user
            /** @var ?string $fileType */
            $fileType = $form->getConfig()->getOption('file-type');

            return $fileUploader->upload($form->getData(), $fileType);
        }
        if ($form->getConfig()->getType()->getInnerType() instanceof NativeFileType && !empty($requestData)) {
            // Check if we have a string value for this fields which is the file path (During edition for example)
            return $requestData; // Will return the current filename string
        }

        return $form->getData();
    }

    /**
     * Recursively convert multidimensional array to one dimension
     * The key is the full input name (ex : `image_collection[images][0][image]`)
     * It is used in form with file inputs when the form is not valid to avoid to loose uploaded files.
     *
     * @SuppressWarnings(PHPMD.ElseExpression)
     */
    private function convertFormDataForRequest(array $formData, string $prefix = ''): array
    {
        $items = [];

        foreach ($formData as $key => $value) {
            if (\is_array($value)) {
                if (empty($prefix)) {
                    $items = array_merge($items, $this->convertFormDataForRequest($value, \sprintf('%s', $key)));
                } else {
                    $items = array_merge($items, $this->convertFormDataForRequest($value, \sprintf('%s[%s]', $prefix, $key)));
                }
            } else {
                $items[\sprintf('%s[%s]', $prefix, $key)] = $value;
            }
        }

        return $items;
    }

    private function getFormOptions(UiElementInterface $uiElement): array
    {
        return $uiElement instanceof UiElementFormOptionsInterface ? $uiElement->getFormOptions() : [];
    }
}
