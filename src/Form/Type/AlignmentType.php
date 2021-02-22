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

use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class AlignmentType extends ChoiceType
{
    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);
        $resolver->setDefaults([
            'show_justify' => false,
            'label' => 'monsieurbiz_richeditor_plugin.form.align.label',
            'choices' => [
                'monsieurbiz_richeditor_plugin.form.align.default' => '',
                'monsieurbiz_richeditor_plugin.form.align.left' => 'left',
                'monsieurbiz_richeditor_plugin.form.align.center' => 'center',
                'monsieurbiz_richeditor_plugin.form.align.right' => 'right',
            ],
        ]);
        $resolver->setAllowedTypes('show_justify', ['null', 'bool']);
    }

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        // Add justify choices depending on options
        if ($options['show_justify']) {
            $options['choices']['monsieurbiz_richeditor_plugin.form.align.justify'] = 'justify';
        }
        parent::buildForm($builder, $options);
    }
}
