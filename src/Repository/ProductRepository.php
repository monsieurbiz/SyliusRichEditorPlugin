<?php

declare(strict_types=1);

namespace MonsieurBiz\SyliusRichEditorPlugin\Repository;

use Doctrine\ORM\QueryBuilder;
use Sylius\Bundle\CoreBundle\Doctrine\ORM\ProductRepository as SyliusProductRepository;
use Sylius\Component\Core\Model\ChannelInterface;

class ProductRepository extends SyliusProductRepository
{
    public function createProductListByCodeQueryBuilder(string $products, ChannelInterface $channel, string $locale): QueryBuilder
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

        return $queryBuilder;
    }
}
