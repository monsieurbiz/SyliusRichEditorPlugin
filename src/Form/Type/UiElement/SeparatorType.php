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

namespace MonsieurBiz\SyliusRichEditorPlugin\Form\Type\UiElement;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;

class SeparatorType extends AbstractType
{
    public const SOLID_STYLE = 'solid';

    public const DASHED_STYLE = 'dashed';

    public const DOTTED_STYLE = 'dotted';

    /**
     * @inheritdoc
     */
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('hidden', CheckboxType::class, [
                'label' => 'monsieurbiz_richeditor_plugin.ui_element.monsieurbiz.separator.field.hidden',
                'required' => false,
            ])
            ->add('style', ChoiceType::class, [
                'label' => 'monsieurbiz_richeditor_plugin.ui_element.monsieurbiz.separator.field.style.label',
                'choices' => [
                    'monsieurbiz_richeditor_plugin.ui_element.monsieurbiz.separator.field.style.choices.solid' => self::SOLID_STYLE,
                    'monsieurbiz_richeditor_plugin.ui_element.monsieurbiz.separator.field.style.choices.dashed' => self::DASHED_STYLE,
                    'monsieurbiz_richeditor_plugin.ui_element.monsieurbiz.separator.field.style.choices.dotted' => self::DOTTED_STYLE,
                ],
            ])
            ->addEventListener(FormEvents::PRE_SET_DATA, function (FormEvent $event): void {
                /** @var array $data */
                $data = $event->getData();
                $data['hidden'] = (bool) ($data['hidden'] ?? false);
                $event->setData($data);
            })
        ;
    }
}
