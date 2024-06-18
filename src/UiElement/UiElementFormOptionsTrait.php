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

namespace MonsieurBiz\SyliusRichEditorPlugin\UiElement;

use InvalidArgumentException;

trait UiElementFormOptionsTrait
{
    use UiElementTrait;

    /**
     * @inheritdoc
     */
    public function getFormOptions(): array
    {
        try {
            /** @phpstan-ignore-next-line */
            return $this->metadata->getParameter('form_options');
        } catch (InvalidArgumentException) {
            return [];
        }
    }
}
