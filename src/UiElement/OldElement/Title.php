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

use MonsieurBiz\SyliusRichEditorPlugin\Form\Type\UiElement\TitleType;

/**
 * @deprecated since 2.0
 */
class Title extends AbstractUiElement
{
    protected string $type = 'title';

    public function getImage(): string
    {
        return '/bundles/monsieurbizsyliusricheditorplugin/images/ui_elements/text.svg';
    }

    /**
     * {@inheritdoc}
     */
    public function getFields(): array
    {
        return ['content'];
    }

    public function getFormClass(): string
    {
        return TitleType::class;
    }
}
