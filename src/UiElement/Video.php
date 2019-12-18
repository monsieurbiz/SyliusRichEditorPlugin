<?php

declare(strict_types=1);

namespace MonsieurBiz\SyliusCmsPlugin\UiElement;

use MonsieurBiz\SyliusCmsPlugin\Form\Type\UiElement\VideoType;

class Video extends AbstractUiElement
{
    protected $type = 'video';

    public function getImage(): string
    {
        return '/bundles/monsieurbizsyliuscmsplugin/images/ui_elements/video.svg';
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
