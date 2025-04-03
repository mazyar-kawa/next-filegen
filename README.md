# next-filegen

next-filegen is a flexible Node.js package for generating filenames dynamically using various strategies.

## Features

- Multiple Filename Strategies: Supports random, uuid, timestamp, date, numbered, slug, hash, and incremental.
- Customizable Output: Add prefixes, suffixes, and formats to filenames.
- Developer-Friendly: Works seamlessly in any Node.js project.

## Installation

Install my-project with npm

```bash
  npm install next-filegen
```

## Usage/Examples

```javascript
import { generateFilename } from 'next-filegen'

const filename = generateFilename('document', 'pdf', 'timestamp', {
  prefix: 'letter_',
  suffix: '_signed',
  format: 'Y-m-d_H-i-s',
})

console.log(filename) // Outputs: "letter_2025-03-27_14-30-00_document_signed.pdf"
```

## Available Strategies

| Strategy      | Description                                    |
| ------------- | ---------------------------------------------- |
| `random`      | Generates a random alphanumeric string.        |
| `uuid`        | Uses UUID v4 for unique filenames.             |
| `timestamp`   | Adds a timestamp (ISO format) to the filename. |
| `date`        | Uses only the date (YYYY-MM-DD).               |
| `numbered`    | Appends a specific number to the filename.     |
| `slug`        | Converts the filename to a URL-friendly slug.  |
| `hash`        | Generates an MD5 hash of the filename.         |
| `incremental` | Appends a timestamp to ensure uniqueness.      |
