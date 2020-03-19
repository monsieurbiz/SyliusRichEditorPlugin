<?php

declare(strict_types=1);

namespace MonsieurBiz\SyliusRichEditorPlugin\Factory;

use MonsieurBiz\SyliusRichEditorPlugin\Exception\DuplicatedUiElementTypeException;
use MonsieurBiz\SyliusRichEditorPlugin\Exception\UndefinedUiElementTypeException;
use MonsieurBiz\SyliusRichEditorPlugin\UiElement\UiElementInterface;
use Symfony\Contracts\Translation\TranslatorInterface;
use Webmozart\Assert\Assert;

final class UiElementFactory implements UiElementFactoryInterface
{
    private $uiElements = [];

    /**
     * UiElementFactory constructor.
     *
     * @param TranslatorInterface $translator
     * @param string[] $uiElementClasses
     *
     * @throws DuplicatedUiElementTypeException
     * @throws \ReflectionException
     */
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

    /**
     * @return UiElementInterface[]
     */
    public function getUiElements(): array
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
