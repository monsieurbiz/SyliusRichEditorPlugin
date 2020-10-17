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

final class UiElement implements UiElementInterface
{
    /**
     * @var MetadataInterface
     */
    private MetadataInterface $metadata;

    /**
     * UiElement constructor.
     *
     * @param MetadataInterface $metadata
     */
    public function __construct(MetadataInterface $metadata)
    {
        $this->metadata = $metadata;
    }

    public function getCode(): string
    {
        return $this->metadata->getCode();
    }

    public function getTitle(): string
    {
        // TODO: Implement getTitle() method.
    }

    public function getDescription(): string
    {
        // TODO: Implement getDescription() method.
    }

    public function getIcon(): string
    {
        // TODO: Implement getIcon() method.
    }

    /**
     * @throws UndefinedUiElementTypeException
     */
    public function getFormClass(): string
    {
        // TODO: Implement getFormClass() method.
    }

    public function getAdminFormTemplate(): string
    {
        // TODO: Implement getAdminFormTemplate() method.
    }

    public function getAdminRenderTemplate(): string
    {
        // TODO: Implement getAdminRenderTemplate() method.
    }

    public function getFrontRenderTemplate(): string
    {
        // TODO: Implement getFrontRenderTemplate() method.
    }

    /**
     * Specify data which should be serialized to JSON.
     *
     * @see https://php.net/manual/en/jsonserializable.jsonserialize.php
     *
     * @return mixed data which can be serialized by <b>json_encode</b>,
     *               which is a value of any type other than a resource
     *
     * @since 5.4.0
     */
    public function jsonSerialize()
    {
        // TODO: Implement jsonSerialize() method.
    }
}
