<?php

declare(strict_types=1);

namespace MonsieurBiz\SyliusCmsPlugin\Form\Type\UiElement;

use Monsieurbiz\SyliusCmsPlugin\Form\Type\WysiwygType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints as Assert;

class QuoteType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('author', TextType::class, [
                'required' => true,
                'label' => 'monsieurbiz_cmsplugin.ui_element.quote.field.author',
                'constraints' => [
                    new Assert\NotBlank([])
                ],
            ])
            ->add('content', WysiwygType::class, [
                'required' => true,
                'label' => 'monsieurbiz_cmsplugin.ui_element.quote.field.content',
                'constraints' => [
                    new Assert\NotBlank([])
                ],
            ])
        ;
    }
}
