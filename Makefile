.PHONY: test

all: test

test: node_modules
	npx jest

node_modules: package.json
	npm install

