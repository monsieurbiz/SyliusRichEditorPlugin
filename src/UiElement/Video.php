<?php

declare(strict_types=1);

namespace MonsieurBiz\SyliusRichEditorPlugin\UiElement;

use MonsieurBiz\SyliusRichEditorPlugin\Form\Type\UiElement\VideoType;

class Video extends AbstractUiElement
{
    protected $type = 'video';

    public function getImage(): string
    {
        return '/bundles/monsieurbizsyliusricheditorplugin/images/ui_elements/video.svg';
    }

    public function getFields(): array
    {
        return ['video', 'image'];
    }

    public function getFormClass(): string
    {
        return VideoType::class;
    }
}
