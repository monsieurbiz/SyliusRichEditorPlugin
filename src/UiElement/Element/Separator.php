<?php

declare(strict_types=1);

namespace MonsieurBiz\SyliusRichEditorPlugin\UiElement\Element;

use MonsieurBiz\SyliusRichEditorPlugin\Form\Type\UiElement\SeparatorType;
use MonsieurBiz\SyliusRichEditorPlugin\UiElement\AbstractUiElement;

class Separator extends AbstractUiElement
{
    protected $type = 'separator';

    public function getFields(): array
    {
        return ['hidden'];
    }

    public function getFormClass(): string
    {
        return SeparatorType::class;
    }
}
