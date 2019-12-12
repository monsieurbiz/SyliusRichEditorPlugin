<?php

declare(strict_types=1);

namespace MonsieurBiz\SyliusCmsPlugin\UiElement;

use MonsieurBiz\SyliusCmsPlugin\Form\Type\UiElement\QuoteType;

class Quote extends AbstractUiElement
{
    protected $type = 'quote';

    public function getImage(): string
    {
        return '/bundles/monsieurbizsyliuscmsplugin/images/ui_elements/quote.png';
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
