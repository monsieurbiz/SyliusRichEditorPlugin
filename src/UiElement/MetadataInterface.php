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

interface MetadataInterface
{
    public static function fromCodeAndConfiguration(string $code, array $parameters): self;

    public function getCode(): string;

    public function getAlias(): ?string;

    public function getCamelCasedCode(): string;

    public function isEnabled(): bool;

    /**
     * @return mixed
     */
    public function getParameter(string $name);

    public function hasParameter(string $name): bool;

    public function getParameters(): array;

    public function getClass(string $name): string;

    public function hasClass(string $name): bool;

    public function getTemplate(string $name): string;

    public function hasTemplate(string $name): bool;

    public function getServiceId(string $serviceName): string;

    public function getTags(): array;
}
