ifneq (,$(wildcard ./.env))
    include .env
    export
endif

.Phony: serve
serve:
	mdbook serve --port 8000

.Phony: build
build:
	mdbook build

.Phony: sponsor
sponsor:
	cd scripts/sponsorkit && npm start

.Phony: contributor
contributor:
	cd scripts/sponsorkit && npm run contributors

# .Phony: contributor
# contributor:
# 	npx github-contributors-list --owner immersive-translate --repo next-translator --cols 6 --authToken $(PERSONAL_GITHUB_TOKEN) --filter "github-actions[bot]"

.Phony: publish
publish:
	wrangler pages publish ./book --project-name immersive-translate

.Phony: sync
sync:
	cp ./docs/README.md ./README.md
