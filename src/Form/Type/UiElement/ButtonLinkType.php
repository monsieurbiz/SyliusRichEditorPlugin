<?php

declare(strict_types=1);

namespace MonsieurBiz\SyliusRichEditorPlugin\Form\Type\UiElement;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType as FormTextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints as Assert;

class ButtonLinkType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('label', FormTextType::class, [
                'required' => true,
                'label' => 'monsieurbiz_richeditor_plugin.ui_element.button_link.field.label',
                'constraints' => [
                    new Assert\NotBlank([])
                ],
            ])
            ->add('link', FormTextType::class, [
                'required' => true,
                'label' => 'monsieurbiz_richeditor_plugin.ui_element.button_link.field.link',
                'constraints' => [
                    new Assert\Url([]),
                    new Assert\NotBlank([])
                ],
            ])
        ;
    }
}
