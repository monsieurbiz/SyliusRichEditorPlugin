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

class LinkTypeType extends ChoiceType
{
    public const TYPE_INTERNAL = 'internal';

    public const TYPE_EXTERNAL = 'external';

    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);
        $resolver->setDefaults([
            'label' => 'monsieurbiz_richeditor_plugin.common.link_type',
            'choices' => [
                'monsieurbiz_richeditor_plugin.common.internal_link' => self::TYPE_INTERNAL,
                'monsieurbiz_richeditor_plugin.common.external_link' => self::TYPE_EXTERNAL,
            ],
            'multiple' => false,
        ]);
    }
}
