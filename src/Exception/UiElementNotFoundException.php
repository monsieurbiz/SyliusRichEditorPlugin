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

final class UiElementNotFoundException extends \Exception
{
    /**
     * UiElementNotFoundException constructor.
     *
     * @param string $type
     * @param \Exception|null $previous
     */
    public function __construct(string $type, ?\Exception $previous = null)
    {
        parent::__construct(sprintf('UiElement with type "%s" could not be found!', $type), 0, $previous);
    }
}
