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
    title: "Contributors",
    monthlyDollars: 1,
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
    title: "Backers",
    preset: presets.base,
  },
];
async function main() {
  const outputDir = "../../docs/assets/contributors";
  await run({
    outputDir: outputDir,
    formats: ["svg"],
    customComposer: defaultComposer,
    tiers: defaultTiers,
    includePastSponsors: true,
    name: "contributors",
    providers: [
      "githubContributor",
    ],
    githubContributor: {
      repos: [
        "immersive-translate/immersive-translate",
        "immersive-translate/next-translator",
      ],
      token: process.env.SPONSORKIT_GITHUB_CONTRIBUTOR_TOKEN,
    },
    force: true,
  });

  // write
  // await fsPromises.writeFile("../../docs/thanks.md", newThanksMd);
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
