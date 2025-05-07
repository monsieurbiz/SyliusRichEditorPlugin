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

class TextSizeType extends ChoiceType
{
    public const SIZE_XS = 'xs';

    public const SIZE_S = 's';

    public const SIZE_M = 'm';

    public const SIZE_L = 'l';

    public const SIZE_XL = 'xl';

    public const SIZE_XXL = 'xxl';

    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);
        $resolver->setDefaults([
            'label' => 'monsieurbiz_richeditor_plugin.form.text_size.label',
            'choices' => [
                'monsieurbiz_richeditor_plugin.form.text_size.default' => '',
                'monsieurbiz_richeditor_plugin.form.text_size.xs' => self::SIZE_XS,
                'monsieurbiz_richeditor_plugin.form.text_size.s' => self::SIZE_S,
                'monsieurbiz_richeditor_plugin.form.text_size.m' => self::SIZE_M,
                'monsieurbiz_richeditor_plugin.form.text_size.l' => self::SIZE_L,
                'monsieurbiz_richeditor_plugin.form.text_size.xl' => self::SIZE_XL,
                'monsieurbiz_richeditor_plugin.form.text_size.xxl' => self::SIZE_XXL,
            ],
        ]);
    }
}
