<?php

declare(strict_types=1);

namespace MonsieurBiz\SyliusRichEditorPlugin\EventListener\Admin;

use MonsieurBiz\SyliusRichEditorPlugin\Factory\UiElementFactory;
use Sonata\BlockBundle\Event\BlockEvent;
use Sonata\BlockBundle\Model\Block;
use Twig\Environment;

class AppBlock
{
    /** @var string */
    private $template;

    /** @var UiElementFactory */
    private $uiElementFactory;

    /** @var Environment */
    private $environment;

    /**
     * AppBlock constructor.
     *
     * @param UiElementFactory $uiElementFactory
     * @param string $template
     * @param Environment $environment
     */
    public function __construct(UiElementFactory $uiElementFactory, string $template, Environment $environment)
    {
        $this->template = $template;
        $this->uiElementFactory = $uiElementFactory;
        $this->environment = $environment;
    }

    /**
     * @param BlockEvent $event
     */
    public function onBlockEvent(BlockEvent $event): void
    {
        $block = new Block();
        $block->setId(uniqid('', true));
        $block->setSettings(array_replace($event->getSettings(), [
            'template' => $this->template,
            'attr' => ['ui_elements' => $this->uiElementFactory->getUiElements(), 'debug' => $this->environment->isDebug()]
        ]));
        $block->setType('sonata.block.service.template');

        $event->addBlock($block);
    }
}
