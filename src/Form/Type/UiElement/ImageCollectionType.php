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

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\UX\LiveComponent\Form\Type\LiveCollectionType;

class ImageCollectionType extends AbstractType
{
    /**
     * @inheritdoc
     */
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder->add('images', LiveCollectionType::class, [
            'entry_type' => ImageType::class,
            'button_add_options' => [
                'label' => 'monsieurbiz_richeditor_plugin.form.add_image',
            ],
            'allow_add' => true,
            'allow_delete' => true,
            'by_reference' => false,
            'delete_empty' => true,
            'label' => 'monsieurbiz_richeditor_plugin.ui_element.monsieurbiz.image_collection.field.images',
            'attr' => [
                'class' => 'p-3 bg-light border rounded collection--flex',
            ],
        ]);
    }
}
