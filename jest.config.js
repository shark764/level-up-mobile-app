const { defaults: tsjPreset } = require('ts-jest/presets');
const esModules = [
  'react-native',
  '@react-native',
  '@react-native-community',
  '@react-navigation'
].join('|');

module.exports = {
  ...tsjPreset,
  preset: 'react-native',
  transform: {
    ...tsjPreset.transform,
    '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js'
  },
  globals: {
    'ts-jest': {
      babelConfig: true
    }
  },
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      'identity-obj-proxy'
  },
  setupFiles: ['<rootDir>/src/jestSetup.ts'],
  testEnvironment: 'node'
};
