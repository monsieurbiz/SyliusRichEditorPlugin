<?php
declare(strict_types=1);

namespace MonsieurBiz\SyliusRichEditorPlugin\UiElement;

interface NameableInterface
{

    /**
     * @param string $name
     */
    public function setUiElementName(string $name): void;

    /**
     * @return string|null
     */
    public function getUiElementName(): ?string;

}
