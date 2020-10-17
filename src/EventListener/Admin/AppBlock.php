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

namespace MonsieurBiz\SyliusRichEditorPlugin\EventListener\Admin;

use Sonata\BlockBundle\Event\BlockEvent;
use Sonata\BlockBundle\Model\Block;
use Twig\Environment;

class AppBlock
{
    /** @var string */
    private $template;

    /** @var Environment */
    private $environment;

    /**
     * AppBlock constructor.
     *
     * @param string $template
     * @param Environment $environment
     */
    public function __construct(string $template, Environment $environment)
    {
        $this->template = $template;
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
            'attr' => ['debug' => $this->environment->isDebug()],
        ]));
        $block->setType('sonata.block.service.template');

        $event->addBlock($block);
    }
}
