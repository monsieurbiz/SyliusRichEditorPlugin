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

function replaceIntlExtensionInTwigConfig($filePath): void
{
    $realPath = realpath($filePath);

    if (false === $realPath || !file_exists($realPath)) {
        return;
    }

    $content = file_get_contents($realPath);

    if (false !== strpos($content, '#Twig\\Extra\\Intl\\IntlExtension')) {
        return;
    }

    // Replace the specific line
    $newContent = str_replace(
        'Twig\\Extra\\Intl\\IntlExtension',
        '#Twig\\Extra\\Intl\\IntlExtension',
        $content
    );

    // Write the modified content back to the file
    file_put_contents($realPath, $newContent);

    echo "Replaced Twig\\Extra\\Intl\\IntlExtension with commented version in $realPath.\n";
}

$filePath = 'config/packages/twig.yaml';
replaceIntlExtensionInTwigConfig($filePath);
