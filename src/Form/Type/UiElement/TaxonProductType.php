<?php

declare(strict_types=1);

namespace MonsieurBiz\SyliusRichEditorPlugin\Form\Type\UiElement;

use Sylius\Bundle\TaxonomyBundle\Form\Type\TaxonAutocompleteChoiceType;
use Sylius\Component\Core\Model\Taxon;
use Sylius\Component\Taxonomy\Factory\TaxonFactoryInterface;
use Sylius\Component\Taxonomy\Repository\TaxonRepositoryInterface;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType as FormTextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\Validator\Constraints as Assert;

class TaxonProductType extends AbstractType
{
    /**
     * @var TaxonRepositoryInterface
     */
    protected $taxonRepository;
    /**
     * @var TaxonFactoryInterface
     */
    protected $taxonFactory;

    public function __construct(TaxonRepositoryInterface $taxonRepository, TaxonFactoryInterface $taxonFactory)
    {
        $this->taxonRepository = $taxonRepository;
        $this->taxonFactory = $taxonFactory;
    }

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('taxon', TaxonAutocompleteChoiceType::class, [
                'required' => true,
                'label' => 'monsieurbiz_richeditor_plugin.ui_element.taxon_product.field.taxon',
                'constraints' => [
                    new Assert\NotBlank([])
                ],
            ])
            ->add('number_of_products', FormTextType::class, [
                'required' => true,
                'label' => 'monsieurbiz_richeditor_plugin.ui_element.taxon_product.field.number_of_products',
                'constraints' => [
                    new Assert\NotBlank([]),
                    new Assert\GreaterThan(0),
                ],
            ])
            ->add('title', FormTextType::class, [
                'required' => false,
                'label' => 'monsieurbiz_richeditor_plugin.ui_element.taxon_product.field.title',
            ])
            ->add('button_label', FormTextType::class, [
                'required' => false,
                'label' => 'monsieurbiz_richeditor_plugin.ui_element.taxon_product.field.button_label',
            ])
            ->addEventListener(FormEvents::PRE_SET_DATA, function (FormEvent $event) {
                $data = $event->getData();
                $taxonCode = $data['taxon'] ?? '';
                if ($taxonCode) {
                    $data['taxon'] = $this->taxonRepository->findOneBy(['code' => $taxonCode]);
                } else {
                    $data['taxon'] = $this->taxonFactory->createNew();
                }
                $event->setData($data);
            })
        ;
        $builder->resetModelTransformers();
    }
}
