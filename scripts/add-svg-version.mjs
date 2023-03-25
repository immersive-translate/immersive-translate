import fs from "node:fs/promises";
import crypto from "node:crypto";
export async function main() {
  const sponsorSvgPath = "./docs/assets/sponsorkit/sponsors.svg";
  const sponsorSvg = await fs.readFile(sponsorSvgPath, "utf8");

  // get sha1 hash of svg
  const hash = crypto.createHash("sha1").update(sponsorSvg).digest("hex");

  // replace svg url

  const docs = ["./README.md", "./docs/thanks.md", "./docs/donate.md"];
  for (const doc of docs) {
    const content = await fs.readFile(doc, "utf8");
    // replace https://immersive-translate.owenyoung.com/assets/sponsorkit/sponsors.svg?v=xxx
    // to new hash
    const newContent = content.replace(
      /https:\/\/immersive-translate\.owenyoung\.com\/assets\/sponsorkit\/sponsors\.svg\?v=[a-z0-9]+/g,
      `https://immersive-translate.owenyoung.com/assets/sponsorkit/sponsors.svg?v=${hash}`
    );
    await fs.writeFile(doc, newContent);
  }

  // replace svg url in contributors

  const contributorSvgPath = "./docs/assets/contributors/contributors.svg";

  const contributorsSvg = await fs.readFile(contributorSvgPath, "utf8");
  const contributorsHash = crypto
    .createHash("sha1")
    .update(contributorsSvg)
    .digest("hex");

  const contributorsDocs = [
    "./README.md",
    "./docs/thanks.md",
    "./docs/donate.md",
  ];
  for (const doc of contributorsDocs) {
    const content = await fs.readFile(doc, "utf8");
    // replace https://immersive-translate.owenyoung.com/assets/contributors/contributors.svg?v=xxxx
    // to new hash
    const newContent = content.replace(
      /https:\/\/immersive-translate\.owenyoung\.com\/assets\/contributors\/contributors\.svg\?v=[a-z0-9]+/g,
      `https://immersive-translate.owenyoung.com/assets/contributors/contributors.svg?v=${contributorsHash}`
    );
    await fs.writeFile(doc, newContent);
  }
}

main();
