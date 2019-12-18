<?php

declare(strict_types=1);

namespace MonsieurBiz\SyliusRichEditorPlugin\DependencyInjection;

use Symfony\Component\Config\Definition\Builder\TreeBuilder;
use Symfony\Component\Config\Definition\ConfigurationInterface;

final class Configuration implements ConfigurationInterface
{
    /**
     * {@inheritdoc}
     */
    public function getConfigTreeBuilder(): TreeBuilder
    {
        $treeBuilder = new TreeBuilder('monsieurbiz_sylius_rich_editor');
        if (\method_exists($treeBuilder, 'getRootNode')) {
            $rootNode = $treeBuilder->getRootNode();
        } else {
            // BC layer for symfony/config 4.1 and older
            $rootNode = $treeBuilder->root('monsieurbiz_sylius_rich_editor');
        }

        $rootNode
            ->children()
            ->variableNode('ui_element_classes')->end()
            ->scalarNode('upload_directory')->end()
            ->end()
        ;

        return $treeBuilder;
    }
}
