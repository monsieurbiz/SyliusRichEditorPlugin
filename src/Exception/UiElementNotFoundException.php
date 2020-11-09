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

namespace MonsieurBiz\SyliusRichEditorPlugin\Exception;

use Exception;

final class UiElementNotFoundException extends Exception
{
    /**
     * UiElementNotFoundException constructor.
     *
     * @param string $code
     * @param Exception|null $previous
     */
    public function __construct(string $code, ?Exception $previous = null)
    {
        parent::__construct(sprintf('UiElement with code "%s" could not be found!', $code), 0, $previous);
    }
}
