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
use MonsieurBiz\SyliusRichEditorPlugin\Form\Type\LevelType;
use MonsieurBiz\SyliusRichEditorPlugin\Form\Type\LinkType;
use MonsieurBiz\SyliusRichEditorPlugin\Form\Type\LinkTypeType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType as FormTextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints as Assert;

class ButtonLinkType extends AbstractType
{
    /**
     * @SuppressWarnings(PHPMD.ElseExpression)
     */
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $required = $options['required'] ?? false;
        if ($required) {
            $constraintsLabel = [
                new Assert\NotBlank([]),
            ];
            $constraintsLinkType = [
                new Assert\NotBlank([]),
            ];
            $constraintsLink = [
                new Assert\AtLeastOneOf([
                    'includeInternalMessages' => false,
                    'message' => 'monsieurbiz_richeditor_plugin.not_valid_url',
                    'constraints' => [
                        new Assert\Url(['protocols' => ['http', 'https'], 'relativeProtocol' => true]),
                        new Assert\Regex(['pattern' => '`^(#|/|tel:|mailto:)`']),
                    ],
                ]),
                new Assert\NotBlank([]),
            ];
        } else {
            $constraintsLabel = [];
            $constraintsLinkType = [];
            $constraintsLink = [
                new Assert\AtLeastOneOf([
                    'includeInternalMessages' => false,
                    'message' => 'monsieurbiz_richeditor_plugin.not_valid_url',
                    'constraints' => [
                        new Assert\Url(['protocols' => ['http', 'https'], 'relativeProtocol' => true]),
                        new Assert\Regex(['pattern' => '`^(#|/|tel:|mailto:)`']),
                    ],
                ]),
            ];
        }

        $builder
            ->add('label', FormTextType::class, [
                'required' => $required,
                'label' => 'monsieurbiz_richeditor_plugin.ui_element.monsieurbiz.button.field.label',
                'constraints' => $constraintsLabel,
            ])
            ->add('link', LinkType::class, [
                'required' => $required,
                'label' => 'monsieurbiz_richeditor_plugin.ui_element.monsieurbiz.button.field.link',
                'constraints' => $constraintsLink,
            ])
            ->add('link_type', LinkTypeType::class, [
                'required' => $required,
                'constraints' => $constraintsLinkType,
            ])
            ->add('align', AlignmentType::class)
            ->add('level', LevelType::class)
        ;
    }
}
