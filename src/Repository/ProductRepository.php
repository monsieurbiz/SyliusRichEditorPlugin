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

namespace MonsieurBiz\SyliusRichEditorPlugin\Repository;

use Sylius\Bundle\CoreBundle\Doctrine\ORM\ProductRepository as SyliusProductRepository;
use Sylius\Component\Core\Model\ChannelInterface;
use Sylius\Component\Core\Model\TaxonInterface;

/**
 * @deprecated since 2.0
 */
class ProductRepository extends SyliusProductRepository
{
    /**
     * Get available products depending on a list of codes.
     *
     * @param string $products
     * @param ChannelInterface $channel
     * @param string $locale
     *
     * @return array
     */
    public function createProductListByProductCodes(string $products, ChannelInterface $channel, string $locale): array
    {
        // Add translation
        $queryBuilder = $this->createQueryBuilder('o')
            ->distinct()
            ->addSelect('translation')
            ->innerJoin('o.translations', 'translation', 'WITH', 'translation.locale = :locale')
        ;

        // Filter on channel, enabled and locale
        $queryBuilder
            ->andWhere(':channel MEMBER OF o.channels')
            ->andWhere('o.enabled = true')
            ->setParameter('locale', $locale)
            ->setParameter('channel', $channel)
        ;

        // Filter on product codes
        $queryBuilder
            ->andWhere('o.code IN (:productCodes)')
            ->setParameter('productCodes', explode(',', $products))
        ;

        return $queryBuilder->getQuery()->getResult();
    }

    /**
     * Get product list from Taxon.
     *
     * @param ChannelInterface $channel
     * @param TaxonInterface $taxon
     * @param string $locale
     * @param array $sorting
     * @param bool $includeAllDescendants
     * @param string $count
     *
     * @return array
     */
    public function createProductListByTaxonCode(
        ChannelInterface $channel,
        TaxonInterface $taxon,
        string $locale,
        array $sorting = [],
        bool $includeAllDescendants = false,
        string $count
    ): array {
        $queryBuilder = parent::createShopListQueryBuilder($channel, $taxon, $locale, $sorting, $includeAllDescendants);
        $queryBuilder->setMaxResults((int) $count);

        return $queryBuilder->getQuery()->getResult();
    }
}
