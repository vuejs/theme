module.exports = {
  preset: 'ts-jest',
  rootDir: __dirname,
  testMatch: ['<rootDir>/__tests__/**/*.spec.ts'],
  testPathIgnorePatterns: ['/node_modules/']
}
