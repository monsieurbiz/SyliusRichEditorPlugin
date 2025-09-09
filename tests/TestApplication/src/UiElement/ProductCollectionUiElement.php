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
use Sylius\Component\Core\Repository\ProductRepositoryInterface;

final class ProductCollectionUiElement implements UiElementInterface
{
    use UiElementTrait;

    public function __construct(
        private ChannelContextInterface $channelContext,
        private ProductRepositoryInterface $productRepository,
    ) {
    }

    public function getProducts(array $products): array
    {
        $codes = [];
        foreach ($products as $product) {
            if ($product['product_code'] ?? null) {
                $codes[] = $product['product_code'];
            }
        }

        if (empty($codes)) {
            return [];
        }

        return $this->productRepository->createQueryBuilder('o')
            ->where('o.code IN (:codes)')
            ->andWhere(':channel MEMBER OF o.channels')
            ->andWhere('o.enabled = :enabled')
            ->setParameter('channel', $this->channelContext->getChannel())
            ->setParameter('codes', $codes)
            ->setParameter('enabled', true)
            ->getQuery()
            ->getResult()
        ;
    }
}
