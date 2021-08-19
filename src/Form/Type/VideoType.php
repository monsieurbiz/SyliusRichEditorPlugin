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

namespace MonsieurBiz\SyliusRichEditorPlugin\Form\Type;

use Symfony\Component\Form\Extension\Core\Type\FileType;

final class VideoType extends FileType
{
    /**
     * {@inheritdoc}
     */
    public function getBlockPrefix()
    {
        return 'monsieurbiz_rich_editor_plugin_video';
    }
}
