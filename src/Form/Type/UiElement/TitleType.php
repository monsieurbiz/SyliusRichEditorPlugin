<?php

/*
 * This file is part of Monsieur Biz' Rich Editor plugin for Sylius.
 *
 * (c) Monsieur Biz <sylius@monsieurbiz.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

declare(strict_types=1);

namespace MonsieurBiz\SyliusRichEditorPlugin\Form\Type\UiElement;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints as Assert;

class TitleType extends AbstractType
{
    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('content', \Symfony\Component\Form\Extension\Core\Type\TextType::class, [
                'required' => true,
                'label' => 'monsieurbiz_richeditor_plugin.ui_element.title.field.content',
                'constraints' => [
                    new Assert\NotBlank([]),
                ],
            ])
        ;
    }
}
