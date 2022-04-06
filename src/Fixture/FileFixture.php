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

namespace MonsieurBiz\SyliusRichEditorPlugin\Fixture;

use MonsieurBiz\SyliusRichEditorPlugin\Uploader\FixtureFileUploaderInterface;
use Sylius\Bundle\FixturesBundle\Fixture\AbstractFixture;
use Sylius\Bundle\FixturesBundle\Fixture\FixtureInterface;
use Symfony\Component\Config\Definition\Builder\ArrayNodeDefinition;
use Symfony\Component\HttpFoundation\File\UploadedFile;

final class FileFixture extends AbstractFixture implements FixtureInterface
{
    private FixtureFileUploaderInterface $uploader;

    public function __construct(FixtureFileUploaderInterface $uploader)
    {
        $this->uploader = $uploader;
    }

    public function load(array $options): void
    {
        foreach ($options['files'] as $data) {
            $file = new UploadedFile($data['source_path'], basename($data['source_path']));
            $this->uploader->upload($file, $data['target_path']);
        }
    }

    public function getName(): string
    {
        return 'monsieurbiz_rich_editor_file';
    }

    protected function configureOptionsNode(ArrayNodeDefinition $optionsNode): void
    {
        /** @phpstan-ignore-next-line */
        $optionsNode
            ->children()
                ->arrayNode('files')
                    ->arrayPrototype()
                        ->children()
                            ->scalarNode('source_path')->cannotBeEmpty()->end()
                            ->scalarNode('target_path')->cannotBeEmpty()->end()
                        ->end()
                    ->end()
                ->end()
            ->end()
        ;
    }
}
