<?php

declare(strict_types=1);

namespace Monsieurbiz\SyliusCmsPlugin;

use Monsieurbiz\SyliusCmsPlugin\Application\MonofonyPluginTrait;
use Symfony\Component\HttpKernel\Bundle\Bundle;

final class MonsieurbizSyliusCmsPlugin extends Bundle
{
    use MonofonyPluginTrait;
}
