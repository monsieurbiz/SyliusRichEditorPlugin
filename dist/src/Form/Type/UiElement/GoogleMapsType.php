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

use App\UiElement\GoogleMapsUiElement;
use MonsieurBiz\SyliusRichEditorPlugin\Attribute\AsUiElement;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints as Assert;

#[AsUiElement(
    code: 'app.google_maps',
    icon: 'map pin',
    uiElement: GoogleMapsUiElement::class,
    tags: ['map'],
)]
class GoogleMapsType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('link', TextType::class, [
                'label' => 'app.ui_element.google_maps.link',
                'required' => true,
                'constraints' => [
                    new Assert\NotBlank(),
                ],
            ])
        ;
    }
}
