<?php

declare(strict_types=1);

namespace MonsieurBiz\SyliusRichEditorPlugin\Form\Type\UiElement;

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
                'label' => 'monsieurbiz_richeditor_plugin.ui_element.image.field.image',
                'data_class' => null, // @TODO check to have the File original data class, and remove this line
                'required' => true,
                'constraints' => [
                    new Assert\NotBlank([]),
                    new Assert\Image([])
                ],
            ])
            ->add('alt', TextType::class, [
                'required' => true,
                'label' => 'monsieurbiz_richeditor_plugin.ui_element.image.field.alt',
                'constraints' => [
                    new Assert\NotBlank([])
                ],
            ])
            ->add('title', TextType::class, [
                'required' => true,
                'label' => 'monsieurbiz_richeditor_plugin.ui_element.image.field.title',
                'constraints' => [
                    new Assert\NotBlank([])
                ],
            ])
        ;
    }
}
