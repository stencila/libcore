all : install lint cover build

install-js:
	npm install

install: install-js


lint-js:
	npm run lint

lint: lint-js


test-js:
	npm test

test: test-js


cover-js:
	npm run cover

cover: cover-js


build-js:
	npm run build

build: build-js
