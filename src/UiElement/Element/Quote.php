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

namespace MonsieurBiz\SyliusRichEditorPlugin\UiElement\Element;

use MonsieurBiz\SyliusRichEditorPlugin\Form\Type\UiElement\QuoteType;
use MonsieurBiz\SyliusRichEditorPlugin\UiElement\AbstractUiElement;

class Quote extends AbstractUiElement
{
    protected string $type = 'quote';

    public function getImage(): string
    {
        return '/bundles/monsieurbizsyliusricheditorplugin/images/ui_elements/quote.svg';
    }

    /**
     * {@inheritdoc}
     */
    public function getFields(): array
    {
        return ['author', 'content'];
    }

    public function getFormClass(): string
    {
        return QuoteType::class;
    }
}
