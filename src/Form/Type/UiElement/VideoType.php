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
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;

class VideoType extends AbstractType
{
    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('video', FileType::class, [
                'label' => 'monsieurbiz_richeditor_plugin.ui_element.monsieurbiz.video.field.video',
                'data_class' => null,
                'required' => true,
                'attr' => ['data-video' => 'true'],
            ])
            ->add('image', FileType::class, [
                'label' => 'monsieurbiz_richeditor_plugin.ui_element.monsieurbiz.video.field.image',
                'data_class' => null,
                'required' => true,
                'attr' => ['data-image' => 'true'],
            ])
        ;

        $builder->addEventListener(FormEvents::PRE_SUBMIT, function (FormEvent $event) {
            // Change video field constraints depending on submitted value
            $options = $event->getForm()->get('video')->getConfig()->getOptions();
            $options['constraints'] = RichEditorConstraints::getVideoConstraints($event->getData(), 'video');
            $event->getForm()->add('video', FileType::class, $options);

            // Change image field constraints depending on submitted value
            $options = $event->getForm()->get('image')->getConfig()->getOptions();
            $options['constraints'] = RichEditorConstraints::getImageConstraints($event->getData(), 'image');
            $event->getForm()->add('image', FileType::class, $options);
        });
    }
}
