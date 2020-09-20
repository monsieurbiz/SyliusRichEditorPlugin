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

use Symfony\Contracts\Translation\TranslatorInterface;

/** @TODO : Implements JsonSerializable */
interface UiElementInterface extends \JsonSerializable
{
    public function __construct(TranslatorInterface $translator);

    public function getType(): string;

    public function getShortDescription(): string;

    public function getDescription(): string;

    public function getTitle(): string;

    public function getImage(): string;

    /**
     * @return array<string>
     */
    public function getFields(): array;

    public function getFormClass(): string;

    public function getTemplate(): string;
}
