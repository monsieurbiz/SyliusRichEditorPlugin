<?php

declare(strict_types=1);

namespace Monsieurbiz\SyliusCmsPlugin\UiElement;

class Text implements UiElementInterface
{
    const TYPE = 'text';

    use UiElementTrait;

    public function getFields(): array
    {
        return ['content'];
    }
}
