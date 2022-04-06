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

namespace spec\MonsieurBiz\SyliusRichEditorPlugin\UiElement;

use MonsieurBiz\SyliusRichEditorPlugin\UiElement\UiElement;
use MonsieurBiz\SyliusRichEditorPlugin\UiElement\UiElementInterface;
use PhpSpec\ObjectBehavior;

class UiElementSpec extends ObjectBehavior
{
    public function it_is_initializable(): void
    {
        $this->shouldHaveType(UiElement::class);
        $this->shouldHaveType(UiElementInterface::class);
    }
}
