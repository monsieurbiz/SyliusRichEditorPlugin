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
use Sylius\Bundle\AdminBundle\Form\Type\ProductAutocompleteType;
use Sylius\Bundle\ResourceBundle\Form\DataTransformer\ResourceToIdentifierTransformer;
use Sylius\Resource\Doctrine\Persistence\RepositoryInterface;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\ReversedTransformer;
use Symfony\Component\Validator\Constraints as Assert;
use Tests\MonsieurBiz\SyliusRichEditorPlugin\TestApplication\UiElement\ProductUiElement;

#[AsUiElement(
    code: 'app.product',
    icon: 'gg:debug',
    uiElement: ProductUiElement::class,
    tags: ['debug'],
)]
class ProductType extends AbstractType
{
    /** @param RepositoryInterface<ProductInterface> $productRepository */
    public function __construct(private RepositoryInterface $productRepository)
    {
    }

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('product_code', ProductAutocompleteType::class, [
                'label' => 'app.ui_element.product.field.product',
                'required' => true,
                'constraints' => [
                    new Assert\NotBlank([]),
                ],
            ])
            ->get('product_code')->addModelTransformer(
                new ReversedTransformer(new ResourceToIdentifierTransformer($this->productRepository, 'code')),
            )
        ;
    }
}
