<?php

namespace Monsieurbiz\SyliusRichEditorPlugin\Form\Type;

use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormView;

class RichEditorType extends TextAreaType
{
    /**
     * {@inheritdoc}
     */
    public function buildView(FormView $view, FormInterface $form, array $options)
    {
        $view->vars['attr']['data-component'] = 'rich-editor';
        parent::buildView($view, $form, $options);
    }
}
