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

use MonsieurBiz\SyliusMediaManagerPlugin\Form\Type\ImageType as MediaManagerImageType;
use MonsieurBiz\SyliusRichEditorPlugin\Form\Constraints\RichEditorConstraints;
use MonsieurBiz\SyliusRichEditorPlugin\Form\Type\AlignmentType;
use MonsieurBiz\SyliusRichEditorPlugin\Form\Type\LinkType;
use MonsieurBiz\SyliusRichEditorPlugin\Form\Type\LinkTypeType;
use MonsieurBiz\SyliusRichEditorPlugin\MonsieurBizSyliusRichEditorPlugin;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\TextType as FormTextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\Validator\Constraints as Assert;

class ImageType extends AbstractType
{
    /**
     * @inheritdoc
     */
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $this->addFields($builder, $options);
        $this->addEvents($builder, $options);
    }

    /**
     * @SuppressWarnings(PHPMD.UnusedFormalParameter)
     */
    public function addFields(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('image', $this->getImageType(), [
                'label' => 'monsieurbiz_richeditor_plugin.ui_element.monsieurbiz.image.field.image',
                'data_class' => null,
                'required' => true,
                'attr' => [
                    'data-image' => 'true', // To be able to manage display in form
                ],
            ])
            ->add('alt', FormTextType::class, [
                'required' => false,
                'label' => 'monsieurbiz_richeditor_plugin.ui_element.monsieurbiz.image.field.alt',
            ])
            ->add('title', FormTextType::class, [
                'required' => false,
                'label' => 'monsieurbiz_richeditor_plugin.ui_element.monsieurbiz.image.field.title',
            ])
            ->add('link', LinkType::class, [
                'required' => false,
                'label' => 'monsieurbiz_richeditor_plugin.ui_element.monsieurbiz.image.field.link',
                'constraints' => [
                    new Assert\AtLeastOneOf([
                        'includeInternalMessages' => false,
                        'message' => 'monsieurbiz_richeditor_plugin.not_valid_url',
                        'constraints' => [
                            new Assert\Url(['protocols' => ['http', 'https'], 'relativeProtocol' => true]),
                            new Assert\Regex(['pattern' => '`^(#|/.*)$`']),
                        ],
                    ]),
                ],
            ])
            ->add('link_type', LinkTypeType::class, [
                'required' => false,
            ])
            ->add('align', AlignmentType::class)
        ;
    }

    private function getImageType(): string
    {
        // @phpstan-ignore-next-line
        return MonsieurBizSyliusRichEditorPlugin::imageMediaManagerExists() ? MediaManagerImageType::class : FileType::class;
    }

    public function addEvents(FormBuilderInterface $builder, array $options): void
    {
        $builder->addEventListener(FormEvents::PRE_SUBMIT, function (FormEvent $event): void {
            // Change image field constraints depending on submitted value
            $options = $event->getForm()->get('image')->getConfig()->getOptions();
            $options['constraints'] = RichEditorConstraints::getImageConstraints(\is_array($event->getData()) ? $event->getData() : [], 'image');
            $event->getForm()->add('image', $this->getImageType(), $options);
        });
    }
}
