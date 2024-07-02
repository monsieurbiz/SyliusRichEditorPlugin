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

namespace MonsieurBiz\SyliusRichEditorPlugin\Form\Constraints;

use MonsieurBiz\SyliusRichEditorPlugin\MonsieurBizSyliusRichEditorPlugin;
use Symfony\Component\Validator\Constraints as Assert;

final class RichEditorConstraints
{
    /**
     * Return constraint depending on data
     * If user created the element, the field is required
     * If it's an edition and it contains a filename, we don't flag it as required.
     *
     * @SuppressWarnings(PHPMD.BooleanArgumentFlag)
     */
    public static function getImageConstraints(array $data, string $fieldName, bool $required = true, array $defaultConstraints = []): array
    {
        if (MonsieurBizSyliusRichEditorPlugin::imageMediaManagerExists()) {
            return self::getMediaManagerConstraints($required, $defaultConstraints);
        }

        if (empty($defaultConstraints)) {
            $defaultConstraints = [
                new Assert\Image([]),
            ];
        }

        return self::getFileConstraints($data, $fieldName, $required, $defaultConstraints);
    }

    /**
     * Return constraint depending on data
     * If user created the element, the field is required
     * If it's an edition and it contains a filename, we don't flag it as required.
     *
     * @SuppressWarnings(PHPMD.BooleanArgumentFlag)
     */
    public static function getVideoConstraints(array $data, string $fieldName, bool $required = true, array $defaultConstraints = []): array
    {
        if (MonsieurBizSyliusRichEditorPlugin::videoMediaManagerExists()) {
            return self::getMediaManagerConstraints($required, $defaultConstraints);
        }

        if (empty($defaultConstraints)) {
            $defaultConstraints = [
                new Assert\File([
                    'mimeTypes' => ['video/mpeg', 'video/mp4', 'video/quicktime', 'video/x-ms-wmv', 'video/x-msvideo', 'video/x-flv'],
                ]),
            ];
        }

        return self::getFileConstraints($data, $fieldName, $required, $defaultConstraints);
    }

    private static function getFileConstraints(array $data, string $fieldName, bool $required, array $constraints): array
    {
        // No constraint if current value is a string with the filepath
        if (isset($data[$fieldName]) && \is_string($data[$fieldName])) {
            return [];
        }

        if (!$required) {
            return $constraints;
        }

        // No file set yet, we require file
        $constraints[] = new Assert\NotBlank([]);

        return $constraints;
    }

    private static function getMediaManagerConstraints(bool $required, array $constraints): array
    {
        if (!$required) {
            return $constraints;
        }

        // No file set yet, we require file
        $constraints[] = new Assert\NotBlank([]);

        return $constraints;
    }
}
