<?php

declare(strict_types=1);

namespace MonsieurBiz\SyliusCmsPlugin\DependencyInjection;

use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Extension\Extension;

final class MonsieurBizSyliusCmsExtension extends Extension
{
    CONST EXTENSION_CONFIG_NAME = 'monsieur_biz_sylius_cms';

    public function load(array $configs, ContainerBuilder $container)
    {
        $configuration = new Configuration();
        $config = $this->processConfiguration($configuration, $configs);
        foreach ($config as $name => $value) {
            $container->setParameter(self::EXTENSION_CONFIG_NAME . '.' . $name, $value);
        }
    }


}
