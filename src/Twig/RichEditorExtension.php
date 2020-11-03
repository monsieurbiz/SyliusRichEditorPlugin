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

use MonsieurBiz\SyliusRichEditorPlugin\Event\RenderUiElementEvent;
use MonsieurBiz\SyliusRichEditorPlugin\Exception\UiElementNotFoundException;
use MonsieurBiz\SyliusRichEditorPlugin\UiElement\RegistryInterface;
use MonsieurBiz\SyliusRichEditorPlugin\Validator\Constraints\YoutubeUrlValidator;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Twig\Environment;
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
     * @var EventDispatcherInterface
     */
    private $eventDispatcher;

    /**
     * RichEditorExtension constructor.
     *
     * @param RegistryInterface $uiElementRegistry
     * @param Environment $twig
     * @param EventDispatcherInterface $eventDispatcher
     */
    public function __construct(
        RegistryInterface $uiElementRegistry,
        Environment $twig,
        EventDispatcherInterface $eventDispatcher
    ) {
        $this->uiElementRegistry = $uiElementRegistry;
        $this->twig = $twig;
        $this->eventDispatcher = $eventDispatcher;
    }

    /**
     * @return TwigFilter[]
     */
    public function getFilters()
    {
        return [
            new TwigFilter('monsieurbiz_richeditor_render_element', [$this, 'renderRichEditorField'], ['is_safe' => ['html']]),
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
     * @throws \Twig\Error\LoaderError
     * @throws \Twig\Error\RuntimeError
     * @throws \Twig\Error\SyntaxError
     *
     * @return string
     */
    public function renderRichEditorField(string $content)
    {
        $elements = json_decode($content, true);
        if (!\is_array($elements)) {
            return $content;
        }

        $html = '';
        foreach ($elements as $element) {
            if (!isset($element['code'])) {
                if (!isset($element['type'], $element['fields'])) {
                    continue;
                }
                $element = [
                    'code' => $element['type'],
                    'data' => $element['fields'],
                ];
            }

            try {
                $uiElement = $this->uiElementRegistry->getUiElement($element['code']);
            } catch (UiElementNotFoundException $exception) {
                continue;
            }

            $template = $uiElement->getFrontRenderTemplate();

            $event = new RenderUiElementEvent($uiElement, $element);
            $this->eventDispatcher->dispatch($event);
            $element = $event->getElement();

            $html .= $this->twig->render($template, [
                'uiElement' => $uiElement,
                'element' => $element['data'],
            ]);
        }

        return $html;
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
