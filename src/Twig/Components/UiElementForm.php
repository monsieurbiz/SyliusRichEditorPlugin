<?php

namespace MonsieurBiz\SyliusRichEditorPlugin\Twig\Components;

use MonsieurBiz\SyliusRichEditorPlugin\UiElement\UiElement;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\DependencyInjection\Attribute\AutoconfigureTag;
use Symfony\Component\Form\FormInterface;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\ComponentWithFormTrait;
use Symfony\UX\LiveComponent\DefaultActionTrait;

#[AsLiveComponent(name: 'sylius_admin:uielement:form')]
#[AutoconfigureTag(attributes:['name' => 'sylius.live_component.admin', 'key' => 'sylius_admin:uielement:form'])]
class UiElementForm extends AbstractController
{
    use DefaultActionTrait;
    use ComponentWithFormTrait;
    use LiveCollectionRichEditorTrait;

    /**
     * The initial data used to create the form.
     */
    #[LiveProp]
    public ?array $initialFormData = null;

    public ?UiElement $uiElement = null;

    protected function instantiateForm(): FormInterface
    {
        dump($this->initialFormData);
        dump($this->uiElement);
        dump($this->formType);

        // we can extend AbstractController to get the normal shortcuts
        return $this->createForm($this->uiElement?->getFormClass() ?? $this->formType, $this->initialFormData, ['attr' => ['data-form-type' => $this->uiElement?->getFormClass()]]);
    }
}
