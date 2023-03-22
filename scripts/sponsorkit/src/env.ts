import dotenv from "dotenv";
import type { SponsorkitConfig } from "./types";

function getDeprecatedEnv(name: string, replacement: string) {
  const value = process.env[name];
  if (value) {
    console.warn(
      `[sponsorkit] env.${name} is deprecated, use env.${replacement} instead`,
    );
  }
  return value;
}

export function loadEnv(): Partial<SponsorkitConfig> {
  dotenv.config();

  const config: Partial<SponsorkitConfig> = {
    github: {
      login: process.env.SPONSORKIT_GITHUB_LOGIN || process.env.GITHUB_LOGIN ||
        getDeprecatedEnv("SPONSORKIT_LOGIN", "SPONSORKIT_GITHUB_LOGIN"),
      token: process.env.SPONSORKIT_GITHUB_TOKEN || process.env.GITHUB_TOKEN ||
        getDeprecatedEnv("SPONSORKIT_TOKEN", "SPONSORKIT_GITHUB_TOKEN"),
      type: process.env.SPONSORKIT_GITHUB_TYPE || process.env.GITHUB_TYPE,
    },
    patreon: {
      token: process.env.SPONSORKIT_PATREON_TOKEN || process.env.PATREON_TOKEN,
    },
    githubContributor: {
      token: process.env.SPONSORKIT_GITHUB_CONTRIBUTOR_TOKEN,
    },
    opencollective: {
      key: process.env.SPONSORKIT_OPENCOLLECTIVE_KEY ||
        process.env.OPENCOLLECTIVE_KEY,
      id: process.env.SPONSORKIT_OPENCOLLECTIVE_ID ||
        process.env.OPENCOLLECTIVE_ID,
      slug: process.env.SPONSORKIT_OPENCOLLECTIVE_SLUG ||
        process.env.OPENCOLLECTIVE_SLUG,
      githubHandle: process.env.SPONSORKIT_OPENCOLLECTIVE_GH_HANDLE ||
        process.env.OPENCOLLECTIVE_GH_HANDLE,
      type: process.env.SPONSORKIT_OPENCOLLECTIVE_TYPE ||
        process.env.OPENCOLLECTIVE_TYPE,
    },
    afdian: {
      userId: process.env.SPONSORKIT_AFDIAN_USER_ID ||
        process.env.AFDIAN_USER_ID,
      token: process.env.SPONSORKIT_AFDIAN_TOKEN || process.env.AFDIAN_TOKEN,
    },
    outputDir: process.env.SPONSORKIT_DIR,
  };

  // remove undefined keys
  return JSON.parse(JSON.stringify(config));
}
