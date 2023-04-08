import { run } from "./run";
import { SvgComposer } from "./svg";
import type { SponsorkitConfig, Sponsorship, Tier } from "./types";
import { presets } from "./presets";
import { partitionTiers } from "./config";
import fs from "node:fs";
import fsPromises from "node:fs/promises";
import * as readline from "node:readline/promises";
import silverSponsors from "../silver.json" assert { type: "json" };

export const defaultTiers: Tier[] = [
  {
    title: "Past Sponsors",
    monthlyDollars: -1,
    preset: presets.xs,
  },
  {
    title: "Backers",
    preset: presets.base,
  },
  {
    title: "Sponsors",
    monthlyDollars: 10,
    preset: {
      avatar: {
        size: 50,
      },
      boxWidth: 65,
      boxHeight: 80,
      container: {
        sidePadding: 0,
      },
      name: {
        maxLength: 7,
      },
    },
  },
  {
    title: "Silver Sponsors",
    monthlyDollars: 50,
    preset: presets.large,
  },
  {
    title: "Gold Sponsors",
    monthlyDollars: 100,
    preset: presets.xl,
  },
];
async function main() {
  const wechatSponsors = await fetchCustomSponsors("wechat.txt");
  const alipaySponsors = await fetchCustomSponsors("alipay.txt");
  const cryptoSponsors = await fetchCustomSponsors("crypto.txt");
  const outputDir = "../../docs/assets/sponsorkit";
  await run({
    outputDir: outputDir,
    formats: ["svg"],
    customComposer: defaultComposer,
    tiers: defaultTiers,
    includePastSponsors: true,
    beforeSonsorsAvatarsFetching: (sponsors) => {
      // format silver
      const finalSilverSponsors = silverSponsors.map((sponsor) => {
        const { expiresAt } = sponsor;
        const expired = expiresAt ? new Date(expiresAt).getTime() : 0;
        // is expired
        const isExpired = expired && expired < Date.now();
        if (isExpired) {
          return {
            ...sponsor,
            monthlyDollars: -1,
          };
        } else {
          return sponsor;
        }
      });
      // console.log("finalSilverSponsors", finalSilverSponsors);

      return [
        ...sponsors,
        ...(finalSilverSponsors as unknown as Sponsorship[]),
      ];
    },
    onSponsorsReady: (sponsors) => {
      const newSponsors = [
        ...sponsors,
        ...wechatSponsors,
        ...alipaySponsors,
        ...cryptoSponsors,
      ];
      // add wechat

      return newSponsors;
    },
    force: true,
  });

  // const data = await fsPromises.readFile(outputDir + "/sponsors.svg", {
  //   encoding: "utf8",
  // });
  //
  // const thanksMd = await fsPromises.readFile("../../docs/thanks.md", {
  //   encoding: "utf8",
  // });

  // replace <!-- Sponsors --> with data
  // const newThanksMd = thanksMd.replace(
  //   "<!-- Sponsors -->",
  //   data,
  // );

  // replace <!-- Sponsors --> with data

  // write
  // await fsPromises.writeFile("../../docs/thanks.md", newThanksMd);
}

async function fetchCustomSponsors(filepath: string) {
  //
  const sponsors: Sponsorship[] = [];
  // read line from filepath
  const fileStream = fs.createReadStream(filepath);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  for await (const line of rl) {
    // Each line in input.txt will be successively available here as `line`.
    const trimed = line.trim();
    if (trimed) {
      // split by ,

      const parts = trimed.split(",");
      let name = "";
      let avatar = "";
      let profile = "";
      let expired = 0;
      let monthlyDollars = 0;
      let startDate = 0;
      for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        // trim
        const trimedPart = part.trim();
        if (trimedPart) {
          switch (i) {
            case 0:
              name = trimedPart;
              break;
            case 1:
              monthlyDollars = parseFloat(trimedPart) / 6.9;
              break;
            case 2:
              let dateStr = trimedPart;
              // is 8 digits
              if (trimedPart.length === 8) {
                // add - to 10 digits
                dateStr = trimedPart.slice(0, 4) + "-" +
                  trimedPart.slice(4, 6) + "-" + trimedPart.slice(6, 8);
              }
              const date = new Date(dateStr);
              expired = date.getTime();
              break;
            case 3:
              startDate = expired -
                1000 * 60 * 60 * 24 * 30 * parseInt(trimedPart);
              break;
            case 4:
              avatar = trimedPart;
              break;
            case 5:
              profile = trimedPart;
              break;
          }
        }
      }
      if (!startDate) {
        // start date
        startDate = expired - 1000 * 60 * 60 * 24 * 30;
      }

      const isExpired = expired && expired < Date.now();
      try {
        // add to sponsors
        const sponsor: Sponsorship = {
          sponsor: {
            type: "User",
            login: "",
            name: name,
            avatarUrl: avatar,
            avatarUrlHighRes: "",
            avatarUrlMediumRes: "",
            avatarUrlLowRes: "",
            websiteUrl: "",
            linkUrl: profile,
          },
          monthlyDollars: isExpired ? -1 : monthlyDollars,
          privacyLevel: "PUBLIC",
          createdAt: new Date(startDate).toISOString(),
          isOneTime: true,
          provider: "custom",
        };
        sponsors.push(sponsor);
      } catch (e) {
        console.error("startDate", filepath, startDate, name);
        throw e;
      }
    }
  }

  return sponsors;
}

export async function defaultComposer(
  composer: SvgComposer,
  sponsors: Sponsorship[],
  config: SponsorkitConfig,
) {
  const tierPartitions = partitionTiers(sponsors, config.tiers!);

  composer.addSpan(config.padding?.top ?? 20);

  tierPartitions
    .forEach(({ tier: t, sponsors }) => {
      t.composeBefore?.(composer, sponsors, config);
      if (t.compose) {
        t.compose(composer, sponsors, config);
      } else {
        const preset = t.preset || presets.base;
        if (sponsors.length && preset.avatar.size) {
          const paddingTop = t.padding?.top ?? 20;
          const paddingBottom = t.padding?.bottom ?? 10;
          if (paddingTop) {
            composer.addSpan(paddingTop);
          }
          if (t.title) {
            composer
              .addTitle(t.title)
              .addSpan(5);
          }
          composer.addSponsorGrid(sponsors, preset);
          if (paddingBottom) {
            composer.addSpan(paddingBottom);
          }
        }
      }
      t.composeAfter?.(composer, sponsors, config);
    });

  composer.addSpan(config.padding?.bottom ?? 20);
}

main();
