# iframe Tab

You can open external websites with iframe tabs.

::: warning
This feature requires RouterTabRoutes from RouterTab. See [Essentials - Route Config](README.md#路由配置)
:::


## iframe Tab Operation

<doc-links api="#routertab-openiframetab" demo="/default/"></doc-links>

#### Open iframe Tab

``` js
// the arguments are url, tab title and icon
this.$routerTab.openIframe('https://www.baidu.com', 'Baidu', 'icon-web')
```

#### Close iframe Tab

``` js
this.$routerTab.closeIframe('https://www.baidu.com')
```

#### Refresh iframe Tab

``` js
this.$routerTab.refreshIframe('https://www.baidu.com')
```

## iframe Tab Events

Supported iframe tab events are listed below:

- `iframe-mounted`

- `iframe-loaded`


Note that url jumping within iframe will also trigger `iframe-loaded` event.

<doc-links api="#iframe-mounted" demo="/iframe/"></doc-links>

**Example：**

<<< @/demo/components/frames/Iframe.vue
