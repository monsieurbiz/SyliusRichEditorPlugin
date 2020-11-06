<?php

namespace spec\MonsieurBiz\SyliusRichEditorPlugin\UiElement;

use MonsieurBiz\SyliusRichEditorPlugin\UiElement\UiElement;
use MonsieurBiz\SyliusRichEditorPlugin\UiElement\UiElementInterface;
use PhpSpec\ObjectBehavior;

class UiElementSpec extends ObjectBehavior
{
    function it_is_initializable()
    {
        $this->shouldHaveType(UiElement::class);
        $this->shouldHaveType(UiElementInterface::class);
    }
}
