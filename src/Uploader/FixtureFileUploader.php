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

namespace MonsieurBiz\SyliusRichEditorPlugin\Uploader;

use League\Flysystem\FilesystemException;
use League\Flysystem\FilesystemOperator;
use Symfony\Component\DependencyInjection\Attribute\Autowire;
use Symfony\Component\HttpFoundation\File\File;

final class FixtureFileUploader implements FixtureFileUploaderInterface
{
    public function __construct(
        #[Autowire(service: 'monsieurbiz_rich_editor_fixture_file')]
        private FilesystemOperator $filesystem
    ) {
    }

    /**
     * @throws FilesystemException
     */
    public function upload(File $file, string $target): void
    {
        if ($this->filesystem->fileExists($target)) {
            $this->remove($target);
        }

        $this->filesystem->write(
            $target,
            (string) file_get_contents($file->getPathname())
        );
    }

    /**
     * @throws FilesystemException
     */
    public function remove(string $path): bool
    {
        if ($this->filesystem->fileExists($path)) {
            $this->filesystem->delete($path);

            return true;
        }

        return false;
    }
}
