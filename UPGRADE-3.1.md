# Upgrade from v3.0 to v3.1

- Template paths are replaced by snake case in the attribute and maker to match with the new naming convention in Sylius:
  - `Admin/UiElement/` is now `admin/ui_element/`
  - `Shop/UiElement/` is now `shop/ui_element/`
- All template paths in the plugin are updated to match the new naming convention:
  - `Admin/` is now `admin/`
  - `Admin/UiElement/` is now `admin/ui_element/`
  - `Admin/formContainer.html.twig` is now `admin/form_container.html.twig`
  - `Form/` is now `form/`
  - `Icon/Ux` is now `icon/ux/`
  - `Shop/` is now `shop/`
  - `Shop/UiElement/` is now `shop/ui_element/`
  - `Wireframe/` is now `wireframe/`
