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

namespace App\UiElement;

use MonsieurBiz\SyliusRichEditorPlugin\UiElement\UiElementInterface;
use MonsieurBiz\SyliusRichEditorPlugin\UiElement\UiElementTrait;
use Sylius\Component\Locale\Context\LocaleContextInterface;

final class GoogleMapsUiElement implements UiElementInterface
{
    use UiElementTrait;

    public function __construct(
        private LocaleContextInterface $localeContext
    ) {
    }

    public function getLocale(): string
    {
        return preg_replace('`^([^_]+)(?:_.+)*$`', '\1', $this->localeContext->getLocaleCode());
    }
}
