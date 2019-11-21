<?php

declare(strict_types=1);

namespace Monsieurbiz\SyliusCmsPlugin\EventListener\Admin;

use Monsieurbiz\SyliusCmsPlugin\UiElement\Factory;
use Sonata\BlockBundle\Event\BlockEvent;
use Sonata\BlockBundle\Model\Block;

class JavascriptBlock
{
    /** @var string */
    private $template;

    /** @var Factory */
    private $factory;

    public function __construct(Factory $factory, string $template)
    {
        $this->template = $template;
        $this->factory = $factory;
    }

    public function onBlockEvent(BlockEvent $event): void
    {
        $block = new Block();
        $block->setId(uniqid('', true));
        $block->setSettings(array_replace($event->getSettings(), [
            'template' => $this->template,
            'attr' => ['ui_elements' => $this->factory->getUiElements()]
        ]));
        $block->setType('sonata.block.service.template');

        $event->addBlock($block);
    }
}
