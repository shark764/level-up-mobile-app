module.exports = {
  extends: [
    '@react-native-community',
    'ts-react-important-stuff',
    'plugin:prettier/recommended'
  ],
  env: {
    'jest/globals': true
  },
  plugins: ['import'],
  settings: {
    'import/resolver': {
      'babel-module': {}
    }
  },
  rules: {
    'jsx-quotes': ['warn', 'prefer-single'],
    'no-unneeded-ternary': 'error',
    semi: ['error', 'always'],
    'comma-dangle': ['error', 'never']
  }
};
