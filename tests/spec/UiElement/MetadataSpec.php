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

namespace spec\MonsieurBiz\SyliusRichEditorPlugin\UiElement;

use InvalidArgumentException;
use MonsieurBiz\SyliusRichEditorPlugin\UiElement\Metadata;
use MonsieurBiz\SyliusRichEditorPlugin\UiElement\MetadataInterface;
use PhpSpec\ObjectBehavior;

class MetadataSpec extends ObjectBehavior
{
    public const CODE = 'app.amigo';

    public const PARAMETERS = [
        'alias' => 'amigo',
        'title' => 'amigo.title',
        'description' => 'amigo.description',
        'icon' => 'html5',
        'classes' => [
            'form' => 'MonsieurBiz\SyliusRichEditorPlugin\Form\Type\UiElement\HtmlType',
        ],
        'templates' => [
            'admin_render' => '@MonsieurBizSyliusRichEditorPlugin/admin/ui_element/html.html.twig',
            'front_render' => '@MonsieurBizSyliusRichEditorPlugin/shop/ui_element/html.html.twig',
        ],
    ];

    public function it_is_initializable(): void
    {
        $this->shouldHaveType(Metadata::class);
        $this->shouldHaveType(MetadataInterface::class);
    }

    public function let(): void
    {
        $this->beConstructedThrough('fromCodeAndConfiguration', [
            self::CODE,
            self::PARAMETERS,
        ]);
    }

    public function it_gives_you_a_singleton(): void
    {
        $this::fromCodeAndConfiguration('app.yep', self::PARAMETERS)
            ->shouldReturnAnInstanceOf(MetadataInterface::class)
        ;

        $this->shouldThrow(InvalidArgumentException::class)->during(
            'fromCodeAndConfiguration',
            ['app.yep', []]
        );

        $this->shouldThrow(InvalidArgumentException::class)->during(
            'fromCodeAndConfiguration',
            ['app.yep.bam', self::PARAMETERS]
        );

        $this->shouldThrow(InvalidArgumentException::class)->during(
            'fromCodeAndConfiguration',
            ['app', self::PARAMETERS]
        );
    }

    public function it_gives_back_the_code(): void
    {
        $this->getCode()->shouldReturn('app.amigo');
        $this->getCamelCasedCode()->shouldReturn('appAmigo');
    }

    public function it_gives_back_the_alias(): void
    {
        $this->getAlias()->shouldReturn('amigo');
    }

    public function it_gives_back_any_parameter(): void
    {
        $this->getParameter('alias')->shouldReturn('amigo');
        $this->getParameter('description')->shouldReturn('amigo.description');
        $this->getParameter('templates')->shouldReturn(self::PARAMETERS['templates']);
    }

    public function it_gives_back_all_parameters(): void
    {
        $this->getParameters()->shouldReturn(self::PARAMETERS);
    }

    public function it_gives_back_any_class_name(): void
    {
        $this->getClass('form')->shouldReturn('MonsieurBiz\SyliusRichEditorPlugin\Form\Type\UiElement\HtmlType');
        $this->shouldThrow(InvalidArgumentException::class)->during(
            'getClass',
            ['nope']
        );
    }

    public function it_tells_you_if_a_class_is_available(): void
    {
        $this->hasClass('form')->shouldReturn(true);
        $this->hasClass('nope')->shouldReturn(false);
    }

    public function it_gives_back_any_template(): void
    {
        $this->getTemplate('admin_render')->shouldReturn('@MonsieurBizSyliusRichEditorPlugin/admin/ui_element/html.html.twig');
        $this->getTemplate('front_render')->shouldReturn('@MonsieurBizSyliusRichEditorPlugin/shop/ui_element/html.html.twig');
        $this->shouldThrow(InvalidArgumentException::class)->during(
            'getTemplate',
            ['nope']
        );
    }

    public function it_tells_you_if_a_template_is_available(): void
    {
        $this->hasTemplate('admin_render')->shouldReturn(true);
        $this->hasTemplate('nope')->shouldReturn(false);
    }

    public function it_gives_its_service_name(): void
    {
        $this->getServiceId('foo')->shouldReturn('app.foo.amigo');
    }

    public function it_gives_empty_tags(): void
    {
        $this->getTags()->shouldReturn([]);
    }

    public function it_gives_tags(): void
    {
        $parameters = self::PARAMETERS;
        $tags = ['foo', 'bar'];
        $parameters['tags'] = $tags;
        $this->beConstructedThrough('fromCodeAndConfiguration', [
            self::CODE,
            $parameters,
        ]);
        $this->getTags()->shouldReturn($tags);
    }
}
