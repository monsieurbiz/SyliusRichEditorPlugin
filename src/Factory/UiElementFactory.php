<?php

declare(strict_types=1);

namespace MonsieurBiz\SyliusRichEditorPlugin\Factory;

use MonsieurBiz\SyliusRichEditorPlugin\Exception\UiElementNotFoundException;
use MonsieurBiz\SyliusRichEditorPlugin\UiElement\UiElementInterface;
use MonsieurBiz\SyliusRichEditorPlugin\UiElement\UiElementRegistryInterface;

final class UiElementFactory implements UiElementFactoryInterface
{
    /**
     * @var UiElementRegistryInterface
     */
    private $uiElementRegistry;

    /**
     * UiElementFactory constructor.
     *
     * @param UiElementRegistryInterface $uiElementRegistry
     */
    public function __construct(
        UiElementRegistryInterface $uiElementRegistry
    ) {
        $this->uiElementRegistry = $uiElementRegistry;
    }

    /**
     * @return UiElementInterface[]
     */
    public function getUiElements(): array
    {
        return $this->uiElementRegistry->getUiElements();
    }

    /**
     * @param string $type
     *
     * @return UiElementInterface
     * @throws UiElementNotFoundException
     */
    public function getUiElementByType(string $type): UiElementInterface
    {
        return $this->uiElementRegistry->getUiElement($type);
    }
}
