import { scriptName } from 'yargs'
import { version } from '../package.json'
import { run } from './run'
import type { SponsorkitConfig } from './types'

const cli = scriptName('sponsors-svg')
  .usage('$0 [args]')
  .version(version)
  .strict()
  .showHelpOnFail(false)
  .alias('h', 'help')
  .alias('v', 'version')

cli.command(
  '*',
  'Generate',
  args => args
    .option('width', {
      alias: 'w',
      type: 'number',
      default: 800,
    })
    .option('fallbackAvatar', {
      type: 'string',
      alias: 'fallback',
    })
    .option('force', {
      alias: 'f',
      default: false,
      type: 'boolean',
    })
    .option('name', {
      type: 'string',
    })
    .option('filter', {
      type: 'string',
    })
    .option('outputDir', {
      type: 'string',
      alias: ['o', 'dir'],
    })
    .strict()
    .help(),
  async (options) => {
    const config = options as SponsorkitConfig

    if (options._[0])
      config.outputDir = options._[0] as string

    if (options.filter)
      config.filter = createFilterFromString(options.filter)

    await run(config)
  })

cli
  .help()
  .parse()

/**
 * Create filter function from templates like
 * - `<10`
 * - `>=10`
 */
function createFilterFromString(template: string): SponsorkitConfig['filter'] {
  const [_, op, value] = template.split(/([<>=]+)/)
  const num = parseInt(value)
  if (op === '<')
    return s => s.monthlyDollars < num
  if (op === '<=')
    return s => s.monthlyDollars <= num
  if (op === '>')
    return s => s.monthlyDollars > num
  if (op === '>=')
    return s => s.monthlyDollars >= num
  throw new Error(`Unable to parse filter template ${template}`)
}
