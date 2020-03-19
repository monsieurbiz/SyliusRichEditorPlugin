<?php
declare(strict_types=1);

namespace MonsieurBiz\SyliusRichEditorPlugin\UiElement;

use MonsieurBiz\SyliusRichEditorPlugin\Exception\UiElementNotFoundException;

interface UiElementRegistryInterface
{

    /**
     * @param UiElementInterface $uiElement
     */
    public function addUiElement(UiElementInterface $uiElement): void;

    /**
     * @param string $type
     *
     * @return bool
     */
    public function hasUiElement(string $type): bool;

    /**
     * @param string $type
     *
     * @throws UiElementNotFoundException
     * @return UiElementInterface
     */
    public function getUiElement(string $type): UiElementInterface;

    /**
     * @return UiElementInterface[]
     */
    public function getUiElements(): array;
}
