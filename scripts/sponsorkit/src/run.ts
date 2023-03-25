import { dirname, join, relative, resolve } from "node:path";
import fs from "fs-extra";
import consola from "consola";
import c from "picocolors";
import { version } from "../package.json";
import { loadConfig, partitionTiers } from "./config";
import { resolveAvatars, svgToPng } from "./image";
import { SvgComposer } from "./svg";
import { presets } from "./presets";
import type { SponsorkitConfig, Sponsorship } from "./types";
import { guessProviders, resolveProviders } from "./providers";

function r(path: string) {
  return `./${relative(process.cwd(), path)}`;
}

export async function run(inlineConfig?: SponsorkitConfig, t = consola) {
  t.log(`\n${c.magenta(c.bold("SponsorKit"))} ${c.dim(`v${version}`)}\n`);

  const config = await loadConfig(inlineConfig);
  const dir = resolve(process.cwd(), config.outputDir);
  const cacheFile = resolve(dir, config.cacheFile);

  const providers = resolveProviders(
    config.providers || guessProviders(config),
  );

  let allSponsors: Sponsorship[] = [];
  if (!fs.existsSync(cacheFile) || config.force) {
    for (const i of providers) {
      t.info(`Fetching sponsorships from ${i.name}...`);
      let sponsors = await i.fetchSponsors(config);
      sponsors.forEach((s) => s.provider = i.name);
      sponsors = await config.onSponsorsFetched?.(sponsors, i.name) || sponsors;
      t.success(`${sponsors.length} sponsorships fetched from ${i.name}`);
      allSponsors.push(...sponsors);
    }
    //
    //
    allSponsors = await config.beforeSonsorsAvatarsFetching?.(allSponsors) ||
      allSponsors;

    t.info("Resolving avatars...");
    await resolveAvatars(allSponsors, config.fallbackAvatar);
    t.success("Avatars resolved");
  } else {
    allSponsors = await fs.readJSON(cacheFile);
    t.success(`Loaded from cache ${r(cacheFile)}`);
  }

  // Sort
  allSponsors.sort((a, b) =>
    b.monthlyDollars - a.monthlyDollars || // DESC amount
    Date.parse(b.createdAt!) - Date.parse(a.createdAt!) || // DESC date
    (b.sponsor.login || b.sponsor.name).localeCompare(
      a.sponsor.login || a.sponsor.name,
    ) // ASC name
  );

  if (!fs.existsSync(cacheFile) || config.force) {
    await fs.ensureDir(dirname(cacheFile));
    await fs.writeJSON(cacheFile, allSponsors, { spaces: 2 });
  }

  await fs.ensureDir(dir);
  if (config.formats?.includes("json")) {
    const path = join(dir, `${config.name}.json`);
    await fs.writeJSON(path, allSponsors, { spaces: 2 });
    t.success(`Wrote to ${r(path)}`);
  }

  allSponsors = await config.onSponsorsReady?.(allSponsors) || allSponsors;
  if (config.filter) {
    allSponsors = allSponsors.filter((s) =>
      config.filter(s, allSponsors) !== false
    );
  }
  if (!config.includePrivate) {
    allSponsors = allSponsors.filter((s) => s.privacyLevel !== "PRIVATE");
  }

  t.info("Composing SVG...");
  const composer = new SvgComposer(config);
  await (config.customComposer || defaultComposer)(
    composer,
    allSponsors,
    config,
  );
  let svg = composer.generateSvg();

  svg = await config.onSvgGenerated?.(svg) || svg;

  if (config.formats?.includes("svg")) {
    const path = join(dir, `${config.name}.svg`);
    await fs.writeFile(path, svg, "utf-8");
    t.success(`Wrote to ${r(path)}`);
  }

  if (config.formats?.includes("png")) {
    const path = join(dir, `${config.name}.png`);
    await fs.writeFile(path, await svgToPng(svg));
    t.success(`Wrote to ${r(path)}`);
  }
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
