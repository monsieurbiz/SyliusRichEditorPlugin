<?php

declare(strict_types=1);

namespace MonsieurBiz\SyliusCmsPlugin\UiElement;

use MonsieurBiz\SyliusCmsPlugin\Form\Type\UiElement\TextType;

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
        return TextType::class;
    }
}
