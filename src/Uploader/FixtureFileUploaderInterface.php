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

namespace MonsieurBiz\SyliusRichEditorPlugin\Uploader;

use Symfony\Component\HttpFoundation\File\File;

interface FixtureFileUploaderInterface
{
    /**
     * @param File $file
     * @param string $target
     */
    public function upload(File $file, string $target): void;
}
