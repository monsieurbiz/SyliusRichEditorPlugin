<?php

declare(strict_types=1);

namespace Monsieurbiz\SyliusCmsPlugin\UiElement;

use Monsieurbiz\SyliusCmsPlugin\Exception\DuplicatedUiElementTypeException;
use Monsieurbiz\SyliusCmsPlugin\Exception\UndefinedUiElementTypeException;
use Symfony\Contracts\Translation\TranslatorInterface;
use Webmozart\Assert\Assert;

final class Factory
{
    private $uiElements = [];

    public function __construct(TranslatorInterface $translator, array $uiElementClasses)
    {
        foreach ($uiElementClasses as $uiElementClass) {
            /** @var UiElementInterface $uiElement */
            $uiElement = new $uiElementClass($translator);
            Assert::isInstanceOf($uiElement, UiElementInterface::class);
            if (isset($this->uiElements[$uiElement->getType()])) {
                $reflection = new \ReflectionClass($this->uiElements[$uiElement->getType()]);
                throw new DuplicatedUiElementTypeException(sprintf(
                    'The UI Element with type "%s" already exists in class "%s',
                    $uiElement->getType(),
                    $reflection->getName()
                ));
            }
            $this->uiElements[$uiElement->getType()] = $uiElement;
        }
    }

    public function getUiElements()
    {
        return $this->uiElements;
    }

    /**
     * @param string $type
     * @return UiElementInterface
     * @throws UndefinedUiElementTypeException
     */
    public function getUiElementByType(string $type): UiElementInterface
    {
        if (!isset($this->uiElements[$type])) {
            throw new UndefinedUiElementTypeException(sprintf('The UI Element type "%s" cannot be found', $type));
        }
        return $this->uiElements[$type];
    }
}
