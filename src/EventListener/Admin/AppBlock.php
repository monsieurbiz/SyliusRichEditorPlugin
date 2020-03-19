<?php

declare(strict_types=1);

namespace MonsieurBiz\SyliusRichEditorPlugin\EventListener\Admin;

use MonsieurBiz\SyliusRichEditorPlugin\Factory\UiElementFactory;
use Sonata\BlockBundle\Event\BlockEvent;
use Sonata\BlockBundle\Model\Block;
use \Twig_Environment;

class AppBlock
{
    /** @var string */
    private $template;

    /** @var UiElementFactory */
    private $uiElementFactory;

    /** @var Twig_Environment */
    private $twigEnv;

    /**
     * AppBlock constructor.
     *
     * @param UiElementFactory $uiElementFactory
     * @param string $template
     * @param Twig_Environment $twigEnv
     */
    public function __construct(UiElementFactory $uiElementFactory, string $template, Twig_Environment $twigEnv)
    {
        $this->template = $template;
        $this->uiElementFactory = $uiElementFactory;
        $this->twigEnv = $twigEnv;
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
            'attr' => ['ui_elements' => $this->uiElementFactory->getUiElements(), 'debug' => $this->twigEnv->isDebug()]
        ]));
        $block->setType('sonata.block.service.template');

        $event->addBlock($block);
    }
}
