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

use MonsieurBiz\SyliusRichEditorPlugin\Form\Constraints\RichEditorConstraints;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\FormBuilderInterface;

class VideoType extends AbstractType
{
    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('video', FileType::class, [
                'label' => 'monsieurbiz_richeditor_plugin.ui_element.video.field.video',
                'data_class' => null,
                'required' => true,
                'constraints' => RichEditorConstraints::getVideoConstraints($options, $builder->getName(), 'video'),
                'attr' => ['data-video' => 'true'],
            ])
            ->add('image', FileType::class, [
                'label' => 'monsieurbiz_richeditor_plugin.ui_element.video.field.image',
                'data_class' => null,
                'required' => true,
                'constraints' => RichEditorConstraints::getImageConstraints($options, $builder->getName(), 'image'),
                'attr' => ['data-image' => 'true'],
            ])
        ;
    }
}
