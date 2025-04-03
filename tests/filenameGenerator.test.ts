import { generateFilename } from '../src/filenameGenerator'

describe('generateFilename', () => {
  test('should generate a random filename', () => {
    const filename = generateFilename('file', 'txt', 'random')
    expect(filename).toMatch(/.*\.txt$/)
  })

  test('should generate a UUID filename', () => {
    const filename = generateFilename('file', 'txt', 'uuid')
    expect(filename).toMatch(/.*\.txt$/)
  })

  test('should generate a timestamped filename', () => {
    const filename = generateFilename('file', 'txt', 'timestamp')
    expect(filename).toMatch(/.*\.txt$/)
  })

  test('should generate a slug filename', () => {
    const filename = generateFilename('My Project', 'jpg', 'slug')
    expect(filename).toBe('my-project.jpg')
  })

  test('should generate a numbered filename', () => {
    const filename = generateFilename('invoice', 'pdf', 'numbered', {
      number: 100,
    })
    expect(filename).toBe('invoice_100.pdf')
  })

  test('should generate a hashed filename', () => {
    const filename = generateFilename('secure', 'docx', 'hash')
    expect(filename).toMatch(/[a-f0-9]{32}.docx/)
  })
})
