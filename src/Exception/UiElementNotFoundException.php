<?php
declare(strict_types=1);

namespace MonsieurBiz\SyliusRichEditorPlugin\Exception;

final class UiElementNotFoundException extends \Exception
{
    /**
     * UiElementNotFoundException constructor.
     *
     * @param string $type
     * @param \Exception|null $previous
     */
    public function __construct(string $type, ?\Exception $previous = null)
    {
        parent::__construct(sprintf('UiElement with type "%s" could not be found!', $type), 0, $previous);
    }
}
