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

namespace App\Form\Extension;

use MonsieurBiz\SyliusRichEditorPlugin\Form\Type\RichEditorType;
use Sylius\Bundle\ProductBundle\Form\Type\ProductTranslationType;
use Symfony\Component\Form\AbstractTypeExtension;
use Symfony\Component\Form\FormBuilderInterface;

class ProductTypeExtension extends AbstractTypeExtension
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder->remove('description');
        $builder->add('description', RichEditorType::class, [
            'required' => false,
            'label' => 'sylius.form.product.description',
            'locale' => $builder->getName(),
            //'tags' => ['-map'],
        ]);
    }

    public static function getExtendedTypes(): iterable
    {
        return [ProductTranslationType::class];
    }
}
