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

namespace MonsieurBiz\SyliusRichEditorPlugin\Twig;

use MonsieurBiz\SyliusRichEditorPlugin\Exception\UiElementNotFoundException;
use MonsieurBiz\SyliusRichEditorPlugin\UiElement\RegistryInterface;
use MonsieurBiz\SyliusRichEditorPlugin\Validator\Constraints\YoutubeUrlValidator;
use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use Twig\TwigFunction;

final class RichEditorExtension extends AbstractExtension
{
    private RegistryInterface $uiElementRegistry;

    private Environment $twig;
    private string $defaultElement;

    private string $defaultElementDataField;

    /**
     * RichEditorExtension constructor.
     *
     * @param RegistryInterface $uiElementRegistry
     * @param Environment $twig
     * @param string $monsieurbizRicheditorDefaultElement
     * @param string $monsieurbizRicheditorDefaultElementDataField
     */
    public function __construct(
        RegistryInterface $uiElementRegistry,
        Environment $twig,
        string $monsieurbizRicheditorDefaultElement,
        string $monsieurbizRicheditorDefaultElementDataField
    ) {
        $this->uiElementRegistry = $uiElementRegistry;
        $this->twig = $twig;
        $this->defaultElement = $monsieurbizRicheditorDefaultElement;
        $this->defaultElementDataField = $monsieurbizRicheditorDefaultElementDataField;
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
        ];
    }

    /**
     * @param array $context
     * @param string|null $content
     *
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     *
     * @return string
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

    /**
     * @param string|null $content
     *
     * @return array
     */
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
     * @param array $context
     * @param array $elements
     *
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     *
     * @return string
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
     * @param array $context
     * @param array $element
     *
     * @throws UiElementNotFoundException
     * @throws LoaderError [twig.render] When the template cannot be found
     * @throws SyntaxError [twig.render] When an error occurred during compilation
     * @throws RuntimeError [twig.render] When an error occurred during rendering
     *
     * @return string
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
        $template = $uiElement->getFrontRenderTemplate();

        $context = array_merge($context, [
            'ui_element' => $uiElement,
            'element' => $element['data'],
        ]);

        return $this->twig->render($template, $context);
    }

    /**
     * List available Ui Elements in JSON.
     *
     * @return string
     */
    public function listUiElements(): string
    {
        return (string) json_encode($this->uiElementRegistry);
    }

    /**
     * Convert Youtube link to embed URL.
     *
     * @param string $url
     *
     * @return string|null
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
     *
     * @param string $url
     *
     * @return string|null
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

    /**
     * @param array $context
     *
     * @return string|null
     */
    public function getCurrentFilePath(array $context): ?string
    {
        $form = $context['form'];
        $app = $context['app'];
        if (empty($form) || empty($app)) {
            return null;
        }

        $path = $form->vars['data'];
        if (!empty($app->getRequest()->get('rich_editor_uploaded_files'))) {
            $uploadedFile = $app->getRequest()->get('rich_editor_uploaded_files');
            if (null !== ($fullName = $uploadedFile->getFullName())) {
                return $fullName;
            }
        }

        return $path;
    }
}
