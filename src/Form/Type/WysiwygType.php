<?php

/*
 * This file is part of Monsieur Biz' Rich Editor plugin for Sylius.
 *
 * (c) Monsieur Biz <sylius@monsieurbiz.com>
 *
 * For the full copyright and license information, please view the LICENSE.txt
 * file that was distributed with this source code.
 */

declare(strict_types=1);

namespace MonsieurBiz\SyliusRichEditorPlugin\Form\Type;

use MonsieurBiz\SyliusRichEditorPlugin\Renderer\EditorJSRendererInterface;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormView;
use Symfony\Component\OptionsResolver\OptionsResolver;

class WysiwygType extends TextareaType
{
    private bool $editorjs;

    public function __construct(
        private readonly ?EditorJSRendererInterface $renderer = null,
        ?bool $editorjs = null
    ) {
        if (null === $this->renderer) {
            trigger_deprecation(
                'monsieurbiz/sylius-rich-editor-plugin',
                '2.5',
                'Not passing an %s instance to %s constructor is deprecated and will be removed in the next version.',
                EditorJSRendererInterface::class,
                self::class,
            );
        }
        if (null === $editorjs) {
            trigger_deprecation(
                'monsieurbiz/sylius-rich-editor-plugin',
                '2.5',
                'Not passing an $editorjs to %s constructor is deprecated and will be removed in the next version.',
                self::class,
            );
        }
        $this->editorjs = (bool) $editorjs;
    }

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->addEventListener(FormEvents::PRE_SET_DATA, function (FormEvent $event) use ($options): void {
                $data = $event->getData();

                // Try to convert EditorJS data to HTML for the Pell editor.
                if (!\is_string($data) || $options['editorjs'] || !$this->renderer) {
                    return;
                }

                $event->setData($this->renderer->render($data));
            })
        ;
    }

    /**
     * @inheritdoc
     */
    public function buildView(FormView $view, FormInterface $form, array $options): void
    {
        if (!isset($view->vars['attr']['class'])) {
            $view->vars['attr']['class'] = 'wysiwyg-enabled';
        } else {
            $view->vars['attr']['class'] .= ' wysiwyg-enabled';
        }

        $view->vars['attr']['data-editorjs'] = $options['editorjs'] ? 'true' : 'false';

        parent::buildView($view, $form, $options);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);
        $resolver->setDefault('editorjs', $this->editorjs);
        $resolver->setAllowedTypes('editorjs', 'bool');
    }
}
