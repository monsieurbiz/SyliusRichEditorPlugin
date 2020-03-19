<?php
declare(strict_types=1);

namespace MonsieurBiz\SyliusRichEditorPlugin\Factory;

use MonsieurBiz\SyliusRichEditorPlugin\Exception\DuplicatedUiElementTypeException;
use MonsieurBiz\SyliusRichEditorPlugin\UiElement\UiElementInterface;
use Symfony\Contracts\Translation\TranslatorInterface;

interface UiElementFactoryInterface
{

    /**
     * UiElementFactory constructor.
     *
     * @param TranslatorInterface $translator
     * @param string[] $uiElementClasses
     *
     * @throws DuplicatedUiElementTypeException
     * @throws \ReflectionException
     */
    public function __construct(TranslatorInterface $translator, array $uiElementClasses);

    /**
     * @return UiElementInterface[]
     */
    public function getUiElements(): array;

    /**
     * @param string $type
     *
     * @return UiElementInterface
     */
    public function getUiElementByType(string $type): UiElementInterface;

}
