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

use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormView;

class WysiwygType extends TextareaType
{
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

        parent::buildView($view, $form, $options);
    }
}
