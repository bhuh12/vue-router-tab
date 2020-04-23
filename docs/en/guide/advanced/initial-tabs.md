# Default tabs

You can configure your RouterTab to open default tabs. You do this by using the `tabs` property.

<doc-links api="#tabs" demo="/initial-tabs/"></doc-links>

**Example:**
``` html {2,10,12,15,18,22,30,34}
<template>
  <router-tab :tabs="tabs" />
</template>

<script>
export default {
  name: 'Default tabs',
  data () {
    return {
      tabs: [
        // Just set up fullpath, RouterTab will automatically get meta from your router configuration
        '/initial-tabs/page-leave',

        // Specify if it should be closable or not
        { to: '/initial-tabs/tab-dynamic', closable: false },

        // Specify with title
        { to: '/initial-tabs/page/1', title: 'Page 1' },

        // <router-link> 
        {
          to: {
            path: '/initial-tabs/page/2',
            query: { t: 2 }
          },
          title: '页面2'
        },

        // Overrides the default aliveId configuration, this tab is consistent with the aliveId of the '/ initial-tabs / page / 2' tab, and only the first tab that appears will be retained
        { to: '/initial-tabs/page/2?t=1', title: 'Page 2-1' },

        // iframe bookmark
        {
          to: `/initial-tabs/iframe/${encodeURIComponent('https://m.hao123.com/')}/Hao123/rt-icon-web`,
          title: 'Hao123',
          icon: 'rt-icon-web'
        }
      ]
    }
  }
}
</script>
```