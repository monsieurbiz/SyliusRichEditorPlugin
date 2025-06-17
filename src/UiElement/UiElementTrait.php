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

use Exception;
use ReturnTypeWillChange;
use Symfony\Contracts\Translation\TranslatorInterface;
use Twig\Environment;

trait UiElementTrait
{
    protected MetadataInterface $metadata;

    protected TranslatorInterface $translator;

    protected bool $ignored = false;

    protected Environment $twig;

    /**
     * @inheritdoc
     */
    public function setMetadata(MetadataInterface $metadata): void
    {
        $this->metadata = $metadata;
    }

    /**
     * @inheritdoc
     */
    public function setTranslator(TranslatorInterface $translator): void
    {
        $this->translator = $translator;
    }

    /**
     * @inheritdoc
     */
    public function setTwigEnvironment(Environment $twig): void
    {
        $this->twig = $twig;
    }

    /**
     * @inheritdoc
     */
    public function getCode(): string
    {
        return $this->metadata->getCode();
    }

    /**
     * @inheritdoc
     */
    public function getAlias(): ?string
    {
        return $this->metadata->getAlias();
    }

    /**
     * @inheritdoc
     */
    public function isEnabled(): bool
    {
        return $this->metadata->isEnabled();
    }

    /**
     * @inheritdoc
     */
    public function getTitle(): string
    {
        /** @var string */
        return $this->metadata->getParameter('title');
    }

    /**
     * @inheritdoc
     */
    public function getDescription(): string
    {
        /** @var string */
        return $this->metadata->getParameter('description');
    }

    /**
     * @inheritdoc
     */
    public function getIcon(): string
    {
        /** @var string */
        return $this->metadata->getParameter('icon');
    }

    /**
     * @inheritdoc
     */
    public function getWireframe(): string
    {
        /** @var string */
        return $this->metadata->getParameter('wireframe');
    }

    /**
     * @inheritdoc
     */
    public function getWireframeAsHtml(): string
    {
        try {
            $code = $this->getWireframe();

            if (empty($code)) {
                return '';
            }

            return $this->twig->render('@MonsieurBizSyliusRichEditorPlugin/admin/wireframe.html.twig', ['wireframeCode' => $code]);
        } catch (Exception $e) {
            return '';
        }
    }

    /**
     * @inheritdoc
     */
    public function getIconAsHtml(): string
    {
        try {
            $icon = $this->getIcon();

            if (empty($icon)) {
                return '';
            }

            return $this->twig->render('@MonsieurBizSyliusRichEditorPlugin/admin/icon.html.twig', ['icon' => $icon]);
        } catch (Exception $e) {
            return '';
        }
    }

    /**
     * @inheritdoc
     */
    public function getFormClass(): string
    {
        return $this->metadata->getClass('form');
    }

    /**
     * @inheritdoc
     */
    public function getAdminFormTemplate(): string
    {
        return $this->metadata->getTemplate('admin_form');
    }

    /**
     * @inheritdoc
     */
    public function getAdminRenderTemplate(): string
    {
        return $this->metadata->getTemplate('admin_render');
    }

    /**
     * @inheritdoc
     */
    public function getFrontRenderTemplate(): string
    {
        return $this->metadata->getTemplate('front_render');
    }

    public function ignore(): void
    {
        $this->ignored = true;
    }

    /**
     * @inheritdoc
     */
    #[ReturnTypeWillChange]
    public function jsonSerialize(): mixed
    {
        return [
            'code' => $this->getCode(),
            'description' => $this->translator->trans($this->getDescription()),
            'icon' => $this->getIcon(),
            'iconHtml' => $this->getIconAsHtml(),
            'wireframe' => $this->getWireframe(),
            'wireframeHtml' => $this->getWireframeAsHtml(),
            'title' => $this->translator->trans($this->getTitle()),
            'ignored' => $this->ignored,
            'tags' => $this->metadata->getTags(),
            'enabled' => $this->isEnabled(),
        ];
    }
}
