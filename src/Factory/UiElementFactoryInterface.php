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

interface UiElementFactoryInterface
{
    /**
     * @return UiElementInterface[]
     */
    public function getUiElements(): array;

    /**
     * @param string $type
     *
     * @throws UiElementNotFoundException
     *
     * @return UiElementInterface
     */
    public function getUiElementByType(string $type): UiElementInterface;
}
