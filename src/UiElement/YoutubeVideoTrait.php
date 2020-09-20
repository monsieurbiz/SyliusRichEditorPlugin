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

namespace MonsieurBiz\SyliusRichEditorPlugin\UiElement;

trait YoutubeVideoTrait
{
    /**
     * @param string $url
     *
     * @return string|null
     */
    public function getVideoIframeURLFromPublicURL(string $url): ?string
    {
        $reg = '/(?:https?:\/\/)?(?:www\.)?(?:youtu.be\/|youtube\.com\/(?:watch(?:\/|\/?\?(?:\S*&)?v=)|embed\/))([\w\d]+)/';
        $isValid = (bool) preg_match($reg, $url, $matches);

        if (!$isValid || !isset($matches[1])) {
            return null;
        }

        return sprintf('https://www.youtube.com/embed/%s', $matches[1]);
    }
}
