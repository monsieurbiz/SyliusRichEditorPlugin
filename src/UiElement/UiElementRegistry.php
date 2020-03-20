<?php
declare(strict_types=1);

namespace MonsieurBiz\SyliusRichEditorPlugin\UiElement;

use MonsieurBiz\SyliusRichEditorPlugin\Exception\UiElementNotFoundException;
use Webmozart\Assert\Assert;

final class UiElementRegistry implements UiElementRegistryInterface
{
    /**
     * @var UiElementInterface[]
     */
    private $uiElements = [];

    /**
     * @inheritDoc
     */
    public function addUiElement(UiElementInterface $uiElement): void
    {
        Assert::keyNotExists($this->uiElements, $uiElement->getType(), 'UiElement with type "%s" is already registered.');

        $this->uiElements[$uiElement->getType()] = $uiElement;
    }

    /**
     * @inheritDoc
     */
    public function hasUiElement(string $type): bool
    {
        return array_key_exists($type, $this->uiElements);
    }

    /**
     * @inheritDoc
     */
    public function getUiElement(string $type): UiElementInterface
    {
        if (!$this->hasUiElement($type)) {
            throw new UiElementNotFoundException($type);
        }

        return $this->uiElements[$type];
    }

    /**
     * @inheritDoc
     */
    public function getUiElements(): array
    {
        return $this->uiElements;
    }
}
