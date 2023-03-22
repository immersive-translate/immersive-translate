import { createHash } from "node:crypto";
import { $fetch } from "ofetch";
import type { Provider, Sponsorship } from "../types";
import fs from "node:fs/promises";

// afdian api docs https://afdian.net/p/9c65d9cc617011ed81c352540025c377

export const GithubContributorProvider: Provider = {
  name: "afdian",
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
  const sponsorshipApi = "https://afdian.net/api/open/query-sponsor";

  return [];
}
