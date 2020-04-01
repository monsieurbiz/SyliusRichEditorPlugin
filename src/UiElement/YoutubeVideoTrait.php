<?php
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

        return \sprintf('https://www.youtube.com/embed/%s', $matches[1]);
    }

}
