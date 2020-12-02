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
    /**
     * @var RegistryInterface
     */
    private $uiElementRegistry;

    /**
     * @var Environment
     */
    private $twig;

    /**
     * RichEditorExtension constructor.
     *
     * @param RegistryInterface $uiElementRegistry
     * @param Environment $twig
     */
    public function __construct(
        RegistryInterface $uiElementRegistry,
        Environment $twig
    ) {
        $this->uiElementRegistry = $uiElementRegistry;
        $this->twig = $twig;
    }

    /**
     * @return TwigFilter[]
     */
    public function getFilters()
    {
        return [
            new TwigFilter('monsieurbiz_richeditor_render_field', [$this, 'renderRichEditorField'], ['is_safe' => ['html']]),
        ];
    }

    /**
     * @return array|TwigFunction[]
     */
    public function getFunctions()
    {
        return [
            new TwigFunction('monsieurbiz_richeditor_list_elements', [$this, 'listUiElements'], ['is_safe' => ['html', 'js']]),
            new TwigFunction('monsieurbiz_richeditor_youtube_link', [$this, 'convertYoutubeEmbeddedLink'], ['is_safe' => ['html', 'js']]),
        ];
    }

    /**
     * @param string $content
     *
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     *
     * @return string
     */
    public function renderRichEditorField(string $content)
    {
        $elements = json_decode($content, true);
        if (!\is_array($elements)) {
            return $content;
        }

        return $this->renderElements($elements);
    }

    /**
     * @param array $elements
     *
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     *
     * @return string
     */
    private function renderElements(array $elements): string
    {
        $html = '';
        foreach ($elements as $element) {
            try {
                $html .= $this->renderElement($element);
            } catch (UiElementNotFoundException $e) {
                continue;
            }
        }

        return $html;
    }

    /**
     * @param array $element
     *
     * @throws UiElementNotFoundException
     * @throws LoaderError [twig.render] When the template cannot be found
     * @throws SyntaxError [twig.render] When an error occurred during compilation
     * @throws RuntimeError [twig.render] When an error occurred during rendering
     *
     * @return string
     */
    private function renderElement(array $element): string
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

        return $this->twig->render($template, [
            'ui_element' => $uiElement,
            'element' => $element['data'],
        ]);
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
        $isValid = (bool) preg_match(YoutubeUrlValidator::YOUTUBE_REGEX_VALIDATOR, $url, $matches);

        if (!$isValid || !isset($matches[1])) {
            return null;
        }

        return sprintf('https://www.youtube.com/embed/%s', $matches[1]);
    }
}
