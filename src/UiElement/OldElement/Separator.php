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

namespace MonsieurBiz\SyliusRichEditorPlugin\UiElement\OldElement;

use MonsieurBiz\SyliusRichEditorPlugin\Form\Type\UiElement\SeparatorType;

/**
 * @deprecated since 2.0
 */
class Separator extends AbstractUiElement
{
    protected string $type = 'separator';

    /**
     * {@inheritdoc}
     */
    public function getFields(): array
    {
        return ['hidden'];
    }

    public function getFormClass(): string
    {
        return SeparatorType::class;
    }
}
