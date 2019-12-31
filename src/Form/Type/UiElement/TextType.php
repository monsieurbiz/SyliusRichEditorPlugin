<?php

declare(strict_types=1);

namespace MonsieurBiz\SyliusCmsPlugin\Form\Type\UiElement;

use MonsieurBiz\SyliusCmsPlugin\Form\Type\WysiwygType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints as Assert;

class TextType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('content', WysiwygType::class, [
                'required' => true,
                'label' => 'monsieurbiz_cmsplugin.ui_element.text.field.content',
                'constraints' => [
                    new Assert\NotBlank([])
                ],
            ])
        ;
    }
}