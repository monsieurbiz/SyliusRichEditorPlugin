<?php

declare(strict_types=1);

namespace MonsieurBiz\SyliusRichEditorPlugin\UiElement\Element;

use MonsieurBiz\SyliusRichEditorPlugin\Form\Type\UiElement\ButtonLinkType;
use MonsieurBiz\SyliusRichEditorPlugin\UiElement\AbstractUiElement;

class ButtonLink extends AbstractUiElement
{
    protected $type = 'button_link';

    public function getFields(): array
    {
        return ['label', 'link'];
    }

    public function getFormClass(): string
    {
        return ButtonLinkType::class;
    }
}
