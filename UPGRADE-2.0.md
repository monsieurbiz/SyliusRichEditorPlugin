# Upgrade from v1.X.X to 2.X.X

## Plugin Improvements

In the 2.x we improved two things:

- the javascript: it now works everywhere.
- the UiElements: their definition has changed.

For the JavaScript you should have nothing to do, the bundle system will take care of it.

For the UiElements you will need to do some changes:

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

We removed Product and Taxon elements because we want to keep a very simple plugin for the Rich Editor.  
These elements will be available later in another plugin which will add many UI Elements for your store.  
But actually you have to implements its manually in your project if you need.
