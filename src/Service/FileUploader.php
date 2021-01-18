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

namespace MonsieurBiz\SyliusRichEditorPlugin\Service;

use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class FileUploader
{
    /**
     * @var string
     */
    private $targetPath;

    /**
     * @var string
     */
    private $publicDirectory;

    /**
     * FileUploader constructor.
     *
     * @param string $targetPath
     * @param string $publicDirectory
     */
    public function __construct(string $targetPath, string $publicDirectory)
    {
        $this->targetPath = $targetPath;
        $this->publicDirectory = $publicDirectory;
    }

    /**
     * Upload a file and return the path to it.
     *
     * @param UploadedFile $file
     *
     * @return mixed|string
     */
    public function upload(UploadedFile $file)
    {
        // See @https://symfony.com/doc/4.4/controller/upload_file.html
        $originalFilename = pathinfo($file->getClientOriginalName(), \PATHINFO_FILENAME);
        $safeFilename = transliterator_transliterate('Any-Latin; Latin-ASCII; [^A-Za-z0-9_] remove; Lower()', $originalFilename);
        $fileName = $safeFilename . '-' . uniqid() . '.' . $file->guessExtension();

        try {
            $file = $file->move($this->getTargetDirectory(), $fileName);
        } catch (FileException $e) {
            return '';
        }

        // Generate path from public folder
        return str_replace($this->publicDirectory, '', $file->getPathname());
    }

    /**
     * The directory to write the file.
     *
     * @return string
     */
    private function getTargetDirectory()
    {
        return $this->publicDirectory . $this->targetPath;
    }
}
