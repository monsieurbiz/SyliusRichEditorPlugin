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

class LevelType extends ChoiceType
{
    public const PRIMARY_LEVEL = 'primary';

    public const SECONDARY_LEVEL = 'secondary';

    public const TERTIARY_LEVEL = 'tertiary';

    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);
        $resolver->setDefaults([
            'label' => 'monsieurbiz_richeditor_plugin.form.level.label',
            'choices' => [
                'monsieurbiz_richeditor_plugin.form.level.default' => '',
                'monsieurbiz_richeditor_plugin.form.level.primary' => self::PRIMARY_LEVEL,
                'monsieurbiz_richeditor_plugin.form.level.secondary' => self::SECONDARY_LEVEL,
                'monsieurbiz_richeditor_plugin.form.level.tertiary' => self::TERTIARY_LEVEL,
            ],
        ]);
    }
}
