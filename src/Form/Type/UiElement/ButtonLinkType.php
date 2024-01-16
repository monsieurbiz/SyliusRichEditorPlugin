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

use MonsieurBiz\SyliusRichEditorPlugin\Form\Type\AlignmentType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType as FormTextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints as Assert;

class ButtonLinkType extends AbstractType
{
    /**
     * @inheritdoc
     *
     * @SuppressWarnings(PHPMD.ElseExpression)
     */
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $required = $options['required'] ?? false;
        if ($required) {
            $constraintsLabel = [
                new Assert\NotBlank([]),
            ];
            $constraintsLink = [
                new Assert\Url([]),
                new Assert\NotBlank([]),
            ];
        } else {
            $constraintsLabel = [];
            $constraintsLink = [];
        }

        $builder
            ->add('label', FormTextType::class, [
                'required' => $required,
                'label' => 'monsieurbiz_richeditor_plugin.ui_element.monsieurbiz.button.field.label',
                'constraints' => $constraintsLabel,
            ])
            ->add('link', FormTextType::class, [
                'required' => $required,
                'label' => 'monsieurbiz_richeditor_plugin.ui_element.monsieurbiz.button.field.link',
                'constraints' => $constraintsLink,
            ])
            ->add('align', AlignmentType::class)
        ;
    }
}
