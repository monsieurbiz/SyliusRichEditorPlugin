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

use Symfony\Component\Config\FileLocator;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Extension\Extension;
use Symfony\Component\DependencyInjection\Loader\YamlFileLoader;

final class MonsieurBizSyliusRichEditorExtension extends Extension
{
    /**
     * @inheritdoc
     */
    public function load(array $config, ContainerBuilder $container): void
    {
        $configuration = $this->getConfiguration([], $container);
        $config = $this->processConfiguration(/** @scrutinizer ignore-type */ $configuration, $config);
        $container->setParameter('monsieurbiz.richeditor.config.ui_elements', $config['ui_elements']);
        $container->setParameter('monsieurbiz.richeditor.config.upload_directory', $config['upload_directory']);
        $container->setParameter('monsieurbiz.richeditor.config.image_upload_directory', $config['image_upload_directory']);
        $container->setParameter('monsieurbiz.richeditor.config.default_element', $config['default_element']);
        $container->setParameter('monsieurbiz.richeditor.config.default_element_data_field', $config['default_element_data_field']);

        $loader = new YamlFileLoader($container, new FileLocator(__DIR__ . '/../Resources/config'));
        $loader->load('services.yaml');
    }

    /**
     * @inheritdoc
     */
    public function getAlias(): string
    {
        return str_replace(['rich_editor', 'monsieur_biz'], ['richeditor', 'monsieurbiz'], parent::getAlias());
    }
}
