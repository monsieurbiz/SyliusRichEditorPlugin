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

interface UiElementInterface extends \JsonSerializable
{
    /**
     * @param MetadataInterface $metadata
     */
    public function setMetadata(MetadataInterface $metadata): void;

    /**
     * @return string
     */
    public function getCode(): string;

    /**
     * @return string
     */
    public function getTitle(): string;

    /**
     * @return string
     */
    public function getDescription(): string;

    /**
     * @return string
     */
    public function getIcon(): string;

    /**
     * @throws \InvalidArgumentException
     */
    public function getFormClass(): string;

    /**
     * @throws \InvalidArgumentException
     *
     * @return string
     */
    public function getAdminFormTemplate(): string;

    /**
     * @throws \InvalidArgumentException
     *
     * @return string
     */
    public function getAdminRenderTemplate(): string;

    /**
     * @throws \InvalidArgumentException
     *
     * @return string
     */
    public function getFrontRenderTemplate(): string;
}
