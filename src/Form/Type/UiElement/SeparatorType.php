<?php

declare(strict_types=1);

namespace MonsieurBiz\SyliusRichEditorPlugin\Form\Type\UiElement;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;

class SeparatorType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('hidden', CheckboxType::class, [
                'label' => 'monsieurbiz_richeditor_plugin.ui_element.separator.field.hidden',
                'required' => false,
            ])
            ->addEventListener(FormEvents::PRE_SET_DATA, function (FormEvent $event) {
                $data = $event->getData();
                $data['hidden'] = (bool) ($data['hidden'] ?? false);
                $event->setData($data);
            })
        ;
    }
}
