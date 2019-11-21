<?php

declare(strict_types=1);

namespace Monsieurbiz\SyliusCmsPlugin\UiElement;

class Image extends AbstractUiElement
{
    protected $type = 'image';

    public function getFields(): array
    {
        return ['path', 'alt', 'title'];
    }

    public function getForm(): void
    {
        // @TODO: Implement getForm() method.
    }
}
