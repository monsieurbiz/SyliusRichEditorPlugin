.DEFAULT_GOAL := help

APP_ENV ?= dev
SYMFONY_ARGS ?=
COMPOSER_ARGS ?= --prefer-source
DOCKER_INTERACTIVE_ARGS ?= -ti

### DEVELOPMENT
# ¯¯¯¯¯¯¯¯¯¯¯¯¯

requirements: .php-version node_modules

bazinga: requirements stop clean serve init npm.build ## 🎉 Setup everything by doing what has to be done.

install: requirements composer.init npm.init npm.build ## Install the plugin without Sylius app

serve: ## Serve the DEV app
	${MAKE} docker.start || true
	symfony local:server:start -d --dir=tests/Application/ ${SYMFONY_ARGS} || true

stop: ## Stop the DEV app
	symfony local:server:stop --dir=tests/Application/
	${MAKE} docker.stop || true

docker.start: ## Up docker containers
	docker run -d --rm --name richeditor_database -v richeditor_database:/var/lib/mysql -e MYSQL_ALLOW_EMPTY_PASSWORD=1 -p 3306:3306 mysql:5.5

docker.stop: ## Down docker containers
	docker stop richeditor_database

docker.logs: ## Logs of docker containers
	docker logs -f richeditor_database

server.logs: ## Logs of the symfony server
	symfony local:server:log --dir=tests/Application/

init: composer.init sylius.init npm.init ## Init all (composer, sylius, plugin)

composer.init: ## Init composer dependencies
	symfony composer install ${COMPOSER_ARGS}

# 	docker run --rm ${DOCKER_INTERACTIVE_ARGS} -v ${PWD}:/app:rw -w /app/tests/Application -u node node:latest bash -c "yarn install; yarn build"
sylius.init: requirements db.reset ## Init the DEV Sylius app
	cd tests/Application && \
	npm install && \
	npm run build
	symfony php tests/Application/bin/console assets:install public --symlink
	symfony php tests/Application/bin/console sylius:install:assets

db.reset: ## Reset the database
	symfony php tests/Application/bin/console doctrine:database:create --if-not-exists --no-interaction
	symfony php tests/Application/bin/console doctrine:schema:update --force --no-interaction
	symfony php tests/Application/bin/console sylius:fixtures:load --no-interaction

npm.init: ## Init npm (plugin & sylius)
	npm install

npm.build: ## Build JS files from sources (plugin & sylius)
	npm run build

npm.watch: ## Watch JS files for this plugin only
	npm run watch

clean: sylius.clean ## Clean all generated stuff
	rm -rf ./{package-lock.json,yarn.lock,composer.lock,vendor}

sylius.clean: ## Clean all generated stuff in sylius only
	cd tests/Application/ && \
	rm -rf ./{package-lock.json,yarn.lock,composer.lock,node_modules} && \
	mkdir node_modules

phpunit: ## Run phpunit
	./vendor/bin/phpunit

phpspec: ## Run phpspec
	./vendor/bin/phpspec run

phpstan: ## Run phpstan
	./vendor/bin/phpstan analyse src

.php-version:
	cp .php-version.dist .php-version

node_modules:
	ln -sf tests/Application/node_modules node_modules

### OTHERS
# ¯¯¯¯¯¯¯¯

.PHONY: help
help: ## Dislay this help
	@IFS=$$'\n'; for line in `grep -h -E '^[a-zA-Z_#-]+:?.*?## .*$$' $(MAKEFILE_LIST)`; do if [ "$${line:0:2}" = "##" ]; then \
	echo $$line | awk 'BEGIN {FS = "## "}; {printf "\n\033[33m%s\033[0m\n", $$2}'; else \
	echo $$line | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'; fi; \
	done; unset IFS;


