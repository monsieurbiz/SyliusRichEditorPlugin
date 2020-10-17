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

namespace MonsieurBiz\SyliusRichEditorPlugin\UiElement\Metadata;

use MonsieurBiz\SyliusRichEditorPlugin\UiElement\MetadataInterface;

interface RegistryInterface
{
    /**
     * @param string $code
     *
     * @return MetadataInterface
     */
    public function get(string $code): MetadataInterface;

    /**
     * @param MetadataInterface $metadata
     */
    public function add(MetadataInterface $metadata): void;

    /**
     * @param string $code
     * @param array $configuration
     */
    public function addFromCodeAndConfiguration(string $code, array $configuration): void;
}
