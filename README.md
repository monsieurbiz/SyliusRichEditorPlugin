# Rich Editor Plugin

A plugin which adds a pretty cool rich editor for CMS purpose to your app.

## Setup

Require the plugin

`composer require monsieurbiz/sylius-rich-editor-plugin`

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
