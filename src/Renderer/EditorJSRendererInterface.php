<?php

/*
 * This file is part of SyliusRichEditorPlugin website.
 *
 * (c) SyliusRichEditorPlugin <sylius+syliusricheditorplugin@monsieurbiz.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

declare(strict_types=1);

namespace MonsieurBiz\SyliusRichEditorPlugin\Renderer;

interface EditorJSRendererInterface
{
    public function render(string $value): string;
}
