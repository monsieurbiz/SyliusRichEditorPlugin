<?php

declare(strict_types=1);

namespace MonsieurBiz\SyliusRichEditorPlugin\UiElement\Element;

use MonsieurBiz\SyliusRichEditorPlugin\Form\Type\UiElement\TextType;
use MonsieurBiz\SyliusRichEditorPlugin\UiElement\AbstractUiElement;

class Text extends AbstractUiElement
{
    protected $type = 'text';

    public function getImage(): string
    {
        return '/bundles/monsieurbizsyliusricheditorplugin/images/ui_elements/text.svg';
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
