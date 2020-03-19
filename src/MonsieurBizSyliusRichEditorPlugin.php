<?php

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
    public function build(ContainerBuilder $container)
    {
        parent::build($container);

        $container->addCompilerPass(new UiElementRegistryPass());
    }
}
