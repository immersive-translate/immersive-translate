import type { BadgePreset } from "./types";

const none: BadgePreset = {
  avatar: {
    size: 0,
  },
  boxWidth: 0,
  boxHeight: 0,
  container: {
    sidePadding: 0,
  },
};

const base: BadgePreset = {
  avatar: {
    size: 40,
  },
  boxWidth: 48,
  boxHeight: 48,
  container: {
    sidePadding: 0,
  },
};

const xs: BadgePreset = {
  avatar: {
    size: 25,
  },
  boxWidth: 30,
  boxHeight: 30,
  container: {
    sidePadding: 0,
  },
};

const small: BadgePreset = {
  avatar: {
    size: 35,
  },
  boxWidth: 38,
  boxHeight: 38,
  container: {
    sidePadding: 0,
  },
};

const medium: BadgePreset = {
  avatar: {
    size: 50,
  },
  boxWidth: 80,
  boxHeight: 90,
  container: {
    sidePadding: 0,
  },
  name: {
    maxLength: 10,
  },
};

const large: BadgePreset = {
  avatar: {
    size: 70,
  },
  boxWidth: 95,
  boxHeight: 115,
  container: {
    sidePadding: 0,
  },
  name: {
    maxLength: 16,
  },
};

const xl: BadgePreset = {
  avatar: {
    size: 90,
  },
  boxWidth: 120,
  boxHeight: 130,
  container: {
    sidePadding: 0,
  },
  name: {
    maxLength: 20,
  },
};

export const presets = {
  none,
  xs,
  small,
  base,
  medium,
  large,
  xl,
};
