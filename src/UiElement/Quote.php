<?php

declare(strict_types=1);

namespace Monsieurbiz\SyliusCmsPlugin\UiElement;

class Quote extends AbstractUiElement
{
    protected $type = 'quote';

    public function getFields(): array
    {
        return ['author', 'content'];
    }

    public function getForm(): void
    {
        // @TODO: Implement getForm() method.
    }
}
