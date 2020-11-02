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

namespace MonsieurBiz\SyliusRichEditorPlugin\Form\Type\UiElement;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType as FormTextType;
use Symfony\Component\Form\Extension\Core\Type\UrlType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints as Assert;

class YoutubeType extends AbstractType
{
    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('link', UrlType::class, [
                'label' => 'monsieurbiz_richeditor_plugin.ui_element.monsieurbiz.youtube.field.link',
                'required' => true,
                'constraints' => [
                    new Assert\NotBlank(),
                ],
            ])
            ->add('width', FormTextType::class, [
                'label' => 'monsieurbiz_richeditor_plugin.ui_element.monsieurbiz.youtube.field.width',
                'required' => false,
                'constraints' => [
                    new Assert\Type('numeric'),
                ],
            ])
            ->add('height', FormTextType::class, [
                'label' => 'monsieurbiz_richeditor_plugin.ui_element.monsieurbiz.youtube.field.height',
                'required' => false,
                'constraints' => [
                    new Assert\Type('numeric'),
                ],
            ])
        ;
    }
}
