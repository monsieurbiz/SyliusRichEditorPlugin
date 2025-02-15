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

use MonsieurBiz\SyliusMediaManagerPlugin\Form\Type\ImageType as MediaManagerImageType;
use MonsieurBiz\SyliusMediaManagerPlugin\Form\Type\VideoType as MediaManagerVideoType;
use MonsieurBiz\SyliusRichEditorPlugin\Form\Constraints\RichEditorConstraints;
use MonsieurBiz\SyliusRichEditorPlugin\Form\Type\AlignmentType;
use MonsieurBiz\SyliusRichEditorPlugin\MonsieurBizSyliusRichEditorPlugin;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;

class VideoType extends AbstractType
{
    /**
     * @inheritdoc
     */
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $this->addFields($builder, $options);
        $this->addEvents($builder, $options);
    }

    /**
     * @SuppressWarnings(PHPMD.UnusedFormalParameter)
     */
    public function addFields(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('video', $this->getVideoType(), [
                'label' => 'monsieurbiz_richeditor_plugin.ui_element.monsieurbiz.video.field.video',
                'data_class' => null,
                'required' => true,
                'attr' => ['data-video' => 'true'],
            ])
            ->add('image', $this->getImageType(), [
                'label' => 'monsieurbiz_richeditor_plugin.ui_element.monsieurbiz.video.field.image',
                'data_class' => null,
                'required' => false,
                'attr' => ['data-image' => 'true'],
            ])
            ->add('align', AlignmentType::class)
            ->add('controls', CheckboxType::class, [
                'label' => 'monsieurbiz_richeditor_plugin.ui_element.monsieurbiz.video.field.controls',
                'required' => false,
                'data' => $options['data']['controls'] ?? true,
            ])
            ->add('autoplay', CheckboxType::class, [
                'label' => 'monsieurbiz_richeditor_plugin.ui_element.monsieurbiz.video.field.autoplay',
                'required' => false,
            ])
        ;
    }

    private function getImageType(): string
    {
        // @phpstan-ignore-next-line
        return MonsieurBizSyliusRichEditorPlugin::imageMediaManagerExists() ? MediaManagerImageType::class : FileType::class;
    }

    private function getVideoType(): string
    {
        // @phpstan-ignore-next-line
        return MonsieurBizSyliusRichEditorPlugin::videoMediaManagerExists() ? MediaManagerVideoType::class : FileType::class;
    }

    public function addEvents(FormBuilderInterface $builder, array $options): void
    {
        $builder->addEventListener(FormEvents::PRE_SUBMIT, function (FormEvent $event): void {
            // Change video field constraints depending on submitted value
            $options = $event->getForm()->get('video')->getConfig()->getOptions();
            $options['constraints'] = RichEditorConstraints::getVideoConstraints(\is_array($event->getData()) ? $event->getData() : [], 'video');
            $event->getForm()->add('video', $this->getVideoType(), $options);

            // Change image field constraints depending on submitted value
            $options = $event->getForm()->get('image')->getConfig()->getOptions();
            $options['constraints'] = RichEditorConstraints::getImageConstraints(\is_array($event->getData()) ? $event->getData() : [], 'image', false);
            $event->getForm()->add('image', $this->getImageType(), $options);
        });
    }
}
