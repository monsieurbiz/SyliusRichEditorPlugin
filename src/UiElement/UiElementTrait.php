<?php

declare(strict_types=1);

namespace Monsieurbiz\SyliusCmsPlugin\UiElement;

use Symfony\Contracts\Translation\TranslatorInterface;

trait UiElementTrait
{
    protected $translator;

    public function __construct(TranslatorInterface $translator)
    {
        $this->translator = $translator;
    }

    public function getType(): string
    {
        return self::TYPE;
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

    public function getPreview(): string
    {
        $this->getTranslationKey('preview');
    }

    private function getTranslationKey(string $key): string
    {
        return $this->translator->trans(sprintf('%s.%s.%s', self::TRANSLATION_PREFIX, $this->getType(), $key));
    }
}
