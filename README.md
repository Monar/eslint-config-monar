# Monar eslint-config

## Install
```
yarn add -ED eslint-config-monar
```
#### Peer dependencies
```
yarn add -ED eslint babel-eslint prettier eslint-config-prettier \
eslint-plugin-prettier eslint-plugin-babel eslint-plugin-import
```
#### Optional dependencies
```
yarn add -ED eslint-plugin-react
```

## Use
For general purpose extend your `.eslintrc` configuration with:
```js
extends: ['monar'],
```
And for react development extend with:
```js
extends: ['monar/react'],
```

## Helpers
Add those to your `package.json`:
```json
"scripts": {
  "lint": "eslint .",
  "lint:fix": "eslint --fix ."
}
```
