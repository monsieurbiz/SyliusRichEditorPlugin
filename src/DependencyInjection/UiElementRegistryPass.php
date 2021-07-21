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

use MonsieurBiz\SyliusRichEditorPlugin\UiElement\Metadata;
use MonsieurBiz\SyliusRichEditorPlugin\UiElement\UiElement;
use MonsieurBiz\SyliusRichEditorPlugin\UiElement\UiElementInterface;
use Symfony\Component\DependencyInjection\Compiler\CompilerPassInterface;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Definition;
use Symfony\Component\DependencyInjection\Exception\InvalidArgumentException;
use Symfony\Component\DependencyInjection\Reference;

final class UiElementRegistryPass implements CompilerPassInterface
{
    /**
     * {@inheritdoc}
     */
    public function process(ContainerBuilder $container): void
    {
        // Get required parameters and definitions in order to populate the DI
        try {
            $uiElements = $container->getParameter('monsieurbiz.richeditor.config.ui_elements');
            $registry = $container->findDefinition('monsieurbiz.richeditor.registry');
            $metadataRegistry = $container->findDefinition('monsieurbiz.richeditor.metadata_registry');
        } catch (InvalidArgumentException $exception) {
            return;
        }

        if (!\is_array($uiElements)) {
            return;
        }

        foreach ($uiElements as $code => $configuration) {
            $metadataRegistry->addMethodCall('addFromCodeAndConfiguration', [$code, $configuration]);
            $metadata = Metadata::fromCodeAndConfiguration($code, $configuration);

            $id = $metadata->getServiceId('richeditor.ui_element');

            $class = $metadata->getClass('ui_element');
            $this->validateUiElementResource($class);

            $uiElementDefinition = $container->setDefinition($id, (new Definition($class))->setAutowired(true));
            $uiElementDefinition->addMethodCall('setMetadata', [$this->getMetadataDefinition($metadata)]);
            $uiElementDefinition->addMethodCall('setTranslator', [new Reference('translator')]);

            $aliases = [
                UiElementInterface::class . ' $' . $metadata->getCamelCasedCode() . 'UiElement' => $id,
                UiElement::class . ' $' . $metadata->getCamelCasedCode() . 'UiElement' => $id,
            ];
            if (UiElement::class !== $class) {
                $aliases[$class . ' $' . $metadata->getCamelCasedCode() . 'UiElement'] = $id;
            }
            $container->addAliases($aliases);

            $registry->addMethodCall('addUiElement', [new Reference($id)]);
        }
    }

    /**
     * @param string $class
     *
     * @throws InvalidArgumentException
     */
    private function validateUiElementResource(string $class): void
    {
        $interfaces = (array) (class_implements($class) ?? []);

        if (!\in_array(UiElementInterface::class, $interfaces, true)) {
            throw new InvalidArgumentException(sprintf('Class "%s" must implement "%s" to be registered as a UiElement resource.', $class, UiElementInterface::class));
        }
    }

    /**
     * @param Metadata $metadata
     *
     * @return Definition
     */
    private function getMetadataDefinition(Metadata $metadata): Definition
    {
        $metadataDefinition = new Definition(Metadata::class);
        $metadataDefinition
            ->setFactory([new Reference('monsieurbiz.richeditor.metadata_registry'), 'get'])
            ->setArguments([$metadata->getCode()])
        ;

        return $metadataDefinition;
    }
}
