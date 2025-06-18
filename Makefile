.DEFAULT_GOAL := help
SHELL=/bin/bash
APP_DIR=vendor/sylius/test-application
SYMFONY=symfony
COMPOSER=symfony composer
CONSOLE=${SYMFONY} php vendor/bin/console
export COMPOSE_PROJECT_NAME=rich-editor
PLUGIN_NAME=sylius-${COMPOSE_PROJECT_NAME}-plugin
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

reset: down ## Stop docker and remove dependencies
	rm -rf node_modules yarn.lock vendor composer.lock
.PHONY: reset

dependencies: composer.lock node_modules ## Setup the dependencies
.PHONY: dependencies

.php-version: .php-version.dist
	rm -f .php-version
	ln -s .php-version.dist .php-version

php.ini: php.ini.dist
	rm -f php.ini
	ln -s php.ini.dist php.ini

composer.lock: composer.json
	${COMPOSER} install --no-scripts --no-plugins

yarn.install: ${APP_DIR}/yarn.lock

${APP_DIR}/yarn.lock:
	ln -sf ${APP_DIR}/node_modules node_modules
	touch ${APP_DIR}/yarn.lock
	cd ${APP_DIR} && ${YARN} install && ${YARN} build
# No CSS and JS on this plugin yet
#	${YARN} install
#	${YARN} encore prod

node_modules: ${APP_DIR}/node_modules ## Install the Node dependencies using yarn

${APP_DIR}/node_modules: yarn.install

###
### TEST APPLICATION
### ¯¯¯¯¯

application: .php-version php.ini dependencies apply_dist ${APP_DIR}/docker-compose.yaml
.PHONY: application

${APP_DIR}/docker-compose.yaml:
	rm -f ${APP_DIR}/{docker-compose.yml,docker-compose.yaml,compose.yml,compose.override.dist.yml} # Remove all Sylius files about Docker
	ln -s ../../../docker-compose.yaml.dist ${APP_DIR}/docker-compose.yaml
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
	${CONSOLE} lint:yaml src/Resources/config tests/TestApplication/config --parse-tags

test.schema: ## Validate MySQL Schema
	${CONSOLE} doctrine:schema:validate

test.twig: ## Validate Twig templates
	${CONSOLE} lint:twig --no-debug src/Resources/views/ tests/TestApplication/templates/

###
### SYLIUS
### ¯¯¯¯¯¯

sylius: sylius.database sylius.fixtures sylius.assets messenger.setup ## Install Sylius
.PHONY: sylius

sylius.database: ## Setup the database
	${CONSOLE} doctrine:database:drop --if-exists --force
	${CONSOLE} doctrine:database:create --if-not-exists
	${CONSOLE} doctrine:migration:migrate -n

sylius.fixtures: ## Run the fixtures
	${CONSOLE} sylius:fixtures:load -n default

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
	${SYMFONY} local:server:start -d --dir=${APP_DIR}/public

server.stop: ## Stop the local webserver
	${SYMFONY} local:server:stop --dir=${APP_DIR}/public

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
