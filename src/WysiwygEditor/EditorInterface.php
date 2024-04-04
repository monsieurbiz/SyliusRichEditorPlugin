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

interface EditorInterface
{
    public const TOOLBAR_TYPE_MINIMAL = 'minimal';

    public const TOOLBAR_TYPE_BASIC = 'basic';

    public const TOOLBAR_TYPE_FULL = 'full';

    public const TOOLBAR_TYPE_CUSTOM = 'custom';

    public static function getType(): string;

    public function getMinimalButtons(): array;

    public function getBasicButtons(): array;

    public function getFullButtons(): array;
}
