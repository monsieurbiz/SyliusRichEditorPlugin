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

namespace MonsieurBiz\SyliusRichEditorPlugin\WysiwygEditor;

final class SunEditor implements EditorInterface
{
    public const TYPE = 'suneditor';

    public static function getType(): string
    {
        return self::TYPE;
    }

    public function getMinimalButtons(): array
    {
        return [['bold', 'italic', 'underline', 'list', 'formatBlock', 'link', 'horizontalRule']];
    }

    public function getBasicButtons(): array
    {
        return [
            ['undo', 'redo'],
            ['bold', 'underline', 'italic', 'strike'],
            ['fontColor', 'hiliteColor'],
            ['removeFormat'],
            ['align', 'horizontalRule', 'list'],
            ['outdent', 'indent'],
            ['table', 'link'],
            ['showBlocks', 'codeView'],
        ];
    }

    public function getFullButtons(): array
    {
        return [
            ['undo', 'redo'],
            ['font', 'fontSize', 'formatBlock'],
            ['paragraphStyle', 'blockquote'],
            ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
            ['fontColor', 'hiliteColor', 'textStyle'],
            ['removeFormat'],
            ['outdent', 'indent'],
            ['align', 'horizontalRule', 'list', 'lineHeight'],
            ['table', 'link'],
            ['fullScreen', 'showBlocks', 'codeView'],
        ];
    }
}
