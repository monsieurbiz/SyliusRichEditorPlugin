<?php

declare(strict_types=1);

namespace MonsieurBiz\SyliusRichEditorPlugin\UiElement\Element;

use MonsieurBiz\SyliusRichEditorPlugin\Form\Type\UiElement\ImageType;
use MonsieurBiz\SyliusRichEditorPlugin\UiElement\AbstractUiElement;

class Image extends AbstractUiElement
{
    protected $type = 'image';

    public function getImage(): string
    {
        return '/bundles/monsieurbizsyliusricheditorplugin/images/ui_elements/image.svg';
    }

    public function getFields(): array
    {
        return ['image', 'alt', 'title'];
    }

    public function getFormClass(): string
    {
        return ImageType::class;
    }
}
