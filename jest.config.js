export default {
  preset: 'ts-jest/presets/default-esm', // Use ESM preset
  testEnvironment: 'node',
  extensionsToTreatAsEsm: ['.ts'], // Treat `.ts` files as ESM
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1', // Fix module resolution
  },
  transform: {
    '^.+\\.ts$': [
      'ts-jest',
      {
        useESM: true, // Enable ESM support
        tsconfig: 'tsconfig.json', // Point to your TS config
      },
    ],
  },
}
