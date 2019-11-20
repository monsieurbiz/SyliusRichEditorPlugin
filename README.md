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
    Monsieurbiz\SyliusCmsPlugin\MonsieurbizSyliusCmsPlugin::class => ['all' => true],
];
```
