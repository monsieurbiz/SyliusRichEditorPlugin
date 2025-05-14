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

use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormView;
use Symfony\Component\OptionsResolver\OptionsResolver;

class RichEditorType extends TextType
{
    /**
     * @inheritdoc
     */
    public function buildView(FormView $view, FormInterface $form, array $options): void
    {
        $view->vars['attr']['data-component'] = 'rich-editor';
        $view->vars['attr']['data-tags'] = implode(',', \is_array($options['tags']) ? $options['tags'] : []);
        if (null !== $options['locale']) {
            $view->vars['attr']['data-locale'] = $options['locale'];
        }
        parent::buildView($view, $form, $options);
    }

    /**
     * @inheritdoc
     */
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'compound' => false,
            'tags' => [],
            'locale' => null,
        ]);
    }

    public function getBlockPrefix(): string
    {
        return 'rich_editor';
    }
}
