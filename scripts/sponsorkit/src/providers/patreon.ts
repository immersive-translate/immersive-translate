import { $fetch } from "ofetch";
import type { Provider, Sponsorship } from "../types";

export const PatreonProvider: Provider = {
  name: "patreon",
  fetchSponsors(config) {
    return fetchPatreonSponsors(config.patreon?.token || config.token!);
  },
};

export async function fetchPatreonSponsors(
  token: string,
): Promise<Sponsorship[]> {
  if (!token) {
    throw new Error("Patreon token is required");
  }

  // Get current authenticated user's campaign ID (Everyone has one default campaign)
  const userData = await $fetch(
    "https://www.patreon.com/api/oauth2/api/current_user/campaigns?include=null",
    {
      method: "GET",
      headers: {
        "Authorization": `bearer ${token}`,
        "Content-Type": "application/json",
      },
      responseType: "json",
    },
  );
  const userCampaignId = userData.data[0].id;

  const sponsors: any[] = [];
  let sponsorshipApi =
    `https://www.patreon.com/api/oauth2/api/campaigns/${userCampaignId}/pledges?include=patron.null,reward.null&page%5Bcount%5D=100`;
  do {
    // Get pledges from the campaign
    const sponsorshipData = await $fetch(sponsorshipApi, {
      method: "GET",
      headers: {
        "Authorization": `bearer ${token}`,
        "Content-Type": "application/json",
      },
      responseType: "json",
    });
    sponsors.push(
      ...sponsorshipData.data
        .filter((pledge: any) => !!pledge.relationships?.reward?.data)
        .filter((pledge: any) => {
          // Filter declined users
          if (pledge.attributes.declined_since) {
            return new Date(pledge.attributes.declined_since).getTime() -
                new Date().getTime() > 0;
          }
          return true;
        })
        .map((pledge: any) => ({
          pledge,
          patron: sponsorshipData.included.find(
            (v: any) => v.id === pledge.relationships.patron.data.id,
          ),
          reward: sponsorshipData.included.find(
            (v: any) => v.id === pledge.relationships.reward.data.id,
          ),
        })),
    );
    sponsorshipApi = sponsorshipData.links.next;
  } while (sponsorshipApi);

  const processed = sponsors.map(
    (raw: any): Sponsorship => {
      const currency = raw.pledge.attributes.currency;
      let price = raw.pledge.attributes.amount_cents / 100;
      if (currency !== "USD") {
        if (currency === "HKD") {
          price = price * 0.13;
        } else {
          // TODO: Add more currency support
          console.warn(`Currency ${currency} for pateon not supported`);
        }
      }

      return ({
        sponsor: {
          avatarUrl: raw.patron.attributes.image_url,
          login: raw.patron.attributes.first_name,
          name: raw.patron.attributes.full_name,
          type: "User", // Patreon only support user
          linkUrl: raw.patron.attributes.url,
        },
        isOneTime: false, // One-time pledges not supported
        monthlyDollars: price,
        privacyLevel: "PUBLIC", // Patreon is all public
        tierName: raw.reward.attributes.title,
        createdAt: raw.pledge.attributes.created_at,
      });
    },
  );

  return processed;
}
