# Testing

## Requirements

You'll need:

- docker
- symfony CLI
- composer
- npm and yarn

## Installation

You can change the environment by setting the `APP_ENV` (`export APP_ENV=test` as example).

From the plugin root directory, run the following commands:

```bash
make install
```

To be able to setup the plugin's database, remember to configure your database credentials in `tests/Application/.env` 
and `tests/Application/.env.test`. You can also add custom configuration in `tests/Application/.env.test.local`.

If you want to run the Sylius app as well, go to the "Opening Sylius with the plugin" section below.

## Usage

### Some help

```bash
make help
```

### Running plugin tests

  - PHPUnit

    ```bash
    make phpunit
    ```

  - PHPSpec

    ```bash
    make phpunit
    ```
    
  - PHPStan
  
    ```bash
    make phpstan
    ```

### Opening Sylius with the plugin

- Using `test` environment:

    ```bash
    APP_ENV=test make bazinga
    ```
    
- Using `dev` environment:

    ```bash
    APP_ENV=dev make bazinga
    ```
