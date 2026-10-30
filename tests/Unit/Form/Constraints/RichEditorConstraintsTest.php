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

namespace MonsieurBiz\SyliusRichEditorPlugin\Tests\Unit\Form\Constraints;

use MonsieurBiz\SyliusRichEditorPlugin\Form\Constraints\RichEditorConstraints;
use MonsieurBiz\SyliusRichEditorPlugin\MonsieurBizSyliusRichEditorPlugin;
use PHPUnit\Framework\TestCase;
use Symfony\Component\Validator\Constraints\File;
use Symfony\Component\Validator\Constraints\Image;
use Symfony\Component\Validator\Constraints\NotBlank;

final class RichEditorConstraintsTest extends TestCase
{
    public function testItReturnsTheDefaultImageConstraints(): void
    {
        if (MonsieurBizSyliusRichEditorPlugin::imageMediaManagerExists()) {
            self::markTestSkipped('The media manager replaces the default image constraints.');
        }

        $constraints = $this->withoutDeprecations(static fn (): array => RichEditorConstraints::getImageConstraints([], 'image'));

        self::assertCount(2, $constraints);
        self::assertInstanceOf(Image::class, $constraints[0]);
        self::assertInstanceOf(NotBlank::class, $constraints[1]);
    }

    public function testItReturnsTheDefaultVideoConstraints(): void
    {
        if (MonsieurBizSyliusRichEditorPlugin::videoMediaManagerExists()) {
            self::markTestSkipped('The media manager replaces the default video constraints.');
        }

        $constraints = $this->withoutDeprecations(static fn (): array => RichEditorConstraints::getVideoConstraints([], 'video'));

        self::assertCount(2, $constraints);
        self::assertInstanceOf(File::class, $constraints[0]);
        self::assertSame(
            ['video/mpeg', 'video/mp4', 'video/quicktime', 'video/x-ms-wmv', 'video/x-msvideo', 'video/x-flv'],
            $constraints[0]->mimeTypes,
        );
        self::assertInstanceOf(NotBlank::class, $constraints[1]);
    }

    public function testItDoesNotRequireAFileWhenOneIsAlreadySet(): void
    {
        self::assertSame([], RichEditorConstraints::getImageConstraints(['image' => '/media/image.png'], 'image'));
    }

    /**
     * Constraints configured with an array of options are deprecated since Symfony 7.3 and fail on Symfony 8.
     */
    private function withoutDeprecations(callable $callback): array
    {
        $deprecations = [];
        set_error_handler(static function (int $level, string $message) use (&$deprecations): bool {
            $deprecations[] = $message;

            return true;
        }, \E_USER_DEPRECATED);

        try {
            $result = $callback();
        } finally {
            restore_error_handler();
        }

        self::assertSame([], $deprecations);

        return $result;
    }
}
