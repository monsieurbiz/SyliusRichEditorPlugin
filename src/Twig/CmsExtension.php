<?php

declare(strict_types=1);

namespace MonsieurBiz\SyliusCmsPlugin\Twig;

use MonsieurBiz\SyliusCmsPlugin\Exception\UndefinedUiElementTypeException;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use MonsieurBiz\SyliusCmsPlugin\UiElement\Factory;
use Twig\Environment;

final class CmsExtension extends AbstractExtension
{
    /**
     * @var Factory
     */
    private $factory;

    /**
     * @var Environment
     */
    private $twig;

    public function __construct(Factory $factory, Environment $twig)
    {
        $this->factory = $factory;
        $this->twig = $twig;
    }

    public function getFilters()
    {
        return [
            new TwigFilter('mbiz_cms_render', [$this, 'renderCmsField'], ['is_safe' => ['html']]),
        ];
    }

    public function renderCmsField($content)
    {
        $elements = json_decode($content, true);
        if (!$elements) {
            return $content;
        }

        $html = '';
        foreach ($elements as $element) {
            if (!isset($element['type'])) {
                continue;
            }

            try {
                $uiElement = $this->factory->getUiElementByType($element['type']);
            } catch (UndefinedUiElementTypeException $exception) {
                continue;
            }

            $template = $uiElement->getTemplate();

            $html .= $this->twig->render($template, ['element' => $element['fields']]);
        }

        return $html;
    }
}
