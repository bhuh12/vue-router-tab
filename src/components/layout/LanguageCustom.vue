<template>
  <main class="app-main">
    <router-tab :i18n="lang"/>
  </main>
</template>

<script>
export default {
  name: 'LanguageCustom',
  data () {
    return {
      lang: {
        tab: {
          untitled: 'Untitled Page'
        },
        contextmenu: {
          refresh: 'Refresh This',
          refreshAll: 'Refresh All',
          close: 'Close This',
          closeLefts: 'Close to the Left',
          closeRights: 'Close to the Right',
          closeOthers: 'Close Others'
        }
      }
    }
  }
}
</script>
