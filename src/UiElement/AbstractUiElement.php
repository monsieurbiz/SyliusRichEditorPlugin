<?php

declare(strict_types=1);

namespace MonsieurBiz\SyliusCmsPlugin\UiElement;

use MonsieurBiz\SyliusCmsPlugin\Exception\UndefinedUiElementTypeException;
use Symfony\Contracts\Translation\TranslatorInterface;

abstract class AbstractUiElement implements UiElementInterface
{
    const TRANSLATION_PREFIX = 'monsieurbiz_cmsplugin.ui_element';

    protected $type = '';

    /**
     * @var TranslatorInterface
     */
    private $translator;

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

    public function getTitle(): string
    {
        return $this->getTranslation('title');
    }

    public function getShortDescription(): string
    {
        return $this->getTranslation('short_description');
    }

    public function getDescription(): string
    {
        return $this->getTranslation('description');
    }

    private function getTranslation(string $key): string
    {
        $translationKey = sprintf('%s.%s.%s', self::TRANSLATION_PREFIX, $this->getType(), $key);
        return $this->getTranslator()->trans($translationKey) ?? $translationKey;
    }

    public function jsonSerialize(): array
    {
        return [
            'short_description' => $this->getShortDescription(),
            'description' => $this->getDescription(),
            'title' => $this->getTitle(),
            'image' => $this->getImage(),
            'fields' => $this->getFields(),
        ];
    }

    public function getTemplate(): string
    {
        return sprintf('@MonsieurBizSyliusCmsPlugin/UiElement/%s.html.twig', $this->getType());
    }

    public function getImage(): string
    {
        return '/bundles/monsieurbizsyliuscmsplugin/images/ui_elements/default.svg';
    }
}
