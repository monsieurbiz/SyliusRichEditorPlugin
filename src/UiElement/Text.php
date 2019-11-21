<?php

declare(strict_types=1);

namespace Monsieurbiz\SyliusCmsPlugin\UiElement;

class Text extends AbstractUiElement
{
    protected $type = 'text';

    public function getFields(): array
    {
        return ['content'];
    }

    public function getForm(): void
    {
        // @TODO: Implement getForm() method.
    }
}
