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

namespace Tests\MonsieurBiz\SyliusRichEditorPlugin\TestApplication\Fixture;

use Doctrine\ORM\EntityManagerInterface;
use Sylius\Bundle\CoreBundle\Fixture\AbstractResourceFixture;
use Symfony\Component\Config\Definition\Builder\ArrayNodeDefinition;
use Tests\MonsieurBiz\SyliusRichEditorPlugin\TestApplication\Fixture\Factory\RichEditorProductFixtureFactoryInterface;

final class RichEditorProductFixture extends AbstractResourceFixture
{
    public function __construct(EntityManagerInterface $menuManager, RichEditorProductFixtureFactoryInterface $exampleFactory)
    {
        parent::__construct($menuManager, $exampleFactory);
    }

    public function configureResourceNode(ArrayNodeDefinition $resourceNode): void
    {
        /** @phpstan-ignore-next-line */
        $resourceNode
            ->children()
                ->scalarNode('code')->cannotBeEmpty()->end()
                ->arrayNode('translations')
                    ->defaultValue([])
                        ->arrayPrototype()
                            ->children()
                                ->scalarNode('description')->cannotBeEmpty()->end()
                            ->end()
                        ->end()
                    ->end()
                ->end()
            ->end()
        ;
    }

    public function getName(): string
    {
        return 'monsieurbiz_rich_editor_product';
    }
}
