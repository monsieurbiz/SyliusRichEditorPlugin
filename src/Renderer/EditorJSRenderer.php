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

use Setono\EditorJS\Exception\ParserExceptionInterface;
use Setono\EditorJS\Exception\RendererExceptionInterface;
use Setono\EditorJS\Parser\ParserInterface;
use Setono\EditorJS\Renderer\RendererInterface;

final class EditorJSRenderer implements EditorJSRendererInterface
{
    public function __construct(
        private readonly ParserInterface $parser,
        private readonly RendererInterface $renderer,
    ) {
    }

    public function render(string $value): string
    {
        try {
            return $this->renderer->render($this->parser->parse($value));
        } catch (ParserExceptionInterface|RendererExceptionInterface) {
            return $value;
        }
    }
}
