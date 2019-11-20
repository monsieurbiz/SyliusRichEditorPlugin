<?php

declare(strict_types=1);

namespace Monsieurbiz\SyliusCmsPlugin\UiElement;

class Image implements UiElementInterface
{
    const TYPE = 'image';

    use UiElementTrait;

    public function getFields(): array
    {
        return ['path', 'alt', 'title'];
    }
}
