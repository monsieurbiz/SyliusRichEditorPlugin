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

namespace MonsieurBiz\SyliusRichEditorPlugin\Form\Type;

use MonsieurBiz\SyliusRichEditorPlugin\WysiwygEditor\EditorCollectionInterface;
use MonsieurBiz\SyliusRichEditorPlugin\WysiwygEditor\EditorInterface;
use MonsieurBiz\SyliusRichEditorPlugin\WysiwygEditor\SunEditor;
use Sylius\Component\Locale\Context\LocaleContextInterface;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormView;
use Symfony\Component\OptionsResolver\Options;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Serializer\Encoder\EncoderInterface;

class WysiwygType extends TextareaType
{
    private const DEFAULT_TOOLBAR_TYPE = EditorInterface::TOOLBAR_TYPE_BASIC;

    private const DEFAULT_EDITOR_TYPE = SunEditor::TYPE;

    private const DEFAULT_EDITOR_HEIGHT = 300;

    public const DEFAULT_LOCALE = 'en';

    public function __construct(
        private EncoderInterface $encoder,
        private EditorCollectionInterface $editorCollection,
        private LocaleContextInterface $localeContext,
    ) {
    }

    /**
     * @inheritdoc
     */
    public function buildView(FormView $view, FormInterface $form, array $options): void
    {
        if (!isset($view->vars['attr']['class'])) {
            $view->vars['attr']['class'] = 'wysiwyg-enabled';
        } else {
            $view->vars['attr']['class'] .= ' wysiwyg-enabled';
        }

        $view->vars['attr'] = array_merge($view->vars['attr'], $this->getDataValues($options));

        parent::buildView($view, $form, $options);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);

        $locale = explode('_', $this->localeContext->getLocaleCode())[0] ?? self::DEFAULT_LOCALE;
        $resolver->setDefaults([
            'editor_type' => self::DEFAULT_EDITOR_TYPE,
            'editor_height' => self::DEFAULT_EDITOR_HEIGHT,
            'editor_locale' => $locale,
            'editor_toolbar_type' => self::DEFAULT_TOOLBAR_TYPE,
            'editor_toolbar_buttons' => null,
            'editor_custom_config' => null,
        ]);

        $resolver->setAllowedValues('editor_toolbar_type', [
            EditorInterface::TOOLBAR_TYPE_MINIMAL,
            EditorInterface::TOOLBAR_TYPE_BASIC,
            EditorInterface::TOOLBAR_TYPE_FULL,
            EditorInterface::TOOLBAR_TYPE_CUSTOM,
        ]);

        $resolver->setAllowedTypes('editor_type', 'string');
        $resolver->setAllowedTypes('editor_height', 'int');
        $resolver->setAllowedTypes('editor_locale', 'string');
        $resolver->setAllowedTypes('editor_toolbar_type', 'string');
        $resolver->setAllowedTypes('editor_toolbar_buttons', ['null', 'array']);
        $resolver->setAllowedTypes('editor_custom_config', ['null', 'array']);

        $resolver->setNormalizer('editor_toolbar_buttons', function (Options $options, ?array $value): string {
            $editor = $this->editorCollection->getEditor($options['editor_type']);

            return match ($options['editor_toolbar_type']) {
                EditorInterface::TOOLBAR_TYPE_MINIMAL => $this->encoder->encode($editor->getMinimalButtons(), 'json'),
                EditorInterface::TOOLBAR_TYPE_BASIC => $this->encoder->encode($editor->getBasicButtons() ?? [], 'json'),
                EditorInterface::TOOLBAR_TYPE_FULL => $this->encoder->encode($editor->getFullButtons() ?? [], 'json'),
                default => $this->encoder->encode($value ?? [], 'json'),
            };
        });

        $resolver->setNormalizer('editor_custom_config', function (Options $options, ?array $value): string {
            return $this->encoder->encode($value ?? [], 'json');
        });
    }

    private function getDataValues(array $options): array
    {
        return [
            'data-component' => 'wysiwyg-editor',
            'data-editor-type' => $options['editor_type'],
            'data-editor-height' => $options['editor_height'],
            'data-editor-locale' => $options['editor_locale'],
            'data-editor-buttons' => $options['editor_toolbar_buttons'],
            'data-editor-custom-config' => $options['editor_custom_config'],
        ];
    }
}
