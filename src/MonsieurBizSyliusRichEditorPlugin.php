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

namespace MonsieurBiz\SyliusRichEditorPlugin;

use LogicException;
use MonsieurBiz\SyliusRichEditorPlugin\DependencyInjection\UiElementRegistryPass;
use Sylius\Bundle\CoreBundle\Application\SyliusPluginTrait;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Extension\ExtensionInterface;
use Symfony\Component\HttpKernel\Bundle\Bundle;

final class MonsieurBizSyliusRichEditorPlugin extends Bundle
{
    use SyliusPluginTrait;

    /**
     * Returns the plugin's container extension.
     *
     * @throws LogicException
     *
     * @return ExtensionInterface|null The container extension
     */
    public function getContainerExtension(): ?ExtensionInterface
    {
        if (null === $this->containerExtension) {
            $this->containerExtension = false;
            $extension = $this->createContainerExtension();
            if (null !== $extension) {
                $this->containerExtension = $extension;
            }
        }

        return $this->containerExtension instanceof ExtensionInterface
            ? $this->containerExtension
            : null;
    }

    public function build(ContainerBuilder $container): void
    {
        parent::build($container);
        $container->addCompilerPass(new UiElementRegistryPass());
    }

    public static function imageMediaManagerExists(): bool
    {
        return class_exists('MonsieurBiz\SyliusMediaManagerPlugin\Form\Type\ImageType');
    }

    public static function videoMediaManagerExists(): bool
    {
        return class_exists('MonsieurBiz\SyliusMediaManagerPlugin\Form\Type\VideoType');
    }

    public static function fileExtensionMediaManagerExists(): bool
    {
        return class_exists('MonsieurBiz\SyliusMediaManagerPlugin\Twig\Extension\FileExtension');
    }
}
