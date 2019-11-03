KNEX := $(shell knex --version 2> /dev/null)

verify-knex:
ifndef KNEX
	@echo "knex is not installed. Installing now..."
	@npm i -g knex
endif

migrate-up: verify-knex
	@knex migrate:up

migrate-down: verify-knex
	@knex migrate:down

docker-build:
	@docker build -t huyak -f ./build/Dockerfile .

docker-run: docker-build
	@docker run -it -p 3000:3000 huyak