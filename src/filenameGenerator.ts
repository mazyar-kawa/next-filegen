import { v4 as uuidv4 } from 'uuid'
import slugify from 'slugify'
import { MD5 } from 'crypto-js'

/**
 * Supported filename strategies.
 */
export type FilenameStrategy =
  | 'random'
  | 'uuid'
  | 'timestamp'
  | 'date'
  | 'numbered'
  | 'slug'
  | 'hash'
  | 'incremental'

/**
 * Options for filename generation.
 */
interface FilenameOptions {
  prefix?: string
  suffix?: string
  format?: string
  number?: number
}

/**
 * Generate filenames dynamically using various strategies.
 */
export function generateFilename(
  defaultFilename: string,
  extension: string,
  strategy: FilenameStrategy = 'random',
  options: FilenameOptions = {}
): string {
  let filename = defaultFilename

  switch (strategy) {
    case 'random':
      filename = Math.random().toString(36).substring(2, 10)
      break

    case 'uuid':
      filename = uuidv4()
      break

    case 'timestamp':
      filename = new Date().toISOString().replace(/[-:.]/g, '_')
      break

    case 'date':
      filename = new Date().toISOString().split('T')[0]
      break

    case 'numbered':
      filename = options.number
        ? `${defaultFilename}_${options.number}`
        : defaultFilename
      break

    case 'slug':
      filename = slugify(defaultFilename, { lower: true, strict: true })
      break

    case 'hash':
      filename = MD5(defaultFilename).toString()
      break

    case 'incremental':
      filename = `${defaultFilename}_${Date.now()}`
      break

    default:
      throw new Error(`Unsupported strategy: ${strategy}`)
  }

  return `${options.prefix || ''}${filename}${
    options.suffix || ''
  }.${extension}`
}
