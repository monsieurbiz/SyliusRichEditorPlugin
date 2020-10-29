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

use MonsieurBiz\SyliusRichEditorPlugin\Exception\UiElementNotFoundException;
use MonsieurBiz\SyliusRichEditorPlugin\Service\FileUploader;
use MonsieurBiz\SyliusRichEditorPlugin\UiElement\RegistryInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class FormController extends AbstractController
{
    /** @var RegistryInterface */
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
     * Validate submitted data and return an UI Element JSON if everything is OK.
     *
     * @param Request $request
     * @param FileUploader $fileUploader
     * @param string $code
     * @param bool $isEdition
     *
     * @return Response
     */
    public function submitAction(Request $request, FileUploader $fileUploader, string $code, bool $isEdition): Response
    {
        // Find UI Element from type
        try {
            $uiElement = $this->uiElementRegistry->getUiElement($code);
        } catch (UiElementNotFoundException $exception) {
            throw $this->createNotFoundException($exception->getMessage());
        }

        // Create and validate form
        $form = $this->createForm($uiElement->getFormClass(), $request->request->all()); // Put the request to manage file constraints
        $form->handleRequest($request);
        if (!$form->isSubmitted()) {
            throw $this->createNotFoundException();
        }

        // Manage file upload on valid fields
        $uploadedFiles = [];
        /** @var Form $child */
        foreach ($form as $child) {
            if ($child->isValid() && $child->getData() instanceof UploadedFile) {
                // Upload image selected by user
                $uploadedFileName = $fileUploader->upload($child->getData());
                $uploadedFiles[$child->getName()] = $uploadedFileName;
            } elseif ($child->getConfig()->getType()->getInnerType() instanceof FileType) {
                // Check if we have a string value for this fields which is the file path (During edition for example)
                $postFormData = $request->request->get($form->getName());
                $currentImage = $postFormData[$child->getName()] ?? null;
                $uploadedFiles[$child->getName()] = $currentImage;
            }
        }

        // Replace uploaded files in form data
        $formData = array_merge($form->getData(), $uploadedFiles);

        // Generate form render with error display
        if (!$form->isValid()) {
            $request->request->add(['rich_editor_uploaded_files' => $formData]);
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

        return new JsonResponse([
            'code' => $uiElement->getCode(),
            'data' => $formData,
        ]);
    }
}
