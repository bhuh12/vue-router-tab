# Installation

::: warning
Please make sure your Node.js version >= 8.6. There might be errors with lower versions.
:::

## NPM

yarn (recommended):

```bash
yarn add vue-router-tab
```

npm：

```bash
npm i vue-router-tab -S
```

## Dev Build

If you like to start with the dev version, clone it from GitHub, and build your own `vue-router-tab`.

```bash
git clone https://github.com/bhuh12/vue-router-tab.git node_modules/vue-router-tab
cd node_modules/vue-router-tab
yarn
yarn lib:build
```

## Polyfill

Vue Router Tab uses [**Vue CLI**](https://cli.vuejs.org) to build as library, so there's no polyfills.

If your project has to support browsers at lower versions, you can refer to the following configuration to transpile dependencies through Babel.

> Reference: [Vue CLI - Browser Compatibility](https://cli.vuejs.org/guide/browser-compatibility.html)

`vue.config.js`

```javascript
module.exports = {
  transpileDependencies: ['vue-router-tab']
}
```
