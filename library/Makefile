build:
	npx swc ./src -d dist
	npx tsc
	yalc publish --push

build-watch: build
	node scripts/watch.js

publish:
	npm version patch -f
	npm publish --access public
