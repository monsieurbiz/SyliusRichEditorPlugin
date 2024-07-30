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

namespace MonsieurBiz\SyliusRichEditorPlugin\UiElement\Metadata;

use InvalidArgumentException;
use MonsieurBiz\SyliusRichEditorPlugin\UiElement\Metadata;
use MonsieurBiz\SyliusRichEditorPlugin\UiElement\MetadataInterface;

final class Registry implements RegistryInterface
{
    /**
     * @var array|MetadataInterface[]
     */
    private array $metadata = [];

    /**
     * @inheritdoc
     */
    public function get(string $code): MetadataInterface
    {
        if (!\array_key_exists($code, $this->metadata)) {
            throw new InvalidArgumentException(\sprintf('Resource "%s" does not exist.', $code));
        }

        return $this->metadata[$code];
    }

    /**
     * @inheritdoc
     */
    public function add(MetadataInterface $metadata): void
    {
        $this->metadata[$metadata->getCode()] = $metadata;
    }

    /**
     * @inheritdoc
     */
    public function addFromCodeAndConfiguration(string $code, array $configuration): void
    {
        $this->add(Metadata::fromCodeAndConfiguration($code, $configuration));
    }
}
