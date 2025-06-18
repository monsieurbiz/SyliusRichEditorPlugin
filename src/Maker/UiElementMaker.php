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

namespace MonsieurBiz\SyliusRichEditorPlugin\Maker;

use Symfony\Bundle\MakerBundle\ConsoleStyle;
use Symfony\Bundle\MakerBundle\DependencyBuilder;
use Symfony\Bundle\MakerBundle\Generator;
use Symfony\Bundle\MakerBundle\InputConfiguration;
use Symfony\Bundle\MakerBundle\Maker\AbstractMaker;
use Symfony\Bundle\MakerBundle\Str;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Form\AbstractType;
use Webmozart\Assert\Assert;

final class UiElementMaker extends AbstractMaker
{
    public static function getCommandName(): string
    {
        return 'make:ui-element';
    }

    /**
     * @SuppressWarnings(PHPMD.UnusedFormalParameter)
     */
    public function configureCommand(Command $command, InputConfiguration $inputConfig): void
    {
        $command
            ->addArgument('code', InputArgument::OPTIONAL, 'The code of the UI Element (e.g. <fg=yellow>my_ui_element</>)')
            ->addArgument('icon', InputArgument::OPTIONAL, 'The semantic icon code for the UI Element (e.g. <fg=yellow>map pin</>)', 'square')
            ->addArgument('code_prefix', InputArgument::OPTIONAL, 'The code prefix for the UI Element (e.g. <fg=yellow>app</>)', 'app')
            ->setDescription('Creates a new UI Element FormType and templates')
        ;
    }

    public function generate(InputInterface $input, ConsoleStyle $io, Generator $generator): void
    {
        $code = $input->getArgument('code');
        $icon = $input->getArgument('icon');
        $codePrefix = $input->getArgument('code_prefix');
        Assert::string($code);
        $name = Str::asCamelCase($code);
        $uiElementFormClassNameDetails = $generator->createClassNameDetails(
            $name,
            'Form\\Type\\UiElement\\',
            'Type'
        );
        $generator->generateClass(
            $uiElementFormClassNameDetails->getFullName(),
            __DIR__ . '/../Resources/skeleton/UiElementFormType.tpl.php',
            [
                'code' => \sprintf('%s.%s', $codePrefix, $code),
                'icon' => $icon,
                'tags' => json_encode([]),
            ]
        );

        // Generate templates
        $generator->generateTemplate(
            \sprintf('admin/ui_element/%s.html.twig', $code),
            __DIR__ . '/../Resources/skeleton/UiElementTemplate.tpl.php',
            [
                'code' => $code,
            ]
        );
        $generator->generateTemplate(
            \sprintf('shop/ui_element/%s.html.twig', $code),
            __DIR__ . '/../Resources/skeleton/UiElementTemplate.tpl.php',
            [
                'code' => $code,
            ]
        );

        $generator->writeChanges();

        $this->writeSuccessMessage($io);
        $io->text([
            'Next: Open your new UI Element FormType and templates, and start customizing it.',
        ]);
    }

    public function configureDependencies(DependencyBuilder $dependencies): void
    {
        $dependencies->addClassDependency(
            AbstractType::class,
            'monsieurbiz/sylius-rich-editor-plugin'
        );
    }
}
