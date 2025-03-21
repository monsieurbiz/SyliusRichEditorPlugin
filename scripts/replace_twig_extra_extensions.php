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

function replaceTwigExtraExtensionsInTwigConfig($filePath): void
{
    $realPath = realpath($filePath);

    if (!$realPath || !file_exists($realPath)) {
        return;
    }


    $extensionsToReplace = ['Twig\\Extra\\Intl\\IntlExtension', 'Twig\\Extra\\String\\StringExtension'];
    $content = file_get_contents($realPath);

    foreach ($extensionsToReplace as $extensionToReplace) {
        if (false !== strpos($content, '#' . $extensionToReplace)) {
            continue;
        }

        // Replace the specific line
        $content = str_replace(
            $extensionToReplace,
            '#' . $extensionToReplace,
            $content
        );

        echo "Replaced $extensionToReplace with commented version in $realPath.\n";
    }

    // Write the modified content back to the file
    file_put_contents($realPath, $content);
}

$filePath = 'config/packages/twig.yaml';
replaceTwigExtraExtensionsInTwigConfig($filePath);
