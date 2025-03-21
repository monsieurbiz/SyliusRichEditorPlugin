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

namespace App\Form\Type\UiElement;

use App\UiElement\ProductCollectionUiElement;
use MonsieurBiz\SyliusRichEditorPlugin\Attribute\AsUiElement;
use Sylius\Resource\Doctrine\Persistence\RepositoryInterface;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\UX\LiveComponent\Form\Type\LiveCollectionType;

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
                    'label' => 'monsieurbiz_richeditor_plugin.form.add_item', // To test the custom translation
                ],
                'button_delete_options' => [
                    'label' => 'monsieurbiz_richeditor_plugin.form.delete_item', // To test the custom translation
                ],
                'label' => 'app.ui_element.product_collection.field.products',
                'allow_add' => true,
                'allow_delete' => true,
                'delete_empty' => true,
                'attr' => [
                    'class' => 'p-3 bg-light border rounded collection--flex',
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
