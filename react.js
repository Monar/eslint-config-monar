'use strict';

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
  plugins: [...config.plugins, 'react'],
  rules: {
    ...config.rules,
    'babel/quotes': 'off',
    'prettier/prettier': [
      'error',
      {
        ...config.rules['prettier/prettier'][1],
        jsxBracketSameLine: false,
      },
    ],
    'react/display-name': 'off',
    'react/prop-types': ['error', { skipUndeclared: true }],
    'react/display-name': 'off',
  },
};
