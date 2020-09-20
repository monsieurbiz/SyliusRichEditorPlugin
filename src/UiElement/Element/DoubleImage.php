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

use MonsieurBiz\SyliusRichEditorPlugin\Form\Type\UiElement\DoubleImageType;
use MonsieurBiz\SyliusRichEditorPlugin\UiElement\AbstractUiElement;

class DoubleImage extends AbstractUiElement
{
    protected string $type = 'double_image';

    public function getImage(): string
    {
        return '/bundles/monsieurbizsyliusricheditorplugin/images/ui_elements/image.svg';
    }

    /**
     * {@inheritdoc}
     */
    public function getFields(): array
    {
        return [
            'first_image', 'first_alt', 'first_title', 'first_link',
            'second_image', 'second_alt', 'second_title', 'second_link',
        ];
    }

    public function getFormClass(): string
    {
        return DoubleImageType::class;
    }
}
