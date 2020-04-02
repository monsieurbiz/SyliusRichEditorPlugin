<?php

declare(strict_types=1);

namespace MonsieurBiz\SyliusRichEditorPlugin\UiElement;

use MonsieurBiz\SyliusRichEditorPlugin\Exception\UndefinedUiElementTypeException;
use Symfony\Contracts\Translation\TranslatorInterface;

abstract class AbstractUiElement implements UiElementInterface, NameableInterface
{
    const TRANSLATION_PREFIX = 'monsieurbiz_richeditor_plugin.ui_element';

    /**
     * @var string
     */
    protected $type = '';

    /**
     * @var TranslatorInterface
     */
    private $translator;

    /**
     * @var string|null
     */
    private $uiElementName;

    /**
     * AbstractUiElement constructor.
     * @param TranslatorInterface $translator
     */
    public function __construct(TranslatorInterface $translator)
    {
        $this->translator = $translator;
    }

    /**
     * @return TranslatorInterface
     */
    public function getTranslator(): TranslatorInterface
    {
        return $this->translator;
    }

    /**
     * @return string
     * @throws UndefinedUiElementTypeException
     * @throws \ReflectionException
     */
    public function getType(): string
    {
        if (empty($this->type)) {
            $reflection = new \ReflectionClass(get_class($this));
            throw new UndefinedUiElementTypeException(sprintf(
                'Please add a type to your UI Element in class "%s". You can try to add this property `protected $type = \'%s\';`',
                $reflection->getName(),
                strtolower($reflection->getShortName()) // @TODO we can improve it with snakeCaseToCamelCaseNameConverter
            ));
        }
        return $this->type;
    }

    /**
     * @return string
     * @throws UndefinedUiElementTypeException
     */
    public function getTitle(): string
    {
        return $this->getTranslation('title');
    }

    /**
     * @return string
     * @throws UndefinedUiElementTypeException
     */
    public function getShortDescription(): string
    {
        return $this->getTranslation('short_description');
    }

    /**
     * @return string
     * @throws UndefinedUiElementTypeException
     */
    public function getDescription(): string
    {
        return $this->getTranslation('description');
    }

    /**
     * @param string $key
     *
     * @return string
     * @throws UndefinedUiElementTypeException
     */
    private function getTranslation(string $key): string
    {
        $translationKey = sprintf('%s.%s.%s', self::TRANSLATION_PREFIX, $this->getType(), $key);
        return $this->getTranslator()->trans($translationKey) ?? $translationKey;
    }

    /**
     * @return array
     */
    public function jsonSerialize(): array
    {
        return [
            'short_description' => $this->getShortDescription(),
            'description' => $this->getDescription(),
            'title' => $this->getTitle(),
            'image' => $this->getImage(),
            'fields' => $this->getFields(),
            'name' => $this->getUiElementName(),
        ];
    }

    /**
     * @return string
     * @throws UndefinedUiElementTypeException
     */
    public function getTemplate(): string
    {
        return sprintf('@MonsieurBizSyliusRichEditorPlugin/UiElement/%s.html.twig', $this->getType());
    }

    /**
     * @return string
     */
    public function getImage(): string
    {
        return '/bundles/monsieurbizsyliusricheditorplugin/images/ui_elements/default.svg';
    }

    /**
     * {@inheritDoc}
     */
    public function setUiElementName(string $name): void
    {
        $this->uiElementName = $name;
    }

    /**
     * {@inheritDoc}
     */
    public function getUiElementName(): ?string
    {
        return $this->uiElementName;
    }

}
