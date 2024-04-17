<?php declare(strict_types=1);
echo "<?php\n"; ?>
declare(strict_types=1);

namespace <?php echo $namespace; ?>;

use MonsieurBiz\SyliusRichEditorPlugin\Attribute\AsUiElement;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;

#[AsUiElement(
    code: '<?php echo $code; ?>',
    icon: '<?php echo $icon; ?>',
    tags: <?php echo $tags; ?>,
)]
class <?php echo $class_name; ?> extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        // Build your form here
    }
}
