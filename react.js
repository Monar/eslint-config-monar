'use strict';

/* eslint-disable-next-line  @typescript-eslint/no-var-requires */
const config = require('./index.js');

module.exports = {
  ...config,
  extends: [...config.extends, 'plugin:react/recommended', 'prettier/react'],
  parserOptions: {
    ...config.parserOptions,
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [...config.plugins, 'react', 'react-hooks'],
  settings: {
    ...config.settings,
    react: {
      version: 'detect',
    },
  },
  rules: {
    ...config.rules,
    'prettier/prettier': [
      'error',
      {
        ...config.rules['prettier/prettier'][1],
        jsxBracketSameLine: false,
      },
    ],
    'react/display-name': 'off',
    'react/prop-types': ['error', { skipUndeclared: true }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
  },
};
