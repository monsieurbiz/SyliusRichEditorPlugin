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

namespace MonsieurBiz\SyliusRichEditorPlugin\DependencyInjection;

use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Extension\Extension;

final class MonsieurBizSyliusRichEditorExtension extends Extension
{
    public const EXTENSION_CONFIG_NAME = 'monsieur_biz_sylius_rich_editor';

    public function load(array $configs, ContainerBuilder $container): void
    {
        $configuration = new Configuration();
        $config = $this->processConfiguration($configuration, $configs);
        foreach ($config as $name => $value) {
            $container->setParameter(self::EXTENSION_CONFIG_NAME . '.' . $name, $value);
        }
    }
}
