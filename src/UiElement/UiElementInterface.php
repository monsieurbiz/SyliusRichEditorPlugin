<?php

declare(strict_types=1);

namespace MonsieurBiz\SyliusCmsPlugin\UiElement;

use Symfony\Contracts\Translation\TranslatorInterface;

// @TODO : Implements JsonSerializable

interface UiElementInterface extends \JsonSerializable
{
    public function __construct(TranslatorInterface $translator);
    public function getType(): string;
    public function getShortDescription(): string;
    public function getDescription(): string;
    public function getTitle(): string;
    public function getImage(): string;
    public function getFields(): array;
    public function getFormClass(): string;
    public function getTemplate(): string;
}
