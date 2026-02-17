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

namespace MonsieurBiz\SyliusRichEditorPlugin\Helper;

/**
 * Helper class to filter UI elements based on tags.
 * This implements the same logic as the JavaScript elementIsAllowed method.
 */
final class UiElementTagFilter
{
    /**
     * Determine if a UI element is allowed based on manager tags and element tags.
     *
     * @param array $managerTags Tags from the manager (can be prefixed with - for exclusion)
     * @param array $elementTags Tags associated with the element
     *
     * @return bool True if the element is allowed, false otherwise
     */
    public static function isElementAllowed(array $managerTags, array $elementTags): bool
    {
        $allowed = true;

        if (count($managerTags) === 0) {
            return $allowed;
        }

        // Determine if tags are exclusive (inclusive mode)
        // If at least one tag doesn't start with '-', we're in exclusive mode
        $tagsAreExclusive = false;
        foreach ($managerTags as $tag) {
            if (!str_starts_with($tag, '-')) {
                $tagsAreExclusive = true;
                break;
            }
        }

        // In exclusive mode, start by denying all elements
        // In non-exclusive mode (all tags start with '-'), start by allowing all elements
        $allowed = !$tagsAreExclusive;

        // Process each manager tag
        foreach ($managerTags as $managerTag) {
            // Extract the real tag name (without +/- prefix)
            $realTag = preg_replace('/^(-|\+)/', '', $managerTag);

            // Check if the element has this tag
            if (in_array($realTag, $elementTags, true)) {
                // Element is tagged with this tag
                // Allow only if the tag is not excluded (doesn't start with -)
                $allowed = !str_starts_with($managerTag, '-');
            }
        }

        return $allowed;
    }
}
