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
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\PropertyAccess\PropertyAccessorInterface;
use Symfony\UX\LiveComponent\Attribute\LiveAction;
use Symfony\UX\LiveComponent\Attribute\LiveArg;
use Symfony\UX\LiveComponent\Attribute\LiveListener;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\ComponentToolsTrait;
use Symfony\UX\LiveComponent\ComponentWithFormTrait;
use Symfony\UX\LiveComponent\DefaultActionTrait;
use Symfony\UX\LiveComponent\LiveCollectionTrait;

class UiElementForm
{
    use ComponentToolsTrait;
    use ComponentWithFormTrait;
    use DefaultActionTrait;
    use LiveCollectionTrait {
        addCollectionItem as private addLiveCollectionItem;
        removeCollectionItem as private removeLiveCollectionItem;
    }

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

    public function __construct(
        protected readonly FormFactoryInterface $formFactory,
    ) {
    }

    #[LiveAction]
    public function addCollectionItem(PropertyAccessorInterface $propertyAccessor, #[LiveArg] string $name): void
    {
        $this->addLiveCollectionItem($propertyAccessor, $name);
        $this->dispatchBrowserEvent('rich-editor:reload', []);
    }

    #[LiveAction]
    public function removeCollectionItem(PropertyAccessorInterface $propertyAccessor, #[LiveArg] string $name, #[LiveArg] int $index): void
    {
        $this->removeLiveCollectionItem($propertyAccessor, $name, $index);
        $this->dispatchBrowserEvent('rich-editor:reload', []);
    }

    protected function instantiateForm(): FormInterface
    {
        return $this->formFactory->create(
            $this->uiElementFormClass ?? throw new RuntimeException('Ui Element form class is not defined'),
            $this->data,
        );
    }

    #[LiveListener('media-manager:file-selected')]
    public function mediaManagerFileSelected(
        #[LiveArg]
        string $inputName,
        #[LiveArg]
        string $filePath,
    ): void {
        // Support any depth: e.g. menu_item[linkSettings][thumbnail] or menu_item[foo][bar][baz]
        $inputNameParts = explode('[', str_replace(']', '', $inputName));
        // Remove the first part (form name, e.g. menu_item)
        array_shift($inputNameParts);
        $this->setFormValueByPath($inputNameParts, $filePath);
    }

    /**
     * Set a value in formValues using a path array (e.g. ['linkSettings','thumbnail']).
     *
     * @param array<int, string> $path
     */
    private function setFormValueByPath(array $path, mixed $value): void
    {
        $ref = &$this->formValues;
        foreach ($path as $segment) {
            if (!isset($ref[$segment]) || !\is_array($ref[$segment])) {
                $ref[$segment] = [];
            }
            $ref = &$ref[$segment];
        }
        $ref = $value;
    }
}
