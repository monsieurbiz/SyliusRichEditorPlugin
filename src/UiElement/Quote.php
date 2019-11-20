<?php

declare(strict_types=1);

namespace Monsieurbiz\SyliusCmsPlugin\UiElement;

class Quote implements UiElementInterface
{
    const TYPE = 'quote';

    use UiElementTrait;

    public function getFields(): array
    {
        return ['author', 'content'];
    }
}
