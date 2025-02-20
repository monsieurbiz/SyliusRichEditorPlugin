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

namespace MonsieurBiz\SyliusRichEditorPlugin\Form\Type;

use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class TagType extends ChoiceType
{
    public const TAG_H1 = 'h1';

    public const TAG_H2 = 'h2';

    public const TAG_H3 = 'h3';

    public const TAG_H4 = 'h4';

    public const TAG_H5 = 'h5';

    public const TAG_H6 = 'h6';

    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);
        $resolver->setDefaults([
            'label' => 'monsieurbiz_richeditor_plugin.form.tag.label',
            'help' => 'monsieurbiz_richeditor_plugin.form.tag.label_help',
            'choices' => [
                'monsieurbiz_richeditor_plugin.form.tag.default' => '',
                'monsieurbiz_richeditor_plugin.form.tag.h1' => self::TAG_H1,
                'monsieurbiz_richeditor_plugin.form.tag.h2' => self::TAG_H2,
                'monsieurbiz_richeditor_plugin.form.tag.h3' => self::TAG_H3,
                'monsieurbiz_richeditor_plugin.form.tag.h4' => self::TAG_H4,
                'monsieurbiz_richeditor_plugin.form.tag.h5' => self::TAG_H5,
                'monsieurbiz_richeditor_plugin.form.tag.h6' => self::TAG_H6,
            ],
        ]);
    }
}
