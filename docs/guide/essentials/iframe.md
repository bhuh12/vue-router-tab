# Iframe Tab

You can open external websites with iframe tabs.

::: warning
This feature requires RouterTabRoutes from RouterTab. See [Essentials - Route Config](README.md#路由配置)
:::

## Iframe Tab Operation

<doc-links api="#routertab-openiframe" demo="/default/" />

#### Open iframe Tab

```js
// the arguments are url, tab title and icon
this.$tabs.openIframe('https://vuejs.org', 'Vue.js', 'icon-web')
```

#### Close iframe Tab

```js
this.$tabs.closeIframe('https://vuejs.org')
```

#### Refresh iframe Tab

```js
this.$tabs.refreshIframe('https://vuejs.org')
```

## Iframe Tab Events

Supported iframe tab events are listed below:

- `iframe-mounted`

- `iframe-loaded`

Note that url jumping within iframe will also trigger `iframe-loaded` event.

<doc-links api="#iframe-mounted" demo="/iframe/" />

**Example:**

<<< @/src/components/frames/Iframe.vue
