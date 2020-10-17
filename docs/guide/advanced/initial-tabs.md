# Default Tabs

You can configure your RouterTab to open default tabs. You do this by using the `tabs` property.

::: warning
In nuxt project, if the configuration of the tab comes from the page 'meta', the configuration of the inactive tab cannot be obtained automatically. Therefore, the initial tab cannot be configured only by 'fullpath'.
:::

<doc-links api="#tabs" demo="/initial-tabs/" />

**Example:**

```html {2,10,12,15,18,22,30,34}
<template>
  <router-tab :tabs="tabs" />
</template>

<script>
  export default {
    name: 'Default tabs',
    data() {
      return {
        tabs: [
          // Just set up fullpath, RouterTab will automatically get meta from your router configuration
          // (tab routing configured in page meta mode under nuxt project is not supported)
          '/initial-tabs/page-leave',

          // The complete configuration of the tab display is required under the Nuxt project
          {
            to: '/initial-tabs/tab-dynamic',
            title: 'Dynamic update',
            closable: false
          },

          // For tabs with dynamic tab titles, you need to set the initial tab title to avoid inconsistent titles after entering the tab
          { to: '/initial-tabs/page/1', title: 'Page 1' },

          // <router-link>
          {
            to: {
              path: '/initial-tabs/page/2',
              query: { t: 2 }
            },
            title: 'Page 2'
          },

          // Overrides the default key configuration, this tab is consistent with the key of the '/initial-tabs/page/2' tab, and only the first tab that appears will be retained
          { to: '/initial-tabs/page/2?t=1', title: 'Page 2-1' },

          // iframe tab
          `/initial-tabs/iframe/${encodeURIComponent(
            'https://vuejs.org/'
          )}/Vue.js/rt-icon-web`
        ]
      }
    }
  }
</script>
```
