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
        // Already embedded
        if (\strpos($url, 'www.youtube.com/embed') !== false) {
            return $url;
        }

        $query = \parse_url($url, PHP_URL_QUERY);
        \parse_str($query, $params);

        if (!isset($params['v'])) {
            return null;
        }

        return \sprintf('https://www.youtube.com/embed/%s', $params['v']);
    }

}
