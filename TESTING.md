# Testing

## Installation

1. To be able to run yarn build correctly, create symlink for `node_modules` :

    ```bash
    ln -s tests/Application/node_modules node_modules
    ```

2. From the plugin root directory, run the following commands:

    ```bash
    $ (cd tests/Application && yarn install)
    $ (cd tests/Application && yarn build)
    $ (cd tests/Application && bin/console assets:install public -e test)
    
    $ (cd tests/Application && bin/console doctrine:database:create -e test)
    $ (cd tests/Application && bin/console doctrine:schema:create -e test)
    ```

To be able to setup the plugin's database, remember to configure your database credentials in `tests/Application/.env` 
and `tests/Application/.env.test`. You can also add custom configuration in `tests/Application/.env.test.local`.

## Usage

### Running plugin tests

  - PHPUnit

    ```bash
    $ vendor/bin/phpunit
    ```

  - PHPSpec

    ```bash
    $ vendor/bin/phpspec run
    ```
    
  - PHPStan
  
    ```bash
    $ vendor/bin/phpstan analyse src
    ```

### Opening Sylius with the plugin

- Using `test` environment:

    ```bash
    $ (cd tests/Application && bin/console sylius:fixtures:load -e test)
    $ (cd tests/Application && bin/console server:run -d public -e test)
    ```
    
- Using `dev` environment:

    ```bash
    $ (cd tests/Application && bin/console sylius:fixtures:load -e dev)
    $ (cd tests/Application && bin/console server:run -d public -e dev)
    ```
