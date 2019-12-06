<?php

declare(strict_types=1);

namespace Monsieurbiz\SyliusCmsPlugin\UiElement;

use Monsieurbiz\SyliusCmsPlugin\Form\Type\UiElement\ImageType;

class Image extends AbstractUiElement
{
    protected $type = 'image';

    public function getImage(): string
    {
        return '/bundles/monsieurbizsyliuscmsplugin/images/ui_elements/image.png';
    }

    public function getFields(): array
    {
        return ['path', 'alt', 'title'];
    }

    public function getFormClass(): string
    {
        return ImageType::class;
    }
}
