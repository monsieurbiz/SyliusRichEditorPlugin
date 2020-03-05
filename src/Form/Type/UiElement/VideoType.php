<?php

declare(strict_types=1);

namespace MonsieurBiz\SyliusRichEditorPlugin\Form\Type\UiElement;

use MonsieurBiz\SyliusRichEditorPlugin\Form\Constraints\RichEditorConstraints;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\FormBuilderInterface;

class VideoType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('video', FileType::class, [
                'label' => 'monsieurbiz_richeditor_plugin.ui_element.video.field.video',
                'data_class' => null,
                'required' => true,
                'constraints' => RichEditorConstraints::getVideoConstraints($options, 'video'),
                'attr' => ['data-video' => 'true']
            ])
            ->add('image', FileType::class, [
                'label' => 'monsieurbiz_richeditor_plugin.ui_element.video.field.image',
                'data_class' => null,
                'required' => true,
                'constraints' => RichEditorConstraints::getImageConstraints($options, 'image'),
                'attr' => ['data-image' => 'true']
            ])
        ;
    }
}
