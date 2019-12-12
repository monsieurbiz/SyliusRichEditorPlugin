<?php

declare(strict_types=1);

namespace Monsieurbiz\SyliusCmsPlugin\UiElement;

use Monsieurbiz\SyliusCmsPlugin\Form\Type\UiElement\QuoteType;

class Quote extends AbstractUiElement
{
    protected $type = 'quote';

    public function getImage(): string
    {
        return '/bundles/monsieurbizsyliuscmsplugin/images/ui_elements/quote.svg';
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
