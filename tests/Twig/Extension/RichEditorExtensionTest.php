<?php

declare(strict_types=1);

namespace Tests\MonsieurBiz\SyliusRichEditorPlugin\Twig\Extension;

use Twig\Test\IntegrationTestCase;
use Tests\MonsieurBiz\SyliusRichEditorPlugin\RichEditorServiceProvider;

final class RichEditorExtensionTest extends IntegrationTestCase
{
    public function getExtensions()
    {
        return [
            RichEditorServiceProvider::getRichEditorExtension()
        ];
    }

    public function getFixturesDir()
    {
        return __DIR__ . '/../Fixtures/';
    }
}
