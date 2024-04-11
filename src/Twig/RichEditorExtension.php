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

namespace MonsieurBiz\SyliusRichEditorPlugin\Twig;

use MonsieurBiz\SyliusRichEditorPlugin\Exception\UiElementNotFoundException;
use MonsieurBiz\SyliusRichEditorPlugin\MonsieurBizSyliusRichEditorPlugin;
use MonsieurBiz\SyliusRichEditorPlugin\UiElement\RegistryInterface;
use MonsieurBiz\SyliusRichEditorPlugin\Validator\Constraints\YoutubeUrlValidator;
use Symfony\Bridge\Twig\AppVariable;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use Twig\TwigFunction;

final class RichEditorExtension extends AbstractExtension
{
    private const ADMIN_FIREWALL_CONTEXT = 'security.firewall.map.context.admin';

    private RegistryInterface $uiElementRegistry;

    private Environment $twig;

    private string $defaultElement;

    private string $defaultElementDataField;

    private string $uploadDirectory;

    private string $kernelPublicDir;

    /**
     * RichEditorExtension constructor.
     */
    public function __construct(
        RegistryInterface $uiElementRegistry,
        Environment $twig,
        string $monsieurbizRicheditorDefaultElement,
        string $monsieurbizRicheditorDefaultElementDataField,
        string $monsieurbizRicheditorUploadDirectory,
        string $monsieurbizRicheditorKernelPublicDir
    ) {
        $this->uiElementRegistry = $uiElementRegistry;
        $this->twig = $twig;
        $this->defaultElement = $monsieurbizRicheditorDefaultElement;
        $this->defaultElementDataField = $monsieurbizRicheditorDefaultElementDataField;
        $this->uploadDirectory = $monsieurbizRicheditorUploadDirectory;
        $this->kernelPublicDir = $monsieurbizRicheditorKernelPublicDir;
    }

    /**
     * @return TwigFilter[]
     */
    public function getFilters(): array
    {
        return [
            new TwigFilter('monsieurbiz_richeditor_render_field', [$this, 'renderField'], ['is_safe' => ['html'], 'needs_context' => true]),
            new TwigFilter('monsieurbiz_richeditor_render_elements', [$this, 'renderElements'], ['is_safe' => ['html'], 'needs_context' => true]),
            new TwigFilter('monsieurbiz_richeditor_render_element', [$this, 'renderElement'], ['is_safe' => ['html'], 'needs_context' => true]),
        ];
    }

    /**
     * @return array|TwigFunction[]
     */
    public function getFunctions(): array
    {
        return [
            new TwigFunction('monsieurbiz_richeditor_list_elements', [$this, 'listUiElements'], ['is_safe' => ['html', 'js']]),
            new TwigFunction('monsieurbiz_richeditor_youtube_link', [$this, 'convertYoutubeEmbeddedLink'], ['is_safe' => ['html', 'js']]),
            new TwigFunction('monsieurbiz_richeditor_youtube_id', [$this, 'getYoutubeIdFromLink'], ['is_safe' => ['html', 'js']]),
            new TwigFunction('monsieurbiz_richeditor_get_elements', [$this, 'getElements'], ['is_safe' => ['html']]),
            new TwigFunction('monsieurbiz_richeditor_get_default_element', [$this, 'getDefaultElement'], ['is_safe' => ['html']]),
            new TwigFunction('monsieurbiz_richeditor_get_default_element_data_field', [$this, 'getDefaultElementDataField'], ['is_safe' => ['html']]),
            new TwigFunction('monsieurbiz_richeditor_get_current_file_path', [$this, 'getCurrentFilePath'], ['needs_context' => true, 'is_safe' => ['html']]),
            new TwigFunction('monsieurbiz_richeditor_get_media_without_upload_dir', [$this, 'getMediaWithoutUploadDir'], ['is_safe' => ['html', 'js']]),
            new TwigFunction('monsieurbiz_richeditor_file_extension_media_manager_exists', [$this, 'fileExtensionMediaManagerExists'], ['is_safe' => ['html', 'js']]),
            new TwigFunction('monsieurbiz_richeditor_file_exists', [$this, 'fileExists'], ['is_safe' => ['html', 'js']]),
        ];
    }

    /**
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function renderField(array $context, ?string $content): string
    {
        if (null === $content) {
            return '';
        }

        $elements = json_decode($content, true);
        if (!\is_array($elements)) {
            return $content;
        }

        return $this->renderElements($context, $elements);
    }

    public function getElements(?string $content): array
    {
        if (null === $content) {
            return [];
        }

        $elements = json_decode($content, true);
        if (!\is_array($elements)) {
            // If the JSON decode failed, return a new UIElement with default configuration
            return [
                'type' => $this->getDefaultElement(),
                'data' => [$this->getDefaultElementDataField() => $content],
            ];
        }

        return $elements;
    }

    /**
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function renderElements(array $context, array $elements): string
    {
        $html = '';
        foreach ($elements as $element) {
            try {
                $html .= $this->renderElement($context, $element);
            } catch (UiElementNotFoundException $e) {
                continue;
            }
        }

        return $html;
    }

    /**
     * @throws UiElementNotFoundException
     * @throws LoaderError [twig.render] When the template cannot be found
     * @throws SyntaxError [twig.render] When an error occurred during compilation
     * @throws RuntimeError [twig.render] When an error occurred during rendering
     */
    public function renderElement(array $context, array $element): string
    {
        if (!isset($element['code'])) {
            if (!isset($element['type'], $element['fields'])) {
                throw new UiElementNotFoundException('unknown');
            }
            $element = [
                'code' => $element['type'],
                'data' => $element['fields'],
            ];
        }

        $uiElement = $this->uiElementRegistry->getUiElement($element['code']);

        if (!$uiElement->isEnabled()) {
            return '';
        }

        $template = $this->isAdmin($context) ? $uiElement->getAdminRenderTemplate() : $uiElement->getFrontRenderTemplate();

        $context = array_merge($context, [
            'ui_element' => $uiElement,
            'element' => $element['data'],
        ]);

        return $this->twig->render($template, $context);
    }

    /**
     * List available Ui Elements in JSON.
     */
    public function listUiElements(): string
    {
        return (string) json_encode($this->uiElementRegistry);
    }

    /**
     * Convert Youtube link to embed URL.
     */
    public function convertYoutubeEmbeddedLink(string $url): ?string
    {
        if (null === $id = $this->getYoutubeIdFromLink($url)) {
            return null;
        }

        return sprintf('https://www.youtube.com/embed/%s', $id);
    }

    /**
     * Retrieve the Youtube ID from a Youtube link.
     */
    public function getYoutubeIdFromLink(string $url): ?string
    {
        $isValid = (bool) preg_match(YoutubeUrlValidator::YOUTUBE_REGEX_VALIDATOR, $url, $matches);

        if (!$isValid || !isset($matches[1])) {
            return null;
        }

        return $matches[1];
    }

    public function getDefaultElement(): string
    {
        return $this->defaultElement;
    }

    public function getDefaultElementDataField(): string
    {
        return $this->defaultElementDataField;
    }

    public function getCurrentFilePath(array $context, string $varName = 'full_name'): ?string
    {
        $form = $context['form'];
        $app = $context['app'];
        if (empty($form) || empty($app)) {
            return null;
        }

        $path = $form->vars['data'];
        if (!empty($app->getRequest()->get('rich_editor_uploaded_files'))) {
            $uploadedFile = $app->getRequest()->get('rich_editor_uploaded_files');
            if (null !== ($fullName = $uploadedFile[$varName] ?? null)) {
                if ($fullName instanceof UploadedFile) {
                    return null;
                }

                return $fullName;
            }
        }

        return $path;
    }

    public function getMediaWithoutUploadDir(string $path): string
    {
        if (0 === strpos($path, $this->uploadDirectory)) {
            return substr($path, \strlen($this->uploadDirectory));
        }

        return $path;
    }

    public function fileExtensionMediaManagerExists(): bool
    {
        return MonsieurBizSyliusRichEditorPlugin::fileExtensionMediaManagerExists();
    }

    public function fileExists(string $path): bool
    {
        return file_exists($this->kernelPublicDir . $path);
    }

    private function isAdmin(array $context): bool
    {
        /** @var ?AppVariable $app */
        $app = $context['app'] ?? null;
        if (null === $app || null === ($request = $app->getRequest())) {
            return false;
        }

        return self::ADMIN_FIREWALL_CONTEXT === $request->get('_firewall_context');
    }
}
