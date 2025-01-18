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

namespace MonsieurBiz\SyliusRichEditorPlugin\Form\Type\UiElement;

use MonsieurBiz\SyliusRichEditorPlugin\Form\Type\AlignmentType;
use MonsieurBiz\SyliusRichEditorPlugin\Form\Type\WysiwygType;
use MonsieurBiz\SyliusRichEditorPlugin\WysiwygEditor\EditorInterface;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints as Assert;

class TextType extends AbstractType
{
    /**
     * @inheritdoc
     */
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('content', WysiwygType::class, [
                'required' => true,
                'label' => 'monsieurbiz_richeditor_plugin.ui_element.monsieurbiz.text.field.content',
                'editor_toolbar_type' => EditorInterface::TOOLBAR_TYPE_MINIMAL,
                'constraints' => [
                    new Assert\NotBlank([]),
                ],
            ])
            ->add('align', AlignmentType::class, [
                'show_justify' => true,
            ])
        ;
    }
}
