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

namespace Tests\MonsieurBiz\SyliusRichEditorPlugin;

use MonsieurBiz\SyliusRichEditorPlugin\Factory\UiElementFactory;
use MonsieurBiz\SyliusRichEditorPlugin\Twig\RichEditorExtension;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Twig\Environment;

final class RichEditorServiceProvider extends KernelTestCase
{
    public static function getRichEditorExtension()
    {
        self::bootKernel();
        $container = self::$container;

        /** @var UiElementFactory $factory */
        $factory = $container->get(UiElementFactory::class);
        /** @var Environment $environment */
        $environment = $container->get(Environment::class);
        /** @var EventDispatcherInterface $eventDispatcher */
        $eventDispatcher = $container->get(EventDispatcherInterface::class);

        return new RichEditorExtension($factory, $environment, $eventDispatcher);
    }
}
