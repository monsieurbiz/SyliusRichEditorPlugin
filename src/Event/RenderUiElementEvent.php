<?php

declare(strict_types=1);

namespace MonsieurBiz\SyliusRichEditorPlugin\Event;

use MonsieurBiz\SyliusRichEditorPlugin\UiElement\UiElementInterface;
use Symfony\Contracts\EventDispatcher\Event;

class RenderUiElementEvent extends Event
{
    /**
     * @var array
     */
    protected $element;

    /**
     * @var UiElementInterface
     */
    protected $uiElement;

    /**
     * RenderUiElementEvent constructor.
     *
     * @param UiElementInterface $uiElement
     * @param array $element
     */
    public function __construct(
        UiElementInterface $uiElement,
        array $element
    ) {
        $this->uiElement = $uiElement;
        $this->element = $element;
    }

    /**
     * @return UiElementInterface
     */
    public function getUiElement(): UiElementInterface
    {
        return $this->uiElement;
    }

    /**
     * @return array
     */
    public function getElement(): array
    {
        return $this->element;
    }

    /**
     * @param array $element
     */
    public function setElement(array $element): void
    {
        $this->element = $element;
    }
}
