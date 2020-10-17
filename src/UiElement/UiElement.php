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
        return $this->metadata->getParameter('title');
    }

    public function getDescription(): string
    {
        return $this->metadata->getParameter('description');
    }

    public function getIcon(): string
    {
        return $this->metadata->getParameter('icon');
    }

    /**
     * @throws UndefinedUiElementTypeException
     */
    public function getFormClass(): string
    {
        return $this->metadata->getClass('form');
    }

    public function getAdminFormTemplate(): string
    {
        return $this->metadata->getTemplate('admin_form');
    }

    public function getAdminRenderTemplate(): string
    {
        return $this->metadata->getTemplate('admin_render');
    }

    public function getFrontRenderTemplate(): string
    {
        return $this->metadata->getTemplate('front_render');
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
