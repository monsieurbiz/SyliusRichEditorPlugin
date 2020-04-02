<?php
declare(strict_types=1);

namespace MonsieurBiz\SyliusRichEditorPlugin\Form\Type;

use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;

trait NameableTypeTrait
{

    /**
     * @param FormBuilderInterface $builder
     */
    protected function addUiElementNameField(FormBuilderInterface $builder)
    {
        $builder->add($this->getUiElementNameName(), TextType::class, [
            'label' => 'monsieurbiz_richeditor_plugin.ui_element_name',
            'required' => false,
            'attr' => ['data-ui-element-name' => 'true']
        ]);
    }

    /**
     * @return string
     */
    public function getUiElementNameName(): string
    {
        return '_name';
    }

}
