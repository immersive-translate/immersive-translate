.Phony: serve
serve:
	mdbook serve

.Phony: build
build:
	mdbook build

.Phony: publish
publish:
	wrangler pages publish ./book --project-name immersive-translate

