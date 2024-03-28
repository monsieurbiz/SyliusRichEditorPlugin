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

namespace MonsieurBiz\SyliusRichEditorPlugin\Attribute;

use Attribute;

#[Attribute(Attribute::TARGET_PROPERTY)]
final class TemplatesUiElement
{
    public function __construct(
        public string $adminRender,
        public string $frontRender,
        public string $adminForm = '@MonsieurBizSyliusRichEditorPlugin/Admin/form.html.twig',
    ) {
    }
}
