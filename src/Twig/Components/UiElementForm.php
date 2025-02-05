<?php

namespace MonsieurBiz\SyliusRichEditorPlugin\Twig\Components;

use App\Entity\Locale\Locale;
use MonsieurBiz\SyliusRichEditorPlugin\UiElement\UiElement;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\FormInterface;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\ComponentWithFormTrait;
use Symfony\UX\LiveComponent\DefaultActionTrait;

#[AsLiveComponent(name: 'SyliusAdmin:MonsieurBizUiElement:Form', template: '@MonsieurBizSyliusRichEditorPlugin/Admin/formContainer.html.twig')]
class UiElementForm extends AbstractController
{
    use DefaultActionTrait;
    use ComponentWithFormTrait;
    use LiveCollectionRichEditorTrait;

    /**
     * The initial data used to create the form.
     */
    #[LiveProp]
    public array $data;

    public UiElement $uiElement;

    public bool $isEdition = false;

    public ?string $locale = null;

    protected function instantiateForm(): FormInterface
    {
        return $this->createForm(
            $this->uiElement->getFormClass(),
            $this->data,
            ['attr' => ['data-form-type' => $this->uiElement->getFormClass()]]
        );
    }
}
