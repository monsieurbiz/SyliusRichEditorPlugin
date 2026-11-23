# Testing

## Requirements

You'll need:

- PHP 8.3 for the Sylius test application.
- docker, for the database.
- symfony CLI, to run the local server.
- composer, to install PHP dependencies.
- Node.js 22.13 or later in the 22.x series, with npm and Yarn, to build the UI assets.

## Installation

```bash
make install
```

This will run a Sylius app (the one in `tests/Application/`) with the plugin
installed and all Sylius' sample data. It uses the symfony binary.

The test application and the Flex recipe check use Sylius 2.3.
If `tests/Application` was generated with an earlier Sylius version, move it
aside before running `make install` so the installer can generate the new
configuration. The install resets the local test database and loads fixtures.

The demo shop uses `127.0.0.1` by default. If you use a custom local domain,
set `SYLIUS_FIXTURES_HOSTNAME` to that hostname without a port when running
`make install`.

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
