globalThis.IMMERSIVE_TRANSLATE_CONFIG = {
  debug: true,
  translationLanguagePattern: {
    matches: ["en"],
  },
  translationService: "mock",
  translationThemePatterns: {
    underline: {
      matches: ["discord.com"],
    },
  },
  translationUrlPattern: {
    excludeMatches: ["www.google.com", "*.buzzing.cc"],
  },
};

if (globalThis.IMMERSIVE_TRANSLATE_ENTRY) {
  console.log("yes");
  globalThis.IMMERSIVE_TRANSLATE_ENTRY().catch((e) => {
    console.error(`immersive translate error`, e);
  });
}
