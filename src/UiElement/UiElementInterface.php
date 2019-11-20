<?php

declare(strict_types=1);

namespace Monsieurbiz\SyliusCmsPlugin\UiElement;

use Symfony\Contracts\Translation\TranslatorInterface;

interface UiElementInterface
{
    const TRANSLATION_PREFIX = 'monsieurbiz_cmsplugin.ui_element';

    public function __construct(TranslatorInterface $translator);
    public function getType(): string;
    public function getShortDescription(): string;
    public function getDescription(): string;
    public function getTitle(): string;
    public function getPreview(): string;
    public function getFields(): array;
}
