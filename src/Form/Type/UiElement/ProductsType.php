<?php

declare(strict_types=1);

namespace MonsieurBiz\SyliusRichEditorPlugin\Form\Type\UiElement;

use Doctrine\Common\Collections\ArrayCollection;
use Sylius\Bundle\ProductBundle\Form\Type\ProductAutocompleteChoiceType;
use Sylius\Component\Core\Repository\ProductRepositoryInterface;
use Sylius\Component\Product\Factory\ProductFactoryInterface;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType as FormTextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\Validator\Constraints as Assert;

class ProductsType extends AbstractType
{
    /**
     * @var ProductRepositoryInterface
     */
    protected $productRepository;
    /**
     * @var ProductFactoryInterface
     */
    protected $productFactory;

    public function __construct(ProductRepositoryInterface $productRepository, ProductFactoryInterface $productFactory)
    {
        $this->productRepository = $productRepository;
        $this->productFactory = $productFactory;
    }

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('products', ProductAutocompleteChoiceType::class, [
                'multiple' => true,
                'required' => true,
                'label' => 'monsieurbiz_richeditor_plugin.ui_element.products.field.products',
                'constraints' => [
                    new Assert\Count([
                        'min' => 1,
                    ]),
                ],
            ])
            ->add('title', FormTextType::class, [
                'required' => false,
                'label' => 'monsieurbiz_richeditor_plugin.ui_element.products.field.title',
            ])
            ->addEventListener(FormEvents::PRE_SET_DATA, function (FormEvent $event) {
                $data = $event->getData();
                $products = $data['products'] ?? '';
                if (!empty($products)) {
                    $productCodes = explode(',', $products);
                    $data['products'] = new ArrayCollection($this->productRepository->findBy(['code' => $productCodes]));
                } else {
                    $data['products'] = new ArrayCollection([]);
                }
                $event->setData($data);
            })
        ;
        $builder->resetModelTransformers();
    }
}
