<p align="center">
    <a href="https://monsieurbiz.com" target="_blank">
        <img src="https://monsieurbiz.com/logo.png" width="250px" />
    </a>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <a href="https://sylius.com" target="_blank">
        <img src="https://demo.sylius.com/assets/shop/img/logo.png" width="200px" />
    </a>
</p>

<h1 align="center">Rich Editor</h1>

[![Rich Editor Plugin license](https://img.shields.io/github/license/monsieurbiz/SyliusRichEditorPlugin)](https://github.com/monsieurbiz/SyliusRichEditorPlugin/blob/master/LICENSE.txt)
[![Build Status](https://travis-ci.com/monsieurbiz/SyliusRichEditorPlugin.svg?branch=master)](https://travis-ci.com/monsieurbiz/SyliusRichEditorPlugin)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/monsieurbiz/SyliusRichEditorPlugin/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/monsieurbiz/SyliusRichEditorPlugin/?branch=master)


This plugin add a rich editor on fields to be able to drag and drop elements and edit it.

## Installation

```bash
composer require monsieurbiz/sylius-rich-editor-plugin
```

Change your `config/bundles.php` file to add the line for the plugin : 

```php
<?php

return [
    //..
    MonsieurBiz\SyliusRichEditorPlugin\MonsieurBizSyliusRichEditorPlugin::class => ['all' => true],
];
```

Then create the config file in `config/packages/monsieurbiz_rich_editor_plugin.yaml` :

```yaml
imports:
  - { resource: "@MonsieurBizSyliusRichEditorPlugin/Resources/config/config.yaml" }
```

## Contributing

You can open an issue or a Pull Request if you want! 😘  
Thank you!
