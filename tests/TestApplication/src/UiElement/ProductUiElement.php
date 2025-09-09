<?php

/*
 * This file is part of Monsieur Biz' Rich Editor plugin for Sylius.
 *
 * (c) Monsieur Biz <sylius@monsieurbiz.com>
 *
 * For the full copyright and license information, please view the LICENSE.txt
 * file that was distributed with this source code.
 */

declare(strict_types=1);

namespace Tests\MonsieurBiz\SyliusRichEditorPlugin\TestApplication\UiElement;

use MonsieurBiz\SyliusRichEditorPlugin\UiElement\UiElementInterface;
use MonsieurBiz\SyliusRichEditorPlugin\UiElement\UiElementTrait;
use Sylius\Component\Channel\Context\ChannelContextInterface;
use Sylius\Component\Core\Model\ProductInterface;
use Sylius\Component\Core\Repository\ProductRepositoryInterface;

final class ProductUiElement implements UiElementInterface
{
    use UiElementTrait;

    public function __construct(
        private ChannelContextInterface $channelContext,
        private ProductRepositoryInterface $productRepository,
    ) {
    }

    public function getProduct(string $code): ?ProductInterface
    {
        return $this->productRepository->findOneByChannelAndCode($this->channelContext->getChannel(), $code);
    }
}
