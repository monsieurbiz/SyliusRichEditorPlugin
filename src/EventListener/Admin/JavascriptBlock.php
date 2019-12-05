<?php

declare(strict_types=1);

namespace Monsieurbiz\SyliusCmsPlugin\EventListener\Admin;

use Monsieurbiz\SyliusCmsPlugin\UiElement\Factory;
use Sonata\BlockBundle\Event\BlockEvent;
use Sonata\BlockBundle\Model\Block;
use \Twig_Environment;

class JavascriptBlock
{
    /** @var string */
    private $template;

    /** @var Factory */
    private $factory;

    /** @var Twig_Environment */
    private $twigEnv;

    public function __construct(Factory $factory, string $template, Twig_Environment $twigEnv)
    {
        $this->template = $template;
        $this->factory = $factory;
        $this->twigEnv = $twigEnv;
    }

    public function onBlockEvent(BlockEvent $event): void
    {
        $block = new Block();
        $block->setId(uniqid('', true));
        $block->setSettings(array_replace($event->getSettings(), [
            'template' => $this->template,
            'attr' => ['ui_elements' => $this->factory->getUiElements(), 'debug' => $this->twigEnv->isDebug()]
        ]));
        $block->setType('sonata.block.service.template');

        $event->addBlock($block);
    }
}
