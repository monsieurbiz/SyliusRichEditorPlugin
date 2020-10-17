<?php

declare(strict_types=1);

namespace App\Form\Extension;

use MonsieurBiz\SyliusRichEditorPlugin\Form\Type\RichEditorType;
use Sylius\Bundle\ProductBundle\Form\Type\ProductTranslationType;
use Symfony\Component\Form\AbstractTypeExtension;
use Symfony\Component\Form\FormBuilderInterface;

class ProductTypeExtension extends AbstractTypeExtension
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->remove('description');
        $builder->add('description', RichEditorType::class, [
            'required' => false,
            'label' => 'sylius.form.product.description',
        ]);
    }

    public static function getExtendedTypes(): iterable
    {
        return [ProductTranslationType::class];
    }
}
