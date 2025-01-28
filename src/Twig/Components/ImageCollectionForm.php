<?php

namespace MonsieurBiz\SyliusRichEditorPlugin\Twig\Components;

use MonsieurBiz\SyliusRichEditorPlugin\Form\Type\UiElement\ImageCollectionType;
use MonsieurBiz\SyliusRichEditorPlugin\UiElement\UiElement;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\DependencyInjection\Attribute\AsTaggedItem;
use Symfony\Component\DependencyInjection\Attribute\Autoconfigure;
use Symfony\Component\DependencyInjection\Attribute\AutoconfigureTag;
use Symfony\Component\Form\FormInterface;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\DefaultActionTrait;
use Sylius\Bundle\UiBundle\Twig\Component\LiveCollectionTrait;

#[AsLiveComponent(name: 'sylius_admin:constructor:form')]
#[AutoconfigureTag(attributes:['name' => 'sylius.live_component.admin', 'key' => 'sylius_admin:constructor:form'])]
class ImageCollectionForm extends AbstractController
{
    use DefaultActionTrait;
    use LiveCollectionTrait;

    #[LiveProp]
    public ?UiElement $uiElement;

    protected function instantiateForm(): FormInterface
    {
        return $this->createForm(
            ImageCollectionType::class,
            $this->uiElement
        );
    }
}
