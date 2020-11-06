<?php

namespace spec\MonsieurBiz\SyliusRichEditorPlugin\UiElement;

use InvalidArgumentException;
use MonsieurBiz\SyliusRichEditorPlugin\UiElement\Metadata;
use MonsieurBiz\SyliusRichEditorPlugin\UiElement\MetadataInterface;
use PhpSpec\ObjectBehavior;

class MetadataSpec extends ObjectBehavior
{
    const CODE = 'app.amigo';
    const PARAMETERS = [
        'alias' => 'amigo',
        'title' => 'amigo.title',
        'description' => 'amigo.description',
        'icon' => 'html5',
        'classes' => [
            'form' => 'MonsieurBiz\SyliusRichEditorPlugin\Form\Type\UiElement\HtmlType',
        ],
        'templates' => [
            'admin_render' => '@MonsieurBizSyliusRichEditorPlugin/Admin/UiElement/html.html.twig',
            'front_render' => '@MonsieurBizSyliusRichEditorPlugin/Shop/UiElement/html.html.twig',
        ],
    ];

    function it_is_initializable()
    {
        $this->shouldHaveType(Metadata::class);
        $this->shouldHaveType(MetadataInterface::class);
    }

    function let()
    {
        $this->beConstructedThrough('fromCodeAndConfiguration', [
            self::CODE,
            self::PARAMETERS,
        ]);
    }

    function it_gives_you_a_singleton()
    {
        $this::fromCodeAndConfiguration('app.yep', self::PARAMETERS)
            ->shouldReturnAnInstanceOf(MetadataInterface::class);

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

    function it_gives_back_the_code()
    {
        $this->getCode()->shouldReturn('app.amigo');
        $this->getCamelCasedCode()->shouldReturn('appAmigo');
    }

    function it_gives_back_the_alias()
    {
        $this->getAlias()->shouldReturn('amigo');
    }

    function it_gives_back_any_parameter()
    {
        $this->getParameter('alias')->shouldReturn('amigo');
        $this->getParameter('description')->shouldReturn('amigo.description');
        $this->getParameter('templates')->shouldReturn(self::PARAMETERS['templates']);
    }

    function it_gives_back_all_parameters()
    {
        $this->getParameters()->shouldReturn(self::PARAMETERS);
    }

    function it_gives_back_any_class_name()
    {
        $this->getClass('form')->shouldReturn('MonsieurBiz\SyliusRichEditorPlugin\Form\Type\UiElement\HtmlType');
        $this->shouldThrow(InvalidArgumentException::class)->during(
            'getClass',
            ['nope']
        );
    }

    function it_tells_you_if_a_class_is_available()
    {
        $this->hasClass('form')->shouldReturn(true);
        $this->hasClass('nope')->shouldReturn(false);
    }

    function it_gives_back_any_template()
    {
        $this->getTemplate('admin_render')->shouldReturn('@MonsieurBizSyliusRichEditorPlugin/Admin/UiElement/html.html.twig');
        $this->getTemplate('front_render')->shouldReturn('@MonsieurBizSyliusRichEditorPlugin/Shop/UiElement/html.html.twig');
        $this->shouldThrow(InvalidArgumentException::class)->during(
            'getTemplate',
            ['nope']
        );
    }

    function it_tells_you_if_a_template_is_available()
    {
        $this->hasTemplate('admin_render')->shouldReturn(true);
        $this->hasTemplate('nope')->shouldReturn(false);
    }

    function it_gives_its_service_name()
    {
        $this->getServiceId('foo')->shouldReturn('app.foo.amigo');
    }

}
