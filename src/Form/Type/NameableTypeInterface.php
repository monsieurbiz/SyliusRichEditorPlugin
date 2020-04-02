<?php
declare(strict_types=1);

namespace MonsieurBiz\SyliusRichEditorPlugin\Form\Type;

use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;

interface NameableTypeInterface
{

    /**
     * @return string
     */
    public function getUiElementNameName(): string;

}
