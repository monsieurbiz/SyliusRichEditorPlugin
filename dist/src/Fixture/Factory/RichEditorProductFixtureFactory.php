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

namespace App\Fixture\Factory;

use InvalidArgumentException;
use Sylius\Bundle\CoreBundle\Fixture\Factory\AbstractExampleFactory;
use Sylius\Component\Core\Model\ProductInterface;
use Sylius\Component\Core\Repository\ProductRepositoryInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

final class RichEditorProductFixtureFactory extends AbstractExampleFactory implements RichEditorProductFixtureFactoryInterface
{
    private OptionsResolver $optionsResolver;

    public function __construct(
        private ProductRepositoryInterface $productRepository,
    ) {
        $this->optionsResolver = new OptionsResolver();
        $this->configureOptions($this->getOptionsResolver());
    }

    public function getOptionsResolver(): OptionsResolver
    {
        return $this->optionsResolver;
    }

    public function create(array $options = []): ProductInterface
    {
        $options = $this->optionsResolver->resolve($options);

        /** @var ProductInterface $product */
        $product = $this->productRepository->findOneBy(['code' => $options['code']]);
        if (null === $product) {
            throw new InvalidArgumentException(\sprintf('Product with code "%s" not found.', $options['code']));
        }

        foreach ($options['translations'] as $locale => $translation) {
            $productTranslation = $product->getTranslation($locale);
            if (null === $productTranslation) {
                throw new InvalidArgumentException(\sprintf('Menu item translation with locale "%s" not found.', $translation['locale']));
            }

            $productTranslation->setDescription($translation['description']);
        }

        return $product;
    }

    protected function configureOptions(OptionsResolver $resolver): void
    {
        $resolver
            ->setDefault('code', null)
            ->setDefault('translations', [])
        ;
    }
}
