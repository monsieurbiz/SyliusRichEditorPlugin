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

use RuntimeException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\FormInterface;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\DefaultActionTrait;
use Symfony\UX\LiveComponent\LiveCollectionTrait;

#[AsLiveComponent(name: 'SyliusAdmin:MonsieurBizUiElement:Form', template: '@MonsieurBizSyliusRichEditorPlugin/Admin/formContainer.html.twig')]
class UiElementForm extends AbstractController
{
    use DefaultActionTrait;
    use LiveCollectionTrait;

    #[LiveProp]
    public array $data;

    #[LiveProp]
    public ?string $uiElementCode = null;

    #[LiveProp]
    public ?string $uiElementFormClass = null;

    #[LiveProp]
    public bool $isEdition = false;

    #[LiveProp]
    public ?string $locale = null;

    protected function instantiateForm(): FormInterface
    {
        return $this->createForm(
            $this->uiElementFormClass ?? throw new RuntimeException('Ui Element form class is not defined'),
            $this->data,
        );
    }
}
