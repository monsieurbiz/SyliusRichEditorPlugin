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
     *
     * @return UiElementInterface
     */
    public function getUiElement(string $type): UiElementInterface;

    /**
     * @return UiElementInterface[]
     */
    public function getUiElements(): array;
}
