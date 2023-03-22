import { $fetch } from 'ofetch'
import type { Provider, Sponsorship } from '../types'

export const OpenCollectiveProvider: Provider = {
  name: 'opencollective',
  fetchSponsors(config) {
    return fetchOpenCollectiveSponsors(
      config.opencollective?.key,
      config.opencollective?.id,
      config.opencollective?.slug,
      config.opencollective?.githubHandle,
      config.opencollective?.type,
    )
  },
}

const API = 'https://api.opencollective.com/graphql/v2/'
const graphql = String.raw

export async function fetchOpenCollectiveSponsors(key?: string, id?: string, slug?: string, githubHandle?: string, type?: string): Promise<Sponsorship[]> {
  if (!key)
    throw new Error('OpenCollective api key is required')
  if (!slug && !id && !githubHandle)
    throw new Error('OpenCollective collective id or slug or GitHub handle is required')

  let collective = true
  if (type && type !== 'collective')
    collective = false

  const sponsors: any[] = []
  let offset
  offset = 0

  do {
    const query = makeQuery(id, slug, githubHandle, offset, collective)
    const data = await $fetch(API, {
      method: 'POST',
      body: { query },
      headers: {
        'Api-Key': `${key}`,
        'Content-Type': 'application/json',
      },
    }) as any

    const nodes = collective
      ? data.data.collective?.members.nodes
      : data.data.account?.transactions.nodes

    sponsors.push(...(nodes || []))
    if ((nodes.length) !== 0)
      offset += nodes.length
    else
      offset = undefined
  } while (offset)

  const count: any = []
  const processed: Sponsorship[] = []

  for (const i in sponsors
    .sort((a, b) => (new Date(b.createdAt).getDate() - new Date(a.createdAt).getDate()))
  ) {
    const v = sponsors[i]
    const slug: string = collective ? v.account.slug : v.oppositeAccount.slug

    if (!collective) {
      if (slug in count) {
        delete processed![count[slug].index]

        count[slug].valueInCents += v.amount.valueInCents
        count[slug].index = i
      }
      else {
        count[slug] = {
          index: i,
          valueInCents: v.amount.valueInCents,
        }
      }
    }

    processed!.push({
      sponsor: {
        name: collective ? v.account.name : v.oppositeAccount.name,
        type: (collective ? v.account.type : v.oppositeAccount.name) === 'INDIVIDUAL' ? 'User' : 'Organization',
        login: slug,
        avatarUrl: collective ? v.account.imageUrl : v.oppositeAccount.imageUrl,
        websiteUrl: collective ? v.account.website : v.oppositeAccount.website,
        linkUrl: `https://opencollective.com/${slug}`,
      },
      isOneTime: !v.tier || v.tier.type === 'DONATION',
      monthlyDollars: (collective
        ? (v.tier ? v.tier.amount.valueInCents : v.totalDonations.valueInCents)
        : count[slug].valueInCents
      ) / 100,
      privacyLevel: (collective ? v.account.isIncognito : v.oppositeAccount.isIncognito) ? 'PRIVATE' : 'PUBLIC',
      tierName: collective ? (!v.tier ? '' : v.tier.name) : undefined,
      createdAt: v.createdAt,
    })
  }

  return processed.filter(i => i !== null)
}

function makeQuery(id?: string, slug?: string, githubHandle?: string, offset?: number, collective = true) {
  return graphql`{
  ${collective ? 'collective' : 'account'}(${id ? `id: "${id}", ` : ''}${slug ? `slug: "${slug}", ` : ''}${githubHandle ? `githubHandle: "${githubHandle}", ` : ''}throwIfMissing: true) {
    ${collective ? 'members' : 'transactions'}(limit: 100${offset ? ` offset: ${offset}` : ''}${collective ? ' role: [BACKER]' : ''}) {
      offset
      limit
      totalCount
      nodes {
        id
        createdAt
        ${collective
    ? `
        role
        tier {
          name
          type
          amount {
            valueInCents
          }
        }`
: ''
        }
        ${collective ? 'totalDonations' : 'amount'} {
          valueInCents
        }
        ${collective ? 'account' : 'oppositeAccount'} {
          name
          slug
          type
          website
          isIncognito
          imageUrl(height: 460, format: png)
        }
      }
    }
  }
}`
}
