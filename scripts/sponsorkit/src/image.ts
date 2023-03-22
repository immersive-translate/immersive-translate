import { $fetch } from 'ofetch'
// @ts-expect-error missing types
import imageDataURI from 'image-data-uri'
import sharp from 'sharp'
import type { SponsorkitConfig, Sponsorship } from './types'

export async function resolveAvatars(ships: Sponsorship[], fallbackAvatar: SponsorkitConfig['fallbackAvatar']) {
  return Promise.all(ships.map(async (ship) => {
    const data = await $fetch(ship.sponsor.avatarUrl, { responseType: 'arrayBuffer' })
      .catch((e) => {
        if (typeof fallbackAvatar === 'string')
          return $fetch(fallbackAvatar, { responseType: 'arrayBuffer' })
        if (fallbackAvatar)
          return fallbackAvatar
        throw e
      })
    const radius = ship.sponsor.type === 'User' ? 0.5 : 0.15
    ship.sponsor.avatarUrlHighRes = await imageDataURI.encode(await round(data, radius, 120), 'PNG')
    ship.sponsor.avatarUrlMediumRes = await imageDataURI.encode(await round(data, radius, 80), 'PNG')
    ship.sponsor.avatarUrlLowRes = await imageDataURI.encode(await round(data, radius, 50), 'PNG')
  }))
}

function toBuffer(ab: ArrayBuffer) {
  const buf = Buffer.alloc(ab.byteLength)
  const view = new Uint8Array(ab)
  for (let i = 0; i < buf.length; ++i)
    buf[i] = view[i]

  return buf
}

export async function round(image: string | ArrayBuffer, radius = 0.5, size = 100) {
  const rect = Buffer.from(
    `<svg><rect x="0" y="0" width="${size}" height="${size}" rx="${size * radius}" ry="${size * radius}"/></svg>`,
  )

  return await sharp(typeof image === 'string' ? image : toBuffer(image))
    .resize(size, size, { fit: sharp.fit.cover })
    .composite([{
      blend: 'dest-in',
      input: rect,
      density: 72,
    }])
    .png({ quality: 80, compressionLevel: 8 })
    .toBuffer()
}

export function svgToPng(svg: string) {
  return sharp(Buffer.from(svg), { density: 150 })
    .png({ quality: 90 })
    .toBuffer()
}
