<?php

declare(strict_types=1);

namespace MonsieurBiz\SyliusRichEditorPlugin\UiElement;

use MonsieurBiz\SyliusRichEditorPlugin\Form\Type\UiElement\QuoteType;

class Quote extends AbstractUiElement
{
    protected $type = 'quote';

    public function getImage(): string
    {
        return '/bundles/monsieurbizsyliusricheditorplugin/images/ui_elements/quote.svg';
    }

    public function getFields(): array
    {
        return ['author', 'content'];
    }

    public function getFormClass(): string
    {
        return QuoteType::class;
    }
}
