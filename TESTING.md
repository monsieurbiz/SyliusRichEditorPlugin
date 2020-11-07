# Testing

## Requirements

You'll need:

- PHP 7.4 minimum.
- docker, for the database.
- symfony CLI, to run the local server.
- composer, to install PHP dependencies.
- npm and yarn, to install ui dependencies and build the JS/CSS files.

## Installation

```bash
make install
```

This will run a Sylius app (the one in `tests/Application/`) with the plugin
installed and all Sylius' sample data. It uses the symfony binary.

## Usage

### List all available commands

```bash
make help
```

### Running minimum plugin tests

- PHPUnit

    ```bash
    make test.phpunit
    ```

- PHP CS fixer

    ```bash
    make test.phpcs
    ```

    > Tip: You can fix your code with `make test.phpcs.fix`!

- PHPSpec

    ```bash
    make test.phpspec
    ```

- PHPStan

    ```bash
    make test.phpstan
    ```

> Tip: You can run all tests with `make test.all`!
