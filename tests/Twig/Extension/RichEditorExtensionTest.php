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

namespace Tests\MonsieurBiz\SyliusRichEditorPlugin\Twig\Extension;

use Tests\MonsieurBiz\SyliusRichEditorPlugin\RichEditorServiceProvider;
use Twig\Test\IntegrationTestCase;

final class RichEditorExtensionTest extends IntegrationTestCase
{
    public function getExtensions()
    {
        return [
            RichEditorServiceProvider::getRichEditorExtension(),
        ];
    }

    public function getFixturesDir()
    {
        return __DIR__ . '/../Fixtures/';
    }
}
