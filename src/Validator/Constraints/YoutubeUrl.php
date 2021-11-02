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

namespace MonsieurBiz\SyliusRichEditorPlugin\Validator\Constraints;

use Symfony\Component\Validator\Constraint;

class YoutubeUrl extends Constraint
{
    public string $message = 'The value "{{ string }}" does not contains a valid Youtube URL.';
}
