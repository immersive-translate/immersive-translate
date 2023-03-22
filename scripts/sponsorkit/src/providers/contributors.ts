import { createHash } from "node:crypto";
import { $fetch } from "ofetch";
import type { Provider, Sponsorship } from "../types";
import fs from "node:fs/promises";

// afdian api docs https://afdian.net/p/9c65d9cc617011ed81c352540025c377

export const GithubContributorProvider: Provider = {
  name: "githubContributor",
  fetchSponsors(config) {
    return fetchGithubContributors(
      config.githubContributor?.token,
      config?.githubContributor?.repos,
    );
  },
};

export async function fetchGithubContributors(
  token?: string,
  repos?: string[],
): Promise<Sponsorship[]> {
  if (!token || !repos) {
    throw new Error("Github repos and token are required");
  }
  // TODO
  // return [];

  const sponsors: any[] = [];
  const sponsorMap: Record<string, boolean> = {};
  for (const repo of repos) {
    const sponsorshipApi = `https://api.github.com/repos/${repo}/contributors`;

    const response = await $fetch(sponsorshipApi, {
      headers: {
        "Accept": "application/vnd.github+json",
        "Authorization": "Bearer " + token,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

    for (const contributor of response) {
      const { login, contributions } = contributor;
      if (sponsorMap[login]) {
        continue;
      }
      if (login === "github-actions[bot]") {
        continue;
      }
      if (contributions < 3) {
        continue;
      }
      sponsorMap[login] = true;
      sponsors.push({
        sponsor: {
          type: "User",
          login,
          name: login,
          avatarUrl: contributor.avatar_url,
          linkUrl: contributor.html_url,
        },
        monthlyDollars: contributions,
        privacyLevel: "PUBLIC",
      });
    }
  }

  return sponsors;
}
