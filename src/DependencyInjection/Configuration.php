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

namespace MonsieurBiz\SyliusRichEditorPlugin\DependencyInjection;

use MonsieurBiz\SyliusRichEditorPlugin\UiElement\UiElement;
use Symfony\Component\Config\Definition\Builder\ArrayNodeDefinition;
use Symfony\Component\Config\Definition\Builder\TreeBuilder;
use Symfony\Component\Config\Definition\ConfigurationInterface;

final class Configuration implements ConfigurationInterface
{
    /**
     * @inheritdoc
     */
    public function getConfigTreeBuilder(): TreeBuilder
    {
        $treeBuilder = new TreeBuilder('monsieurbiz_sylius_richeditor');
        /** @var ArrayNodeDefinition $rootNode */
        $rootNode = $treeBuilder->getRootNode();

        $this->addUiElements($rootNode);

        return $treeBuilder;
    }

    private function addUiElements(ArrayNodeDefinition $rootNode): void
    {
        /** @phpstan-ignore-next-line */
        $rootNode
            ->children()
                ->scalarNode('upload_directory')->end()
                ->scalarNode('image_upload_directory')->end()
                ->scalarNode('default_element')->defaultValue('monsieurbiz.html')->end()
                ->scalarNode('default_element_data_field')->defaultValue('content')->end()
                ->arrayNode('ui_elements')
                    ->useAttributeAsKey('code', false)
                    ->defaultValue([])
                    ->arrayPrototype()
                        ->children()
                            ->scalarNode('title')->isRequired()->cannotBeEmpty()->end()
                            ->scalarNode('description')->isRequired()->cannotBeEmpty()->end()
                            ->scalarNode('alias')->end()
                            ->scalarNode('icon')->isRequired()->cannotBeEmpty()->end()
                            ->scalarNode('wireframe')->defaultValue('')->end()
                            ->booleanNode('enabled')->defaultTrue()->end()
                            ->arrayNode('classes')
                                ->addDefaultsIfNotSet()
                                ->children()
                                    ->scalarNode('form')->isRequired()->cannotBeEmpty()->end()
                                    ->scalarNode('ui_element')->defaultValue(UiElement::class)->end()
                                ->end()
                            ->end()
                            ->arrayNode('templates')
                                ->addDefaultsIfNotSet()
                                ->children()
                                    ->scalarNode('admin_form')
                                        ->defaultValue('@MonsieurBizSyliusRichEditorPlugin/admin/form.html.twig')
                                    ->end()
                                    ->scalarNode('admin_render')->isRequired()->cannotBeEmpty()->end()
                                    ->scalarNode('front_render')->isRequired()->cannotBeEmpty()->end()
                                ->end()
                            ->end()
                            ->arrayNode('form_options')
                                ->useAttributeAsKey('name')
                                ->prototype('scalar')->end()
                            ->end()
                            ->arrayNode('tags')
                                ->defaultValue([])
                                ->scalarPrototype()->end()
                            ->end()
                        ->end()
                    ->end()
                ->end()
            ->end()
        ->end()
        ;
    }
}
