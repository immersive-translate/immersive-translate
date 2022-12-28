.Phony: serve
serve:
	mdbook serve --port 8000

.Phony: build
build:
	mdbook build

.Phony: publish
publish:
	wrangler pages publish ./book --project-name immersive-translate

