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

namespace MonsieurBiz\SyliusRichEditorPlugin\Tests\Unit\Twig;

use MonsieurBiz\SyliusRichEditorPlugin\Twig\RichEditorExtension;
use MonsieurBiz\SyliusRichEditorPlugin\UiElement\RegistryInterface;
use PHPUnit\Framework\TestCase;
use Symfony\Bridge\Twig\AppVariable;
use Symfony\Component\Form\FormView;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;
use Twig\Environment;

final class RichEditorExtensionTest extends TestCase
{
    public function testItReturnsThePreviouslyUploadedFilePath(): void
    {
        $request = new Request([], [
            'rich_editor_uploaded_files' => ['image[image]' => '/media/rich-editor/image.png'],
        ]);

        self::assertSame(
            '/media/rich-editor/image.png',
            $this->getCurrentFilePath($request, '/media/rich-editor/previous.png', 'image[image]'),
        );
    }

    public function testItReturnsTheFormDataWhenNoFileWasUploaded(): void
    {
        self::assertSame(
            '/media/rich-editor/previous.png',
            $this->getCurrentFilePath(new Request(), '/media/rich-editor/previous.png', 'image[image]'),
        );
    }

    /**
     * `Request::get()` is deprecated since Symfony 7.4 and removed in Symfony 8.
     */
    private function getCurrentFilePath(Request $request, string $data, string $varName): ?string
    {
        $requestStack = new RequestStack();
        $requestStack->push($request);
        $app = new AppVariable();
        $app->setRequestStack($requestStack);

        $form = new FormView();
        $form->vars['data'] = $data;

        $extension = new RichEditorExtension(
            $this->createMock(RegistryInterface::class),
            $this->createMock(Environment::class),
            'monsieurbiz.html',
            'content',
            '/media/rich-editor',
            '/public',
        );

        $deprecations = [];
        set_error_handler(static function (int $level, string $message) use (&$deprecations): bool {
            $deprecations[] = $message;

            return true;
        }, \E_USER_DEPRECATED);

        try {
            $path = $extension->getCurrentFilePath(['form' => $form, 'app' => $app], $varName);
        } finally {
            restore_error_handler();
        }

        self::assertSame([], $deprecations);

        return $path;
    }
}
