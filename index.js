'use strict';

module.exports = {
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:jest/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', 'import', '@typescript-eslint', 'jest', 'unicorn'],
  env: {
    es6: true,
    jest: true,
  },
  globals: {
    module: true,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: true,
        useTabs: false,
        tabWidth: 2,
        printWidth: 80,
        arrowParens: 'avoid',
        singleQuote: true,
        bracketSpacing: true,
        trailingComma: 'all',
      },
    ],
    eqeqeq: ['error', 'always'],
    curly: 'error',
    'no-use-before-define': 'off',
    'no-var': ['error'],
    'object-curly-spacing': ['error', 'always'],
    'no-console': ['error', { allow: ['error', 'warn'] }],
    '@typescript-eslint/prefer-interface': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
      },
    ],
    'prefer-const': 'error',
    'unicorn/no-abusive-eslint-disable': 'error',
    'unicorn/no-array-instanceof': 'error',
  },
  overrides: [
    {
      files: ['*.graphql', '*.gql'],
      rules: {
        'prettier/prettier': ['error', { parser: '@babel/parser' }],
      },
    },
  ],
};
