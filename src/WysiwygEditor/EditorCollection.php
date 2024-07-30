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

namespace MonsieurBiz\SyliusRichEditorPlugin\WysiwygEditor;

use DomainException;
use Traversable;

final class EditorCollection implements EditorCollectionInterface
{
    /**
     * @var EditorInterface[]
     */
    private array $editors;

    public function __construct(Traversable $editors)
    {
        $this->editors = iterator_to_array($editors);
    }

    public function getEditors(): array
    {
        return $this->editors;
    }

    public function hasEditor(string $type): bool
    {
        return isset($this->editors[$type]);
    }

    public function getEditor(string $type): EditorInterface
    {
        if (true === $this->hasEditor($type)) {
            return $this->editors[$type];
        }

        throw new DomainException(\sprintf('There is no editor with %s type', $type));
    }
}
