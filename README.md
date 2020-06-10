# Monar eslint-config

## Install

```bash
yarn add -ED eslint-config-monar
```

## Setup

Extend your `.eslintrc` configuration with:

```js
extends: ['monar'],
```

Configure a `tsconfig.json` file to the root of the workspace if you
don't already have one:

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "lib": ["es2017", "dom"],
    "rootDir": "src",
    "jsx": "react",
    "strict": true,
    "esModuleInterop": true,
    "moduleResolution": "node",
    "experimentalDecorators": true
  },
  "exclude": ["node_modules"]
}
```

### React (optional)

Install peer dependencies:

```bash
yarn add -ED eslint-plugin-react eslint-plugin-react-hooks
```

Extend your `.eslintrc` configuration with:

```js
extends: ['monar/react'],
```

## Helpers

Add these to your `package.json` scripts:

```json
"scripts": {
  "lint": "eslint --ext .js,.jsx,.ts,.tsx ./src",
  "lint:fix": "eslint --fix --ext .js,.jsx,.ts,.tsx ./src"
}
```
