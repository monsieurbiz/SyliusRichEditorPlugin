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

use MonsieurBiz\SyliusRichEditorPlugin\Form\Type\RichEditorType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints as Assert;

class TwoColumnsType extends AbstractType
{
    public const WIDTH_1_5 = '1/5';

    public const WIDTH_1_4 = '1/4';

    public const WIDTH_1_3 = '1/3';

    public const WIDTH_2_5 = '2/5';

    public const WIDTH_1_2 = '1/2';

    public const WIDTH_3_5 = '3/5';

    public const WIDTH_2_3 = '2/3';

    public const WIDTH_3_4 = '3/4';

    public const WIDTH_4_5 = '4/5';

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        parent::buildForm($builder, $options);
        $builder
            ->add('firstColumnWidth', ChoiceType::class, [
                'label' => 'monsieurbiz_richeditor_plugin.ui_element.monsieurbiz.two_columns.fields.first_column_width',
                'required' => true,
                'constraints' => [
                    new Assert\NotBlank([]),
                ],
                'choices' => [
                    'monsieurbiz_richeditor_plugin.ui_element.monsieurbiz.two_columns.choices.first_column_width.width_1_5' => self::WIDTH_1_5,
                    'monsieurbiz_richeditor_plugin.ui_element.monsieurbiz.two_columns.choices.first_column_width.width_1_4' => self::WIDTH_1_4,
                    'monsieurbiz_richeditor_plugin.ui_element.monsieurbiz.two_columns.choices.first_column_width.width_1_3' => self::WIDTH_1_3,
                    'monsieurbiz_richeditor_plugin.ui_element.monsieurbiz.two_columns.choices.first_column_width.width_2_5' => self::WIDTH_2_5,
                    'monsieurbiz_richeditor_plugin.ui_element.monsieurbiz.two_columns.choices.first_column_width.width_1_2' => self::WIDTH_1_2,
                    'monsieurbiz_richeditor_plugin.ui_element.monsieurbiz.two_columns.choices.first_column_width.width_3_5' => self::WIDTH_3_5,
                    'monsieurbiz_richeditor_plugin.ui_element.monsieurbiz.two_columns.choices.first_column_width.width_2_3' => self::WIDTH_2_3,
                    'monsieurbiz_richeditor_plugin.ui_element.monsieurbiz.two_columns.choices.first_column_width.width_3_4' => self::WIDTH_3_4,
                    'monsieurbiz_richeditor_plugin.ui_element.monsieurbiz.two_columns.choices.first_column_width.width_4_5' => self::WIDTH_4_5,
                ],
                'preferred_choices' => [
                    self::WIDTH_1_2,
                ],
            ])
            ->add('marginAuto', CheckboxType::class, [
                'label' => 'monsieurbiz_richeditor_plugin.ui_element.monsieurbiz.two_columns.fields.margin_auto',
                'required' => false,
            ])
            ->add('reverseMobile', CheckboxType::class, [
                'label' => 'monsieurbiz_richeditor_plugin.ui_element.monsieurbiz.two_columns.fields.reverse_mobile',
                'required' => false,
            ])
            ->add('firstColumn', RichEditorType::class, [
                'label' => 'monsieurbiz_richeditor_plugin.ui_element.monsieurbiz.two_columns.fields.first_column',
                'required' => true,
                'constraints' => [
                    new Assert\NotBlank([]),
                ],
            ])
            ->add('secondColumn', RichEditorType::class, [
                'label' => 'monsieurbiz_richeditor_plugin.ui_element.monsieurbiz.two_columns.fields.second_column',
                'required' => true,
                'constraints' => [
                    new Assert\NotBlank([]),
                ],
            ])
        ;
    }
}
