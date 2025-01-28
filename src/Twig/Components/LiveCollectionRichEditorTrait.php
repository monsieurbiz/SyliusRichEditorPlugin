<?php

namespace MonsieurBiz\SyliusRichEditorPlugin\Twig\Components;

use Symfony\Component\PropertyAccess\PropertyAccessorInterface;
use Symfony\UX\LiveComponent\Attribute\LiveAction;
use Symfony\UX\LiveComponent\Attribute\LiveArg;
use Symfony\UX\LiveComponent\ComponentWithFormTrait;

trait LiveCollectionRichEditorTrait
{
    use ComponentWithFormTrait;

    private ?string $formType = null;

    #[LiveAction]
    public function addCollectionItem(
        PropertyAccessorInterface $propertyAccessor,
        #[LiveArg]
        string $name,
        #[LiveArg]
        string $form,
        #[LiveArg]
        ?string $type = null,
    ): void {
        $this->formType = $form;
        $propertyPath = $this->fieldNameToPropertyPath($name, $this->formName);
        $data = $propertyAccessor->getValue($this->formValues, $propertyPath);

        if (!\is_array($data)) {
            $propertyAccessor->setValue($this->formValues, $propertyPath, []);
            $data = [];
        }

        $index = [] !== $data ? count($data) : 0;
        $propertyAccessor->setValue(
            $this->formValues,
            sprintf('%s[%s]', $propertyPath, $index),
            null === $type ? [] : ['type' => $type],
        );
    }

    #[LiveAction]
    public function removeCollectionItem(
        PropertyAccessorInterface $propertyAccessor,
        #[LiveArg]
        string $name,
        #[LiveArg]
        string $form,
        #[LiveArg]
        int|string $index,
    ): void {
        $this->formType = $form;
        $propertyPath = $this->fieldNameToPropertyPath($name, $this->formName);
        $data = $propertyAccessor->getValue($this->formValues, $propertyPath);
        unset($data[$index]);
        $propertyAccessor->setValue($this->formValues, $propertyPath, $data);
    }

    private function fieldNameToPropertyPath(string $collectionFieldName, string $rootFormName): string
    {
        $propertyPath = $collectionFieldName;

        if (str_starts_with($collectionFieldName, $rootFormName)) {
            $propertyPath = substr_replace($collectionFieldName, '', 0, mb_strlen($rootFormName));
        }

        if (!str_starts_with($propertyPath, '[')) {
            $propertyPath = "[$propertyPath]";
        }

        return $propertyPath;
    }
}
