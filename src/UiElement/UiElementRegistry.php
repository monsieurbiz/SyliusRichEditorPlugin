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
use Webmozart\Assert\Assert;

final class UiElementRegistry implements UiElementRegistryInterface
{
    /**
     * @var UiElementInterface[]
     */
    private array $uiElements = [];

    /**
     * {@inheritdoc}
     */
    public function addUiElement(UiElementInterface $uiElement): void
    {
        Assert::keyNotExists($this->uiElements, $uiElement->getType(), 'UiElement with type "%s" is already registered.');

        $this->uiElements[$uiElement->getType()] = $uiElement;
    }

    /**
     * {@inheritdoc}
     */
    public function hasUiElement(string $type): bool
    {
        return \array_key_exists($type, $this->uiElements);
    }

    /**
     * {@inheritdoc}
     */
    public function getUiElement(string $type): UiElementInterface
    {
        if (!$this->hasUiElement($type)) {
            throw new UiElementNotFoundException($type);
        }

        return $this->uiElements[$type];
    }

    /**
     * {@inheritdoc}
     */
    public function getUiElements(): array
    {
        return $this->uiElements;
    }
}
