<?php

declare(strict_types=1);

namespace MonsieurBiz\SyliusRichEditorPlugin\UiElement\Element;

use MonsieurBiz\SyliusRichEditorPlugin\Form\Type\UiElement\TaxonProductType;
use MonsieurBiz\SyliusRichEditorPlugin\UiElement\AbstractUiElement;

class TaxonProduct extends AbstractUiElement
{
    protected $type = 'taxon_product';

    public function getFields(): array
    {
        return ['taxon', 'number_of_products', 'title', 'button_label'];
    }

    public function getFormClass(): string
    {
        return TaxonProductType::class;
    }
}
