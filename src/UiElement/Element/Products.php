<?php

declare(strict_types=1);

namespace MonsieurBiz\SyliusRichEditorPlugin\UiElement\Element;

use MonsieurBiz\SyliusRichEditorPlugin\Form\Type\UiElement\ProductsType;
use MonsieurBiz\SyliusRichEditorPlugin\UiElement\AbstractUiElement;

class Products extends AbstractUiElement
{
    protected $type = 'products';

    public function getFields(): array
    {
        return ['products', 'title'];
    }

    public function getFormClass(): string
    {
        return ProductsType::class;
    }
}
