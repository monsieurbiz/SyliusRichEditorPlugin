<?php

/*
 * This file is part of Monsieur Biz' Rich Editor plugin for Sylius.
 *
 * (c) Monsieur Biz <sylius@monsieurbiz.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

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
    private UiElementRegistryInterface $uiElementRegistry;

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
     * @throws UiElementNotFoundException
     *
     * @return UiElementInterface
     */
    public function getUiElementByType(string $type): UiElementInterface
    {
        return $this->uiElementRegistry->getUiElement($type);
    }
}
