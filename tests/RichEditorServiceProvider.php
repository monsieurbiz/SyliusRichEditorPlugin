<?php

declare(strict_types=1);

namespace Tests\MonsieurBiz\SyliusRichEditorPlugin;

use MonsieurBiz\SyliusRichEditorPlugin\Twig\RichEditorExtension;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;
use MonsieurBiz\SyliusRichEditorPlugin\UiElement\Factory;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Twig\Environment;

final class RichEditorServiceProvider extends KernelTestCase
{
    public static function getRichEditorExtension()
    {
        self::bootKernel();
        $container = self::$container;

        /** @var Factory $factory */
        $factory = $container->get(Factory::class);
        /** @var Environment $environment */
        $environment = $container->get(Environment::class);
        /** @var EventDispatcherInterface $eventDispatcher */
        $eventDispatcher = $container->get(EventDispatcherInterface::class);

        return new RichEditorExtension($factory, $environment, $eventDispatcher);
    }
}
