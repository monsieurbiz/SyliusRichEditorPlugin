<?php

declare(strict_types=1);

namespace Monsieurbiz\SyliusCmsPlugin\UiElement;

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
        // @TODO: Implement getForm() method.
        return '';
    }
}
