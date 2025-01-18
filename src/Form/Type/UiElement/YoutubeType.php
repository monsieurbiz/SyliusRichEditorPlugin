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
use MonsieurBiz\SyliusRichEditorPlugin\Validator\Constraints\YoutubeUrl;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType as FormTextType;
use Symfony\Component\Form\Extension\Core\Type\UrlType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints as Assert;

class YoutubeType extends AbstractType
{
    /**
     * @inheritdoc
     */
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('link', UrlType::class, [
                'label' => 'monsieurbiz_richeditor_plugin.ui_element.monsieurbiz.youtube.field.link',
                'required' => true,
                'constraints' => [
                    new Assert\NotBlank(),
                    new YoutubeUrl(),
                ],
                'label_attr' => [
                    'class' => 'form-label'
                ],
                'attr' => [
                    'class' => 'form-control'
                ],
                'row_attr' => [
                    'class' => 'mb-3 field'
                ]
            ])
            ->add('width', FormTextType::class, [
                'label' => 'monsieurbiz_richeditor_plugin.ui_element.monsieurbiz.youtube.field.width',
                'required' => false,
                'constraints' => [
                    new Assert\Type('numeric'),
                    new Assert\GreaterThan(0),
                ],
                'label_attr' => [
                    'class' => 'form-label'
                ],
                'attr' => [
                    'class' => 'form-control'
                ],
                'row_attr' => [
                    'class' => 'mb-3 field'
                ]
            ])
            ->add('height', FormTextType::class, [
                'label' => 'monsieurbiz_richeditor_plugin.ui_element.monsieurbiz.youtube.field.height',
                'required' => false,
                'constraints' => [
                    new Assert\Type('numeric'),
                    new Assert\GreaterThan(0),
                ],
                'label_attr' => [
                    'class' => 'form-label'
                ],
                'attr' => [
                    'class' => 'form-control'
                ],
                'row_attr' => [
                    'class' => 'mb-3 field'
                ]
            ])
            ->add('align', AlignmentType::class, [
                'label_attr' => [
                    'class' => 'form-label'
                ],
                'row_attr' => [
                    'class' => 'mb-3 field'
                ]
            ])
        ;
    }
}
