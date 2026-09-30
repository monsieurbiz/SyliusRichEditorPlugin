# Upgrade from v3.1 to v3.2

## Fixture file storage: Gaufrette replaced by Flysystem

Gaufrette is fully removed from the plugin. Files copied by the
`monsieurbiz_rich_editor_file` fixture are stored through the Flysystem storage
`monsieurbiz_rich_editor_fixture_file` (provided by `league/flysystem-bundle`, already
shipped with Sylius 2).

### What changed

- The plugin no longer declares or reads any `knp_gaufrette` configuration. The following keys are ignored:
  - `knp_gaufrette.adapters.monsieurbiz_rich_editor_fixture_file`
  - `knp_gaufrette.filesystems.monsieurbiz_rich_editor_fixture_file`
- The service `gaufrette.monsieurbiz_rich_editor_fixture_file_filesystem` no longer exists.
- `MonsieurBiz\SyliusRichEditorPlugin\Uploader\FixtureFileUploader` now expects a
  `League\Flysystem\FilesystemOperator` instead of a `Gaufrette\FilesystemInterface`.
  It is autowired with the `monsieurbiz_rich_editor_fixture_file` storage.

The default behavior is unchanged: files are still written to `%sylius_core.public_dir%/media`.

### What you need to do

If you did not override the Gaufrette adapter or filesystem, there is nothing to do.

If you did, move your override to the Flysystem storage. For example, this configuration:

```yaml
knp_gaufrette:
    adapters:
        monsieurbiz_rich_editor_fixture_file:
            local:
                directory: '%kernel.project_dir%/public/my-media'
                create: true
```

becomes:

```yaml
flysystem:
    storages:
        monsieurbiz_rich_editor_fixture_file:
            adapter: 'local'
            options:
                directory: '%kernel.project_dir%/public/my-media'
            directory_visibility: 'public'
```

If you injected `gaufrette.monsieurbiz_rich_editor_fixture_file_filesystem` in your own services,
inject `monsieurbiz_rich_editor_fixture_file` instead and use the Flysystem API
(`fileExists()`, `write()`, `delete()`, …).

If you decorated or replaced `FixtureFileUploader`, update its constructor to receive a
`League\Flysystem\FilesystemOperator`.

You can then remove `knplabs/knp-gaufrette-bundle` from your project if nothing else uses it.
