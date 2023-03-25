import { $fetch } from "ofetch";
import type { Provider, SponsorkitConfig, Sponsorship } from "../../types";
import { getPastSponsors } from "./get-past-sponsors";

const API = "https://api.github.com/graphql";
const graphql = String.raw;

export const GitHubProvider: Provider = {
  name: "github",
  fetchSponsors(config) {
    return fetchGitHubSponsors(
      config.github?.token || config.token!,
      config.github?.login || config.login!,
      config.github?.type || "user",
      config,
    );
  },
};

export async function fetchGitHubSponsors(
  token: string,
  login: string,
  type: string,
  config: SponsorkitConfig,
): Promise<Sponsorship[]> {
  if (!token) {
    throw new Error("GitHub token is required");
  }
  if (!login) {
    throw new Error("GitHub login is required");
  }
  if (!["user", "organization"].includes(type)) {
    throw new Error("GitHub type must be either `user` or `organization`");
  }

  const sponsors: Sponsorship[] = [];
  let cursor;

  do {
    const query = makeQuery(login, type, cursor);
    const data = await $fetch(API, {
      method: "POST",
      body: { query },
      headers: {
        "Authorization": `bearer ${token}`,
        "Content-Type": "application/json",
      },
    }) as any;

    if (!data) {
      throw new Error(`Get no response on requesting ${API}`);
    } else if (data.errors?.[0]?.type === "INSUFFICIENT_SCOPES") {
      throw new Error(
        "Token is missing the `read:user` and/or `read:org` scopes",
      );
    } else if (data.errors?.length) {
      throw new Error(
        `GitHub API error:\n${JSON.stringify(data.errors, null, 2)}`,
      );
    }

    sponsors.push(
      ...(data.data[type].sponsorshipsAsMaintainer.nodes || []),
    );
    if (data.data[type].sponsorshipsAsMaintainer.pageInfo.hasNextPage) {
      cursor = data.data[type].sponsorshipsAsMaintainer.pageInfo.endCursor;
    } else {
      cursor = undefined;
    }
  } while (cursor);

  const processed = sponsors
    .map((raw: any): Sponsorship => ({
      sponsor: {
        ...raw.sponsorEntity,
        linkUrl: `https://github.com/${raw.sponsorEntity.login}`,
        __typename: undefined,
        type: raw.sponsorEntity.__typename,
      },
      isOneTime: raw.tier.isOneTime,
      monthlyDollars: raw.tier.monthlyPriceInDollars,
      privacyLevel: raw.privacyLevel,
      tierName: raw.tier.name,
      createdAt: raw.createdAt,
    }));

  if (config.includePastSponsors) {
    try {
      processed.push(...await getPastSponsors(login));
    } catch (e) {
      console.error("Failed to fetch past sponsors:", e);
    }
  }

  return processed;
}

export function makeQuery(login: string, type: string, cursor?: string) {
  return graphql`{
  ${type}(login: "${login}") {
    sponsorshipsAsMaintainer(first: 100${cursor ? ` after: "${cursor}"` : ""}) {
      totalCount
      pageInfo {
        endCursor
        hasNextPage
      }
      nodes {
        createdAt
        privacyLevel
        tier {
          name
          isOneTime
          monthlyPriceInCents
          monthlyPriceInDollars
        }
        sponsorEntity {
          __typename
          ...on Organization {
            login
            name
            avatarUrl
            websiteUrl
          }
          ...on User {
            login
            name
            avatarUrl
            websiteUrl
          }
        }
      }
    }
  }
}`;
}
