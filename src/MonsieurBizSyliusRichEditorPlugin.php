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

namespace MonsieurBiz\SyliusRichEditorPlugin;

use MonsieurBiz\SyliusRichEditorPlugin\Application\MonofonyPluginTrait;
use MonsieurBiz\SyliusRichEditorPlugin\DependencyInjection\UiElementRegistryPass;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\HttpKernel\Bundle\Bundle;

final class MonsieurBizSyliusRichEditorPlugin extends Bundle
{
    use MonofonyPluginTrait;

    /**
     * @param ContainerBuilder $container
     */
    public function build(ContainerBuilder $container): void
    {
        parent::build($container);

        $container->addCompilerPass(new UiElementRegistryPass());
    }
}
