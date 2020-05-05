<?php

declare(strict_types=1);

namespace MonsieurBiz\SyliusRichEditorPlugin\Form\Constraints;

use Symfony\Component\Validator\Constraints as Assert;

final class RichEditorConstraints
{
    /**
     * Return constraint depending on data
     * If user created the element, the field is required
     * If it's an edition and it contains a filename, we don't flag it as required
     *
     * @param array $options
     * @param string $fieldName
     * @param bool $required
     * @return array
     */
    public static function getImageConstraints(array $options, string $fieldName, bool $required = true) {
        // If is edition we don't have constraint to avoid re-upload
        $data = $options['data'] ?? null;
        if (isset($data[$fieldName])) {
            return [];
        }

        if (!$required) {
            return [
                new Assert\Image([]),
            ];
        }

        // No image set yet, we require file
        return [
            new Assert\NotBlank([]),
            new Assert\Image([]),
        ];
    }

    /**
     * Return constraint depending on data
     * If user created the element, the field is required
     * If it's an edition and it contains a filename, we don't flag it as required
     *
     * @param array $options
     * @param string $fieldName
     * @param bool $required
     * @return array
     */
    public static function getVideoConstraints(array $options, string $fieldName, bool $required = true) {
        // If is edition we don't have constraint to avoid re-upload
        $data = $options['data'] ?? null;
        if (isset($data[$fieldName])) {
            return [];
        }

        if (!$required) {
            return [
                new Assert\File([
                    'mimeTypes' => ['video/mpeg', 'video/mp4', 'video/quicktime', 'video/x-ms-wmv', 'video/x-msvideo', 'video/x-flv']
                ]),
            ];
        }

        // No video set yet, we require file
        return [
            new Assert\NotBlank([]),
            new Assert\File([
                'mimeTypes' => ['video/mpeg', 'video/mp4', 'video/quicktime', 'video/x-ms-wmv', 'video/x-msvideo', 'video/x-flv']
            ]),
        ];
    }
}
