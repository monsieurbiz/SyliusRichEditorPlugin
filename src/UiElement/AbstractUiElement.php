<?php

declare(strict_types=1);

namespace Monsieurbiz\SyliusCmsPlugin\UiElement;

use Monsieurbiz\SyliusCmsPlugin\Exception\UndefinedUiElementTypeException;
use Symfony\Contracts\Translation\TranslatorInterface;

abstract class AbstractUiElement implements UiElementInterface
{
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
            throw new UndefinedUiElementTypeException('Please add a type to your UI Element');
        }
        return $this->type;
    }

    public function getTitle(): string
    {
        $this->getTranslationKey('title');
    }

    public function getShortDescription(): string
    {
        $this->getTranslationKey('short_description');
    }

    public function getDescription(): string
    {
        $this->getTranslationKey('description');
    }

    public function getImage(): string
    {
        $this->getTranslationKey('image');
    }

    private function getTranslationKey(string $key): string
    {
        return $this->getTranslator()->trans(sprintf('%s.%s.%s', self::TRANSLATION_PREFIX, $this->getType(), $key));
    }
}
