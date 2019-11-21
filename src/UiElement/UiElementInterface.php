<?php

declare(strict_types=1);

namespace Monsieurbiz\SyliusCmsPlugin\UiElement;

use Symfony\Contracts\Translation\TranslatorInterface;

// @TODO : Implements JsonSerializable

interface UiElementInterface
{
    const TRANSLATION_PREFIX = 'monsieurbiz_cmsplugin.ui_element';

    public function __construct(TranslatorInterface $translator);
    public function getType(): string;
    public function getShortDescription(): string;
    public function getDescription(): string;
    public function getTitle(): string;
    public function getImage(): string;
    public function getFields(): array;
    public function getForm(): void; // @TODO change return value
}
