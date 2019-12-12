<?php

declare(strict_types=1);

namespace MonsieurBiz\SyliusCmsPlugin;

use MonsieurBiz\SyliusCmsPlugin\Application\MonofonyPluginTrait;
use Symfony\Component\HttpKernel\Bundle\Bundle;

final class MonsieurBizSyliusCmsPlugin extends Bundle
{
    use MonofonyPluginTrait;
}
