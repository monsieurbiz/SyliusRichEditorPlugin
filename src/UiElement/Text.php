<?php

declare(strict_types=1);

namespace Monsieurbiz\SyliusCmsPlugin\UiElement;

class Text extends AbstractUiElement
{
    protected $type = 'text';

    public function getImage(): string
    {
        return '/bundles/monsieurbizsyliuscmsplugin/images/ui_elements/text.png';
    }

    public function getFields(): array
    {
        return ['content'];
    }

    public function getFormClass(): string
    {
        // @TODO: Implement getForm() method.
        return '';
    }
}
