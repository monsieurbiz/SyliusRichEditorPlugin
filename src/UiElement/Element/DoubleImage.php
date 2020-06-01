<?php

declare(strict_types=1);

namespace MonsieurBiz\SyliusRichEditorPlugin\UiElement\Element;

use MonsieurBiz\SyliusRichEditorPlugin\Form\Type\UiElement\DoubleImageType;
use MonsieurBiz\SyliusRichEditorPlugin\UiElement\AbstractUiElement;

class DoubleImage extends AbstractUiElement
{
    protected $type = 'double_image';

    public function getImage(): string
    {
        return '/bundles/monsieurbizsyliusricheditorplugin/images/ui_elements/image.svg';
    }

    public function getFields(): array
    {
        return [
            'first_image', 'first_alt', 'first_title', 'first_link',
            'second_image', 'second_alt', 'second_title', 'second_link'
        ];
    }

    public function getFormClass(): string
    {
        return DoubleImageType::class;
    }
}
