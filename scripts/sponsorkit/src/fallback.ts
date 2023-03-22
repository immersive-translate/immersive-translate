import { svgToPng } from './image'

const fallback = `
<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 135.47 135.47">
    <path fill="#2d333b" stroke="#000" stroke-linejoin="round" stroke-width=".32" d="M.16.16h135.15v135.15H.16z" paint-order="stroke markers fill"/>
    <path fill="#636e7b" fill-rule="evenodd" d="M81.85 53.56a14.13 14.13 0 1 1-28.25 0 14.13 14.13 0 0 1 28.25 0zm.35 17.36a22.6 22.6 0 1 0-28.95 0 33.92 33.92 0 0 0-19.38 29.05 4.24 4.24 0 0 0 8.46.4 25.43 25.43 0 0 1 50.8 0 4.24 4.24 0 1 0 8.46-.4 33.93 33.93 0 0 0-19.4-29.05z"/>
</svg>
`

export const FALLBACK_AVATAR = svgToPng(fallback)
