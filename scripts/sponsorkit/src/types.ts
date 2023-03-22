import type { SvgComposer } from "./svg";

export interface BadgePreset {
  boxWidth: number;
  boxHeight: number;
  avatar: {
    size: number;
    classes?: string;
  };
  name?: false | {
    color?: string;
    classes?: string;
    maxLength?: number;
  };
  container?: {
    sidePadding?: number;
  };
  classes?: string;
}

export interface Provider {
  name: string;
  fetchSponsors: (config: SponsorkitConfig) => Promise<Sponsorship[]>;
}

export interface Sponsor {
  type: "User" | "Organization";
  login: string;
  name: string;
  avatarUrl: string;
  avatarUrlHighRes?: string;
  avatarUrlMediumRes?: string;
  avatarUrlLowRes?: string;
  websiteUrl?: string;
  linkUrl?: string;
  description?: string;
}

export interface Sponsorship {
  sponsor: Sponsor;
  monthlyDollars: number;
  privacyLevel?: "PUBLIC" | "PRIVATE";
  tierName?: string;
  createdAt?: string;
  isOneTime?: boolean;
  provider?: ProviderName | string;
}

export type OutputFormat = "svg" | "png" | "json";

export type ProviderName =
  | "github"
  | "patreon"
  | "opencollective"
  | "afdian"
  | "githubContributor";

export interface ProvidersConfig {
  githubContributor?: {
    repos?: string[];
    /**
     * GitHub Token that have access to your sponsorships.
     *
     * Will read from `SPONSORKIT_GITHUB_TOKEN` environment variable if not set.
     *
     * @deprecated It's not recommended set this value directly, pass from env or use `.env` file.
     */
    token?: string;
  };
  github?: {
    /**
     * User id of your GitHub account.
     *
     * Will read from `SPONSORKIT_GITHUB_LOGIN` environment variable if not set.
     */
    login?: string;
    /**
     * GitHub Token that have access to your sponsorships.
     *
     * Will read from `SPONSORKIT_GITHUB_TOKEN` environment variable if not set.
     *
     * @deprecated It's not recommended set this value directly, pass from env or use `.env` file.
     */
    token?: string;
    /**
     * The account type for sponsorships.
     *
     * Possible values are `user`(default) and `organization`.
     * Will read from `SPONSORKIT_GITHUB_TYPE` environment variable if not set.
     */
    type?: string;
  };
  patreon?: {
    /**
     * Patreon Token that have access to your sponsorships.
     *
     * Will read from `SPONSORKIT_PATREON_TOKEN` environment variable if not set.
     *
     * @deprecated It's not recommended set this value directly, pass from env or use `.env` file.
     */
    token?: string;
  };
  opencollective?: {
    /**
     * Api key of your OpenCollective account.
     *
     * Will read from `SPONSORKIT_OPENCOLLECTIVE_KEY` environment variable if not set.
     *
     * @deprecated It's not recommended set this value directly, pass from env or use `.env` file.
     */
    key?: string;
    /**
     * The id of your account.
     *
     * Will read from `SPONSORKIT_OPENCOLLECTIVE_ID` environment variable if not set.
     */
    id?: string;
    /**
     * The slug of your account.
     *
     * Will read from `SPONSORKIT_OPENCOLLECTIVE_SLUG` environment variable if not set.
     */
    slug?: string;
    /**
     * The GitHub handle of your account.
     *
     * Will read from `SPONSORKIT_OPENCOLLECTIVE_GH_HANDLE` environment variable if not set.
     */
    githubHandle?: string;
    /*
     * The type of your account. (`collective` or `individual`)
     *
     * Will read from `SPONSORKIT_OPENCOLLECTIVE_TYPE` environment variable if not set.
     */
    type?: string;
  };
  afdian?: {
    /**
     * The userId of your Afdian.
     *
     * Will read from `SPONSORKIT_AFDIAN_USER_ID` environment variable if not set.
     */
    userId?: string;
    /**
     * Afdian Token that have access to your sponsorships.
     *
     * Will read from `SPONSORKIT_AFDIAN_TOKEN` environment variable if not set.
     *
     * @deprecated It's not recommended set this value directly, pass from env or use `.env` file.
     */
    token?: string;
  };
}

export interface SponsorkitConfig extends ProvidersConfig {
  /**
   * @deprecated use `github.login` instead
   */
  login?: string;
  /**
   * @deprecated use `github.token` instead
   */
  token?: string;

  /**
   * @default auto detect based on the config provided
   */
  providers?: ProviderName[];

  /**
   * Whether to display the private sponsors
   *
   * @default false
   */
  includePrivate?: boolean;

  /**
   * Whether to display the past sponsors
   * Currently only works with GitHub provider
   *
   * @default auto detect based on tiers
   */
  includePastSponsors?: boolean;

  /**
   * By pass cache
   */
  force?: boolean;

  /**
   * Directory of output files.
   *
   * @default './sponsorkit'
   */
  outputDir?: string;

  /**
   * Name of exported files
   *
   * @default 'sponsors'
   */
  name?: string;

  /**
   * Output formats
   *
   * @default ['json', 'svg', 'png']
   */
  formats?: OutputFormat[];

  /**
   * Hook to modify sponsors data before fetching the avatars.
   */
  onSponsorsFetched?: (
    sponsors: Sponsorship[],
    provider: ProviderName | string,
  ) => PromiseLike<void | Sponsorship[]> | void | Sponsorship[];

  beforeSonsorsAvatarsFetching?: (
    sponsors: Sponsorship[],
  ) => PromiseLike<void | Sponsorship[]> | void | Sponsorship[];

  /**
   * Hook to modify sponsors data before rendering.
   */
  onSponsorsReady?: (
    sponsors: Sponsorship[],
  ) => PromiseLike<void | Sponsorship[]> | void | Sponsorship[];

  /**
   * Hook to get or modify the SVG before writing.
   */
  onSvgGenerated?: (
    svg: string,
  ) =>
    | PromiseLike<string | void | undefined | null>
    | string
    | void
    | undefined
    | null;

  /**
   * Compose the SVG
   */
  customComposer?: (
    composer: SvgComposer,
    sponsors: Sponsorship[],
    config: SponsorkitConfig,
  ) => PromiseLike<void> | void;

  /**
   * Filter of sponsorships to render in the final image.
   */
  filter?: (sponsor: Sponsorship, all: Sponsorship[]) => boolean | void;

  /**
   * Tiers
   */
  tiers?: Tier[];

  /**
   * Width of the image.
   *
   * @default 700
   */
  width?: number;

  /**
   * Url to fallback avatar.
   * Setting false to disable fallback avatar.
   */
  fallbackAvatar?: string | false | Buffer | Promise<Buffer>;

  /**
   * Path to cache file
   *
   * @default './sponsorkit/.cache.json'
   */
  cacheFile?: string;

  /**
   * Padding of image container
   */
  padding?: {
    top?: number;
    bottom?: number;
  };

  /**
   * Inline CSS of generated SVG
   */
  svgInlineCSS?: string;
}

export interface Tier {
  /**
   * The lower bound of the tier (inclusive)
   */
  monthlyDollars?: number;
  title?: string;
  preset?: BadgePreset;
  padding?: {
    top?: number;
    bottom?: number;
  };
  /**
   * Replace the default composer with your own.
   */
  compose?: (
    composer: SvgComposer,
    sponsors: Sponsorship[],
    config: SponsorkitConfig,
  ) => void;
  /**
   * Compose the SVG before the main composer.
   */
  composeBefore?: (
    composer: SvgComposer,
    tierSponsors: Sponsorship[],
    config: SponsorkitConfig,
  ) => void;
  /**
   * Compose the SVG after the main composer.
   */
  composeAfter?: (
    composer: SvgComposer,
    tierSponsors: Sponsorship[],
    config: SponsorkitConfig,
  ) => void;
}
