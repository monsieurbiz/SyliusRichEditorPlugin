# Upgrade from v1 to v2

## Routing config
The contents of `config/routes/monsieurbiz_sylius_rich_editor.yaml` changed:
```diff
@@ -1,2 +1,3 @@
-monsieur_biz_rich_editor_plugin:
-    resource: "@MonsieurBizSyliusRichEditorPlugin/Resources/config/routing.yaml"
+monsieurbiz_richeditor_admin:
+    resource: "@MonsieurBizSyliusRichEditorPlugin/Resources/config/routing/admin.yaml"
+    prefix: /%sylius_admin.path_name%
```

## Twig function

The name of the Twig function changed from `mbiz_rich_editor_render` to `monsieurbiz_richeditor_render_element`,
so make sure to update your templates.

## JavaScript

The JavaScript was refactored, now it works everywhere. You shouldn't have to change anything, the bundle system will take care of it.  
But if you made some changes to the previous JS, you'll have to apply them on the new JS. It is a complete rewrite.

## UI elements

The definition of UI elements has changed, you'll have to change some things:

- Removing the old UIElements objects
  extending `\MonsieurBiz\SyliusRichEditorPlugin\UiElement\AbstractUiElement`
  or implementing `\MonsieurBiz\SyliusRichEditorPlugin\UiElement\UiElementInterface`).  
  You should keep the Form only.

- Adding a new configuration with your elements:  
  See the definition by using `./bin/console config:dump-reference monsieurbiz_sylius_richeditor`.  
  Use the old Form here, it should work! Use the old `type` as an `alias` in the configuration
  to keep backward compatibility.  
  Use the old template as well for the frontend renderer. And write a new admin renderer the same way.

## Removed Product and Taxon elements

We removed Product and Taxon elements because we want to keep it simple for this plugin.  
These elements will be provided later in another plugin, which will be dedicated to fancy Ui Elements.  
Today you'll have to implement them manually on your project if you need them.
