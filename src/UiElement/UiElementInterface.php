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

interface UiElementInterface extends \JsonSerializable
{
    public function __construct(MetadataInterface $metadata);

    public function getCode(): string;

    public function getTitle(): string;

    public function getDescription(): string;

    public function getIcon(): string;

    /**
     * @throws UndefinedUiElementTypeException
     */
    public function getFormClass(): string;

    public function getAdminFormTemplate(): string;

    public function getAdminRenderTemplate(): string;

    public function getFrontRenderTemplate(): string;
}
