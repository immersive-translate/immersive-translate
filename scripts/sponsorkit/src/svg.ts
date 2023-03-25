import type { BadgePreset, Sponsor, Sponsorship } from "./types";
import { createHash } from "node:crypto";
import type { SponsorkitConfig } from ".";

export function getRandomColor(name: string) {
  const nameMd5 = md5(name);
  const nameMd5Int = parseInt(nameMd5, 16);

  const colors = [
    "#1abc9c",
    "#16a085",
    "#f1c40f",
    "#f39c12",
    "#2ecc71",
    "#27ae60",
    "#e67e22",
    "#d35400",
    "#3498db",
    "#2980b9",
    "#e74c3c",
    "#c0392b",
    "#9b59b6",
    "#8e44ad",
    "#bdc3c7",
    "#34495e",
    "#2c3e50",
    "#95a5a6",
    "#7f8c8d",
    "#ec87bf",
    "#d870ad",
    "#f69785",
    "#9ba37e",
    "#b49255",
    "#b49255",
    "#a94136",
  ];

  // get colors by name
  const colorIndex = nameMd5Int % colors.length;
  return colors[colorIndex];
  // return colros[Math.floor(Math.random() * colros.length)];
}
export function genSvgImage(
  x: number,
  y: number,
  size: number,
  url: string,
  name: string,
  description?: string,
) {
  if (!url && name) {
    // generate text avatar
    const bgColor = getRandomColor(name);
    const textColor = "#ffffff";
    // to upper case
    const firstLetter = name?.slice(0, 2).toUpperCase();

    // draw a circle avatar
    if (name) {
      return `<circle cx="${x + size / 2}" cy="${y + size / 2}" r="${
        size / 2
      }" fill="${bgColor}"><title>${
        description || name
      }</title></circle><text x="${x + size / 2}" y="${
        y + size / 2
      }" text-anchor="middle" class="sponsorkit-text-avatar" font-size="${
        size / 2
      }" fill="${textColor} !important">${firstLetter}</text>`;
    } else {
      return `<circle cx="${x + size / 2}" cy="${y + size / 2}" r="${
        size / 2
      }" fill="${bgColor}"></circle><text x="${x + size / 2}" y="${
        y + size / 2
      }" text-anchor="middle" class="sponsorkit-text-avatar" font-size="${
        size / 2
      }" fill="${textColor} !important">${firstLetter}</text>`;
    }
  } else {
    // encode url for xml
    const encodedUrl = url.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
    if (!name) {
      return `<image x="${x}" y="${y}" width="${size}" height="${size}" xlink:href="${encodedUrl}"/>`;
    } else {
      return `<image x="${x}" y="${y}" width="${size}" height="${size}" xlink:href="${encodedUrl}"><title>${
        description || name
      }</title></image>`;
    }
  }
}

export function generateBadge(
  x: number,
  y: number,
  sponsor: Sponsor,
  preset: BadgePreset,
) {
  const size = preset.avatar.size;
  const { login } = sponsor;
  let name = (sponsor.name || sponsor.login).trim();
  let url = sponsor.linkUrl;
  if (url) {
    url = url.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
  }

  if (
    preset.name && preset.name.maxLength && name.length > preset.name.maxLength
  ) {
    if (name.includes(" ")) {
      name = name.split(" ")[0];
    } else {
      name = `${name.slice(0, preset.name.maxLength - 3)}...`;
    }
  }

  const avatarUrl =
    (size < 50
      ? sponsor.avatarUrlLowRes
      : size < 90
      ? sponsor.avatarUrlMediumRes
      : sponsor.avatarUrlHighRes) || sponsor.avatarUrl;

  return `
<a ${url ? `xlink:href="${url}"` : ""} class="${
    preset.classes || "sponsorkit-link"
  }" target="_blank" id="${login}">
  ${
    preset.name
      ? `<text x="${x + size / 2}" y="${
        y + size + 18
      }" text-anchor="middle" class="${
        preset.name.classes || "sponsorkit-name"
      }" fill="${preset.name.color || "currentColor"}">${
        encodeHtmlEntities(name)
      }</text>`
      : ""
  }
  ${
    genSvgImage(
      x,
      y,
      size,
      avatarUrl,
      sponsor.name || sponsor.linkUrl || "U",
      sponsor.description || sponsor.name || sponsor.linkUrl,
    )
  }
</a>`.trim();
}

export class SvgComposer {
  height = 0;
  body = "";

  constructor(public readonly config: Required<SponsorkitConfig>) {}

  addSpan(height = 0) {
    this.height += height;
    return this;
  }

  addTitle(text: string, classes = "sponsorkit-tier-title") {
    return this.addText(text, classes);
  }

  addText(text: string, classes = "text") {
    this.body += `<text x="${
      this.config.width / 2
    }" y="${this.height}" text-anchor="middle" class="${classes}">${text}</text>`;
    this.height += 20;
    return this;
  }

  addRaw(svg: string) {
    this.body += svg;
    return this;
  }

  addSponsorLine(sponsors: Sponsorship[], preset: BadgePreset) {
    const offsetX =
      (this.config.width - sponsors.length * preset.boxWidth) / 2 +
      (preset.boxWidth - preset.avatar.size) / 2;
    this.body += sponsors
      .map((s, i) => {
        const x = offsetX + preset.boxWidth * i;
        const y = this.height;
        const badge = generateBadge(x, y, s.sponsor, preset);
        return badge;
      })
      .join("\n");
    this.height += preset.boxHeight;
  }

  addSponsorGrid(sponsors: Sponsorship[], preset: BadgePreset) {
    // console.log(
    //   "sponsors",
    //   sponsors.map((item) => {
    //     return {
    //       name: item.sponsor.name,
    //       createdAt: item.createdAt,
    //       monthlyAmount: item.monthlyDollars,
    //     };
    //   }),
    // );
    const perLine = Math.floor(
      (this.config.width - (preset.container?.sidePadding || 0) * 2) /
        preset.boxWidth,
    );

    new Array(Math.ceil(sponsors.length / perLine))
      .fill(0)
      .forEach((_, i) => {
        this.addSponsorLine(
          sponsors.slice(i * perLine, (i + 1) * perLine),
          preset,
        );
      });

    return this;
  }
  addDescription(text: string) {
  }

  generateSvg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ${this.config.width} ${this.height}" width="${this.config.width}" height="${this.height}">
<!-- Generated by https://github.com/antfu/sponsorskit -->
<style>${this.config.svgInlineCSS}</style>
${this.body}
</svg>
`;
  }
}

function encodeHtmlEntities(str: string) {
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(
    />/g,
    "&gt;",
  ).replace(/"/g, "&quot;");
}
function md5(text: string) {
  return createHash("md5").update(
    text,
  ).digest("hex");
}
