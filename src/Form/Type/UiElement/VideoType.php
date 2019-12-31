<?php

declare(strict_types=1);

namespace MonsieurBiz\SyliusCmsPlugin\Form\Type\UiElement;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints as Assert;

class VideoType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('video', FileType::class, [
                'label' => 'monsieurbiz_cmsplugin.ui_element.video.field.video',
                'data_class' => null,
                'required' => true,
                'constraints' => [
                    new Assert\NotBlank(),
                    new Assert\File([
                        'mimeTypes' => [
                            'video/mp4',
                            'video/mp3'
                        ]
                    ])
                ],
            ])
            ->add('image', FileType::class, [
                'label' => 'monsieurbiz_cmsplugin.ui_element.video.field.image',
                'data_class' => null,
                'required' => true,
                'constraints' => [
                    new Assert\NotBlank(),
                    new Assert\Image([])
                ],
            ])
        ;
    }
}
