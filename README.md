# Documentation for MonsieurBizSearchPlugin

A CMS plugin for Sylius

## Setup

Require the plugin

`composer require monsieurbiz/sylius-cms-plugin`

Change your `config/bundles.php` file to add the line for the plugin : 

```php
<?php

return [
    //..
    MonsieurBiz\SyliusCmsPlugin\MonsieurBizSyliusCmsPlugin::class => ['all' => true],
];
```

Then create the config file in config/packages/monsieurbiz_cms_plugin.yaml :

```yaml
imports:
  - { resource: "@MonsieurBizSyliusCmsPlugin/Resources/config/config.yaml" }
```
