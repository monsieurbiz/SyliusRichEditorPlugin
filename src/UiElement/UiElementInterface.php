<?php

/*
 * This file is part of Monsieur Biz' Rich Editor plugin for Sylius.
 *
 * (c) Monsieur Biz <sylius@monsieurbiz.com>
 *
 * For the full copyright and license information, please view the LICENSE.txt
 * file that was distributed with this source code.
 */

declare(strict_types=1);

namespace MonsieurBiz\SyliusRichEditorPlugin\UiElement;

use InvalidArgumentException;
use Symfony\Contracts\Translation\TranslatorInterface;
use Twig\Environment;

interface UiElementInterface extends \JsonSerializable
{
    public function setMetadata(MetadataInterface $metadata): void;

    public function setTranslator(TranslatorInterface $translator): void;

    public function setTwigEnvironment(Environment $twig): void;

    public function getCode(): string;

    /**
     * @return string
     */
    public function getAlias(): ?string;

    public function getTitle(): string;

    public function getDescription(): string;

    public function getIcon(): string;

    public function getWireframe(): string;

    public function getWireframeAsHtml(): string;

    public function isEnabled(): bool;

    /**
     * @throws InvalidArgumentException
     */
    public function getFormClass(): string;

    /**
     * @throws InvalidArgumentException
     */
    public function getAdminFormTemplate(): string;

    /**
     * @throws InvalidArgumentException
     */
    public function getAdminRenderTemplate(): string;

    /**
     * @throws InvalidArgumentException
     */
    public function getFrontRenderTemplate(): string;

    /**
     * Flag an element as ignored.
     */
    public function ignore(): void;
}
