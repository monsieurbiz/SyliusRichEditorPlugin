.DEFAULT_GOAL := help
SHELL=/bin/bash
APP_DIR=tests/Application
SYMFONY=cd ${APP_DIR} && symfony
COMPOSER=symfony composer
CONSOLE=${SYMFONY} console
export COMPOSE_PROJECT_NAME=rich-editor
COMPOSE=docker-compose
YARN=yarn
PHPSTAN=symfony php vendor/bin/phpstan
PHPUNIT=symfony php vendor/bin/phpunit
PHPSPEC=symfony php vendor/bin/phpspec

###
### DEVELOPMENT
### ¯¯¯¯¯¯¯¯¯¯¯

install: platform sylius ## Install the plugin
.PHONY: install

up: docker.up server.start ## Up the project (start docker, start symfony server)
stop: server.stop docker.stop ## Stop the project (stop docker, stop symfony server)
down: server.stop docker.down ## Down the project (removes docker containers, stop symfony server)

reset: docker.down ## Stop docker and remove dependencies
	rm -rf ${APP_DIR}/node_modules ${APP_DIR}/yarn.lock
	rm -rf vendor composer.lock
.PHONY: reset

dependencies: vendor node_modules ## Setup the dependencies
.PHONY: dependencies

.php-version: .php-version.dist
	cp .php-version.dist .php-version
	(cd ${APP_DIR} && ln -sf ../../.php-version)

vendor: composer.lock ## Install the PHP dependencies using composer
ifdef GITHUB_ACTIONS
	${COMPOSER} install --prefer-dist
else
	${COMPOSER} install --prefer-source
endif

composer.lock: composer.json
ifdef GITHUB_ACTIONS
	${COMPOSER} update --prefer-dist
else
	${COMPOSER} update --prefer-source
endif

yarn.install: ${APP_DIR}/yarn.lock

${APP_DIR}/yarn.lock:
	ln -sf ${APP_DIR}/node_modules node_modules
	cd ${APP_DIR} && ${YARN} install && ${YARN} build
	${YARN} install
	${YARN} encore prod

node_modules: ${APP_DIR}/node_modules ## Install the Node dependencies using yarn

${APP_DIR}/node_modules: yarn.install

###
### TESTS
### ¯¯¯¯¯

test.all: test.composer test.phpstan test.phpunit test.phpspec test.phpcs test.yaml test.schema test.twig ## Run all tests in once

test.composer: ## Validate composer.json
	${COMPOSER} validate --strict

test.phpstan: ## Run PHPStan
	${PHPSTAN} analyse -c phpstan.neon src/

test.phpunit: ## Run PHPUnit
	${PHPUNIT}

test.phpspec: ## Run PHPSpec
	${PHPSPEC} run

test.phpcs: ## Run PHP CS Fixer in dry-run
	${COMPOSER} run -- phpcs --dry-run -v

test.phpcs.fix: ## Run PHP CS Fixer and fix issues if possible
	${COMPOSER} run -- phpcs -v

test.container: ## Lint the symfony container
	${CONSOLE} lint:container

test.yaml: ## Lint the symfony Yaml files
	${CONSOLE} lint:yaml ../../recipes ../../src/Resources/config

test.schema: ## Validate MySQL Schema
	${CONSOLE} doctrine:schema:validate

test.twig: ## Validate Twig templates
	${CONSOLE} lint:twig -e prod --no-debug templates/ ../../src/Resources/views/

###
### SYLIUS
### ¯¯¯¯¯¯

sylius: dependencies sylius.database sylius.fixtures sylius.assets ## Install Sylius
.PHONY: sylius

sylius.database: ## Setup the database
	${CONSOLE} doctrine:database:drop --if-exists --force
	${CONSOLE} doctrine:database:create --if-not-exists
	${CONSOLE} doctrine:schema:update --force

sylius.fixtures: ## Run the fixtures
	${CONSOLE} sylius:fixtures:load -n default

sylius.assets: ## Install all assets with symlinks
	${CONSOLE} assets:install --symlink
	${CONSOLE} sylius:install:assets
	${CONSOLE} sylius:theme:assets:install --symlink

###
### PLATFORM
### ¯¯¯¯¯¯¯¯

platform: .php-version up ## Setup the platform tools
.PHONY: platform

docker.pull: ## Pull the docker images
	cd ${APP_DIR} && ${COMPOSE} pull

docker.up: ## Start the docker containers
	cd ${APP_DIR} && ${COMPOSE} up -d
.PHONY: docker.up

docker.stop: ## Stop the docker containers
	cd ${APP_DIR} && ${COMPOSE} stop
.PHONY: docker.stop

docker.down: ## Stop and remove the docker containers
	cd ${APP_DIR} && ${COMPOSE} down
.PHONY: docker.down

server.start: ## Run the local webserver using Symfony
	${SYMFONY} local:server:start -d

server.stop: ## Stop the local webserver
	${SYMFONY} local:server:stop

###
### HELP
### ¯¯¯¯

help: SHELL=/bin/bash
help: ## Dislay this help
	@IFS=$$'\n'; for line in `grep -h -E '^[a-zA-Z_#-]+:?.*?##.*$$' $(MAKEFILE_LIST)`; do if [ "$${line:0:2}" = "##" ]; then \
	echo $$line | awk 'BEGIN {FS = "## "}; {printf "\033[33m    %s\033[0m\n", $$2}'; else \
	echo $$line | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m%s\n", $$1, $$2}'; fi; \
	done; unset IFS;
.PHONY: help
