.DEFAULT_GOAL := help
SHELL=/bin/bash
APP_DIR=tests/Application
SYLIUS_STANDARD_VERSION=~2.3.0
SYLIUS_VERSION=~2.3.3
SYLIUS_FIXTURES_HOSTNAME ?= 127.0.0.1
SYMFONY=cd ${APP_DIR} && symfony
COMPOSER=symfony composer
CONSOLE=${SYMFONY} console
export COMPOSE_PROJECT_NAME ?= rich-editor
PLUGIN_NAME=sylius-rich-editor-plugin
COMPOSE=docker compose
YARN=yarn

###
### DEVELOPMENT
### ¯¯¯¯¯¯¯¯¯¯¯

install: application platform sylius ## Install the plugin
.PHONY: install

up: docker.up server.start ## Up the project (start docker, start symfony server)
stop: server.stop docker.stop ## Stop the project (stop docker, stop symfony server)
down: server.stop docker.down ## Down the project (removes docker containers, stop symfony server)

reset: ## Stop docker and remove dependencies
	${MAKE} docker.down || true
	rm -rf ${APP_DIR}
	rm -rf node_modules yarn.lock vendor composer.lock
.PHONY: reset

dependencies: composer.lock yarn.install ## Setup the dependencies
.PHONY: dependencies

.php-version: .php-version.dist
	rm -f .php-version
	ln -s .php-version.dist .php-version

php.ini: php.ini.dist
	rm -f php.ini
	ln -s php.ini.dist php.ini

composer.lock: composer.json
	${COMPOSER} install --no-scripts --no-plugins

yarn.install:
	cd ${APP_DIR} && npm pkg set 'devDependencies.@symfony/stimulus-bridge=^4.0.2'
	cd ${APP_DIR} && ${YARN} install && ${YARN} build
	ln -sfn ${APP_DIR}/node_modules node_modules
.PHONY: yarn.install

###
### TEST APPLICATION
### ¯¯¯¯¯

application: .php-version php.ini ${APP_DIR} setup_application ${APP_DIR}/docker-compose.yaml

${APP_DIR}:
	(${COMPOSER} create-project --no-interaction --prefer-dist --no-scripts --no-progress --no-install sylius/sylius-standard="${SYLIUS_STANDARD_VERSION}" ${APP_DIR})

setup_application:
	(cd ${APP_DIR} && ${COMPOSER} config repositories.plugin '{"type": "path", "url": "../../"}')
	(cd ${APP_DIR} && ${COMPOSER} config extra.symfony.allow-contrib true)
	(cd ${APP_DIR} && ${COMPOSER} config --no-plugins allow-plugins true)
	(cd ${APP_DIR} && ${COMPOSER} config --no-plugins --json extra.symfony.endpoint '["https://api.github.com/repos/monsieurbiz/symfony-recipes/contents/index.json?ref=flex/master","flex://defaults"]')
	# The MySQL migrations for Sylius and its bundled payment plugins use DBAL 3 type comments.
	(cd ${APP_DIR} && ${COMPOSER} require --no-update sylius/sylius="${SYLIUS_VERSION}" monsieurbiz/${PLUGIN_NAME}="*@dev" doctrine/dbal="^3.10")
	$(MAKE) ${APP_DIR}/.php-version
	$(MAKE) ${APP_DIR}/php.ini
	(cd ${APP_DIR} && ${COMPOSER} update --no-interaction --no-progress)
	$(MAKE) apply_dist
	${CONSOLE} cache:clear


${APP_DIR}/docker-compose.yaml:
	rm -f ${APP_DIR}/docker-compose.yml
	rm -f ${APP_DIR}/docker-compose.yaml
	rm -f ${APP_DIR}/compose.yml # Remove Sylius file about Docker
	rm -f ${APP_DIR}/compose.override.dist.yml # Remove Sylius file about Docker
	ln -s ../../docker-compose.yaml.dist ${APP_DIR}/docker-compose.yaml
.PHONY: ${APP_DIR}/docker-compose.yaml

${APP_DIR}/.php-version: .php-version
	(cd ${APP_DIR} && ln -sf ../../.php-version)

${APP_DIR}/php.ini: php.ini
	(cd ${APP_DIR} && ln -sf ../../php.ini)

apply_dist:
	ROOT_DIR=$(shell dirname $(realpath $(firstword $(MAKEFILE_LIST)))); \
	for i in `cd dist && find . -type f`; do \
		FILE_PATH=`echo $$i | sed 's|./||'`; \
		FOLDER_PATH=`dirname $$FILE_PATH`; \
		echo $$FILE_PATH; \
		(cd ${APP_DIR} && rm -f $$FILE_PATH); \
		(cd ${APP_DIR} && mkdir -p $$FOLDER_PATH); \
		(cd ${APP_DIR} && ln -s $$ROOT_DIR/dist/$$FILE_PATH $$FILE_PATH); \
    done

###
### TESTS
### ¯¯¯¯¯

test.all: test.composer test.phpstan test.phpmd test.phpunit test.phpspec test.phpcs test.yaml test.schema test.twig test.container ## Run all tests in once

test.composer: ## Validate composer.json
	${COMPOSER} validate --strict

test.phpstan: ## Run PHPStan
	${COMPOSER} phpstan

test.phpmd: ## Run PHPMD
	${COMPOSER} phpmd

test.phpunit: ## Run PHPUnit
	${COMPOSER} phpunit

test.phpspec: ## Run PHPSpec
	${COMPOSER} phpspec

test.phpcs: ## Run PHP CS Fixer in dry-run
	${COMPOSER} run -- phpcs --dry-run -v

test.phpcs.fix: ## Run PHP CS Fixer and fix issues if possible
	${COMPOSER} run -- phpcs -v

test.container: ## Lint the symfony container
	${CONSOLE} lint:container

test.yaml: ## Lint the symfony Yaml files
	${CONSOLE} lint:yaml ../../src/Resources/config --parse-tags

test.schema: ## Validate MySQL Schema
	${CONSOLE} doctrine:schema:validate

test.twig: ## Validate Twig templates
	${CONSOLE} lint:twig --no-debug templates/ ../../src/Resources/views/

###
### SYLIUS
### ¯¯¯¯¯¯

sylius: dependencies sylius.database sylius.fixtures sylius.assets messenger.setup ## Install Sylius
.PHONY: sylius

sylius.database: ## Setup the database
	${CONSOLE} doctrine:database:drop --if-exists --force
	${CONSOLE} doctrine:database:create --if-not-exists
	${CONSOLE} doctrine:migration:migrate -n

sylius.fixtures: ## Run the fixtures
	cd ${APP_DIR} && SYLIUS_FIXTURES_HOSTNAME="${SYLIUS_FIXTURES_HOSTNAME}" symfony console sylius:fixtures:load -n default

sylius.assets: ## Install all assets with symlinks
	${CONSOLE} assets:install --symlink
	${CONSOLE} sylius:install:assets
	${CONSOLE} sylius:theme:assets:install --symlink

messenger.setup: ## Setup Messenger transports
	${CONSOLE} messenger:setup-transports

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

docker.logs: ## Logs the docker containers
	cd ${APP_DIR} && ${COMPOSE} logs -f
.PHONY: docker.logs

docker.dc: ARGS=ps
docker.dc: ## Run docker-compose command. Use ARGS="" to pass parameters to docker-compose.
	cd ${APP_DIR} && ${COMPOSE} ${ARGS}
.PHONY: docker.dc

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
