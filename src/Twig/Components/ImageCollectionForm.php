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

namespace MonsieurBiz\SyliusRichEditorPlugin\Twig\Components;

use MonsieurBiz\SyliusRichEditorPlugin\Form\Type\UiElement\ImageCollectionType;
use MonsieurBiz\SyliusRichEditorPlugin\UiElement\UiElement;
use Sylius\Bundle\UiBundle\Twig\Component\LiveCollectionTrait;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\DependencyInjection\Attribute\AutoconfigureTag;
use Symfony\Component\Form\FormInterface;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\DefaultActionTrait;

#[AsLiveComponent(name: 'sylius_admin:constructor:form')]
#[AutoconfigureTag(attributes: ['name' => 'sylius.live_component.admin', 'key' => 'sylius_admin:constructor:form'])]
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
