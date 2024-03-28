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

namespace MonsieurBiz\SyliusRichEditorPlugin\Attribute;

use Attribute;
use MonsieurBiz\SyliusRichEditorPlugin\UiElement\UiElement;

#[Attribute(Attribute::TARGET_CLASS)]
class AsUiElement
{
    /**
     * @SuppressWarnings(PHPMD.ExcessiveParameterList)
     * @SuppressWarnings(PHPMD.BooleanArgumentFlag)
     */
    public function __construct(
        public string $code,
        public string $icon,
        public ?string $title = null,
        public ?string $description = null,
        public string $uiElement = UiElement::class,
        public ?TemplatesUiElement $templates = null,
        public string $alias = '',
        public string $wireframe = '',
        public bool $enabled = true,
        public array $tags = [],
    ) {
    }

    public function getCode(): string
    {
        return $this->code;
    }

    public function getConfiguration(): array
    {
        $configuration = [
            'title' => $this->getTitle(),
            'description' => $this->getDescription(),
            'icon' => $this->icon,
            'wireframe' => $this->wireframe,
            'enabled' => $this->enabled,
            'tags' => $this->tags,
            'classes' => [
                'ui_element' => $this->uiElement,
            ],
            'templates' => [
                'admin_render' => $this->getTemplates()->adminRender,
                'front_render' => $this->getTemplates()->frontRender,
                'admin_form' => $this->getTemplates()->adminForm,
            ],
            'form_options' => [],
        ];

        if ($this->alias) {
            $configuration['alias'] = $this->alias;
        }

        return $configuration;
    }

    private function getTitle(): string
    {
        return $this->title ?? 'app.ui_element.' . $this->getLastPartOfCode() . '.title';
    }

    private function getDescription(): string
    {
        return $this->description ?? 'app.ui_element.' . $this->getLastPartOfCode() . '.description';
    }

    private function getTemplates(): TemplatesUiElement
    {
        return $this->templates ?? new TemplatesUiElement(
            adminRender: 'Admin/UiElement/' . $this->getLastPartOfCode() . '.html.twig',
            frontRender: 'Shop/UiElement/' . $this->getLastPartOfCode() . '.html.twig',
        );
    }

    private function getLastPartOfCode(): string
    {
        $parts = explode('.', $this->code);

        return end($parts);
    }
}
