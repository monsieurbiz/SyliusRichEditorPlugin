<?php

/*
 * This file is part of Monsieur Biz' Rich Editor plugin for Sylius.
 *
 * (c) Monsieur Biz <sylius@monsieurbiz.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

declare(strict_types=1);

namespace MonsieurBiz\SyliusRichEditorPlugin\UiElement;

use MonsieurBiz\SyliusRichEditorPlugin\Exception\UndefinedUiElementTypeException;
use Symfony\Contracts\Translation\TranslatorInterface;

abstract class AbstractUiElement implements UiElementInterface
{
    public const TRANSLATION_PREFIX = 'monsieurbiz_richeditor_plugin.ui_element';

    protected string $type = '';

    /**
     * @var TranslatorInterface
     */
    private $translator;

    /**
     * AbstractUiElement constructor.
     *
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
            $reflection = new \ReflectionClass(static::class);
            throw new UndefinedUiElementTypeException(sprintf('Please add a type to your UI Element in class "%s". You can try to add this property `protected $type = \'%s\';`', $reflection->getName(), strtolower($reflection->getShortName()) /* @TODO we can improve it with snakeCaseToCamelCaseNameConverter */));
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
        return sprintf('@MonsieurBizSyliusRichEditorPlugin/UiElement/%s.html.twig', $this->getType());
    }

    public function getImage(): string
    {
        return '/bundles/monsieurbizsyliusricheditorplugin/images/ui_elements/default.svg';
    }
}
