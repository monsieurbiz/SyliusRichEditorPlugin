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

use MonsieurBiz\SyliusRichEditorPlugin\Attribute\AsUiElement;
use MonsieurBiz\SyliusRichEditorPlugin\UiElement\Metadata;
use MonsieurBiz\SyliusRichEditorPlugin\UiElement\UiElement;
use MonsieurBiz\SyliusRichEditorPlugin\UiElement\UiElementInterface;
use ReflectionAttribute;
use ReflectionClass;
use Symfony\Component\DependencyInjection\Compiler\CompilerPassInterface;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Definition;
use Symfony\Component\DependencyInjection\Exception\InvalidArgumentException;
use Symfony\Component\DependencyInjection\Reference;

final class UiElementRegistryPass implements CompilerPassInterface
{
    /**
     * @inheritdoc
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

        $this->processConfiguration($uiElements, $container, $registry, $metadataRegistry);
        $this->processAttribute($container, $registry, $metadataRegistry);
    }

    private function processConfiguration(mixed $uiElements, ContainerBuilder $container, Definition $registry, Definition $metadataRegistry): void
    {
        if (!\is_array($uiElements)) {
            return;
        }

        foreach ($uiElements as $code => $configuration) {
            if (!\is_array($configuration)) {
                continue;
            }
            $this->registerUiElement($code, $configuration, $container, $registry, $metadataRegistry);
        }
    }

    private function processAttribute(ContainerBuilder $container, Definition $registry, Definition $metadataRegistry): void
    {
        foreach ($container->getDefinitions() as $definition) {
            if ($this->accept($definition) && $reflectionClass = $container->getReflectionClass($definition->getClass(), false)) {
                $this->processClass($definition, $reflectionClass, $container, $registry, $metadataRegistry);
            }
        }
    }

    /**
     * @param ReflectionClass<object> $reflectionClass
     */
    private function processClass(Definition $definition, ReflectionClass $reflectionClass, ContainerBuilder $container, Definition $registry, Definition $metadataRegistry): void
    {
        foreach ($reflectionClass->getAttributes(AsUiElement::class, ReflectionAttribute::IS_INSTANCEOF) as $attribute) {
            $attribute = $attribute->newInstance();
            /** @var AsUiElement $attribute */
            $code = $attribute->getCode();
            $configuration = $attribute->getConfiguration();
            $configuration['classes']['form'] = $definition->getClass(); // Add the form class to the configuration

            $this->registerUiElement($code, $configuration, $container, $registry, $metadataRegistry);
        }
    }

    private function accept(Definition $definition): bool
    {
        return !$definition->isAbstract();
    }

    private function registerUiElement(string $code, array $configuration, ContainerBuilder $container, Definition $registry, Definition $metadataRegistry): void
    {
        $metadataRegistry->addMethodCall('addFromCodeAndConfiguration', [$code, $configuration]);
        $metadata = Metadata::fromCodeAndConfiguration($code, $configuration);

        $id = $metadata->getServiceId('richeditor.ui_element');

        $class = $metadata->getClass('ui_element');
        $this->validateUiElementResource($class);

        $uiElementDefinition = $container->setDefinition($id, (new Definition($class))->setAutowired(true));
        $uiElementDefinition->addMethodCall('setMetadata', [$this->getMetadataDefinition($metadata)]);
        $uiElementDefinition->addMethodCall('setTranslator', [new Reference('translator')]);
        $uiElementDefinition->addMethodCall('setTwigEnvironment', [new Reference('Twig\Environment')]);

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

    /**
     * @throws InvalidArgumentException
     */
    private function validateUiElementResource(string $class): void
    {
        $interfaces = (array) class_implements($class);

        if (!\in_array(UiElementInterface::class, $interfaces, true)) {
            throw new InvalidArgumentException(sprintf('Class "%s" must implement "%s" to be registered as a UiElement resource.', $class, UiElementInterface::class));
        }
    }

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
