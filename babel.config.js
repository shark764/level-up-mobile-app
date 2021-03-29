module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.test.tsx',
          '.jsx',
          '.js',
          '.json'
        ],
        alias: {
          '@screens': './src/screens',
          '@navigation': './src/navigation',
          '@components': './src/components',
          '@state': './src/state',
          '@utils': './src/utils',
          '@services': './src/services',
          '@app-types': './src/types',
          '@assets': './src/assets',
          '@hooks': './src/hooks'
        }
      }
    ]
  ]
};
