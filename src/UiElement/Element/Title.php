<?php

declare(strict_types=1);

namespace MonsieurBiz\SyliusRichEditorPlugin\UiElement\Element;

use MonsieurBiz\SyliusRichEditorPlugin\Form\Type\UiElement\TitleType;
use MonsieurBiz\SyliusRichEditorPlugin\UiElement\AbstractUiElement;

class Title extends AbstractUiElement
{
    protected $type = 'title';

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
        return TitleType::class;
    }
}
