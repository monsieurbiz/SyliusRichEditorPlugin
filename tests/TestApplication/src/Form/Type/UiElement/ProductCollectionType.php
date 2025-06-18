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

namespace Tests\MonsieurBiz\SyliusRichEditorPlugin\TestApplication\Form\Type\UiElement;

use MonsieurBiz\SyliusRichEditorPlugin\Attribute\AsUiElement;
use Sylius\Resource\Doctrine\Persistence\RepositoryInterface;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\UX\LiveComponent\Form\Type\LiveCollectionType;
use Tests\MonsieurBiz\SyliusRichEditorPlugin\TestApplication\UiElement\ProductCollectionUiElement;

#[AsUiElement(
    code: 'app.product_collection',
    icon: 'gg:debug',
    uiElement: ProductCollectionUiElement::class,
    tags: ['debug'],
)]
class ProductCollectionType extends AbstractType
{
    /** @param RepositoryInterface<ProductInterface> $productRepository */
    public function __construct(private RepositoryInterface $productRepository)
    {
    }

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('products', LiveCollectionType::class, [
                'entry_type' => ProductType::class,
                'button_add_options' => [
                    'label' => 'monsieurbiz_richeditor_plugin.form.add_item',
                ],
                'button_delete_options' => [
                    'label' => 'monsieurbiz_richeditor_plugin.form.delete_item',
                    'attr' => [
                        'class' => 'btn-outline-danger',
                    ],
                ],
                'label' => 'app.ui_element.product_collection.field.products',
                'allow_add' => true,
                'allow_delete' => true,
                'delete_empty' => true,
                'attr' => [
                    'class' => 'row row-cols-1 row-cols-sm-2 row-cols-md-4',
                ],
                'entry_options' => [
                    'label' => false,
                    'attr' => [
                        'class' => 'p-3 bg-gray-300 border rounded col',
                    ],
                ],
                'constraints' => [
                    new Assert\Count([
                        'min' => 1,
                    ]),
                ],
            ])
        ;
    }
}
