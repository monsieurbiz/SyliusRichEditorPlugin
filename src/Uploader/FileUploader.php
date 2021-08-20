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

use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class FileUploader
{
    public const FILE_TYPE_DOCUMENT = 'document';
    public const FILE_TYPE_IMAGE = 'image';
    public const FILE_TYPE_VIDEO = 'video';

    private string $fileTargetPath;
    private string $imageTargetPath;
    private string $publicDirectory;

    public function __construct(string $fileTargetPath, string $imageTargetPath, string $publicDirectory)
    {
        $this->fileTargetPath = $fileTargetPath;
        $this->imageTargetPath = $imageTargetPath;
        $this->publicDirectory = $publicDirectory;
    }

    /**
     * Upload a file and return the path to it.
     *
     * @param UploadedFile $file
     * @param string|null $type
     *
     * @return string
     */
    public function upload(UploadedFile $file, ?string $type = null): string
    {
        $type = $type ?? self::FILE_TYPE_DOCUMENT;

        // See @https://symfony.com/doc/4.4/controller/upload_file.html
        $originalFilename = pathinfo($file->getClientOriginalName(), \PATHINFO_FILENAME);
        $safeFilename = transliterator_transliterate('Any-Latin; Latin-ASCII; [^A-Za-z0-9_] remove; Lower()', $originalFilename);
        $fileName = $safeFilename . '-' . uniqid() . '.' . $file->guessExtension();

        try {
            $file = $file->move($this->getTargetDirectory($type), $fileName);
        } catch (FileException $e) {
            return '';
        }

        // Generate path from public folder
        return $this->getFinalPath($file, $type);
    }

    /**
     * The directory to write the file.
     *
     * @param string $type
     *
     * @return string
     */
    private function getTargetDirectory(string $type): string
    {
        switch ($type) {
            case self::FILE_TYPE_IMAGE:
                return $this->publicDirectory . $this->imageTargetPath;
            default:
                return $this->publicDirectory . $this->fileTargetPath;
        }
    }

    /**
     * @param File $file
     * @param string $type
     *
     * @return string
     */
    private function getFinalPath(File $file, string $type): string
    {
        switch ($type) {
            case self::FILE_TYPE_IMAGE:
                return $file->getBasename();
            default:
                return str_replace($this->publicDirectory, '', $file->getPathname());
        }
    }
}
