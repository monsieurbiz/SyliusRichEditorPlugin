<?php

declare(strict_types=1);

namespace Monsieurbiz\SyliusCmsPlugin\Form\Type\UiElement;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints as Assert;

class ImageType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('image', FileType::class, [
                'label' => 'monsieurbiz_cmsplugin.ui_element.image.field.image',
                'mapped' => false,
                'required' => true,
                'constraints' => [
                    new Assert\Image([])
                ],
            ])
            ->add('alt', TextType::class, [
                'required' => true,
                'label' => 'monsieurbiz_cmsplugin.ui_element.image.field.alt',
            ])
            ->add('title', TextType::class, [
                'required' => true,
                'label' => 'monsieurbiz_cmsplugin.ui_element.image.field.title',
            ])
        ;
    }
}
