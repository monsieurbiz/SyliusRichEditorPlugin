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

use MonsieurBiz\SyliusRichEditorPlugin\Form\Type\UiElement\OldElement\ProductsType;

/**
 * @deprecated since 2.0
 */
class Products extends AbstractUiElement
{
    protected string $type = 'products';

    /**
     * {@inheritdoc}
     */
    public function getFields(): array
    {
        return ['products', 'title'];
    }

    public function getFormClass(): string
    {
        return ProductsType::class;
    }

    public function getTemplate(): string
    {
        return '@MonsieurBizSyliusRichEditorPlugin/UiElement/OldElement/products.html.twig';
    }
}
