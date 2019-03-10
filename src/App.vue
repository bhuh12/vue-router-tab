<template>
  <div class="app-ct" :class="{ 'sidebar-open': sidebarOpen }">
    <header class="app-hd">
      <a class="rt-icon-menu toggle-side" @click="sidebarOpen = !sidebarOpen"></a>
      <img class="site-logo" src="@/assets/img/logo.png" alt="Vue Router Tab - logo">
      <h2 class="site-title">
        <a href="../">Vue Router Tab</a> - Demo
      </h2>
    </header>

    <div class="app-bd">
      <div class="app-sd-mask" @click="sidebarOpen = false"></div>
      <aside class="app-sd">
        <menu-group v-for="(item, index) in menu" :key="index" :data="item"/>
      </aside>

      <router-view/>
    </div>
  </div>
</template>

<style lang="scss" src="./assets/scss/demo.scss"></style>

<script>
import MenuGroup from '@/components/MenuGroup.vue'
export default {
  name: 'App',
  components: { MenuGroup },
  data () {
    return {
      sidebarOpen: false,
      menu: [{
        title: 'RouterTab 配置',
        data: [
          { text: '默认配置', to: '/default/' },
          { text: '初始展示页签', to: '/initial-tabs/' },
          {
            text: '语言配置',
            to: '/language/',
            children: {
              data: [
                { text: '自定义语言', to: '/language/custom' }
              ]
            }
          },
          { text: '自定义页签模板', to: '/slot/' }
        ]
      }, {
        title: '页面配置',
        data: [
          { text: '动态更新页签配置', to: '/default/tab-dynamic' },
          { text: '页面离开提示', to: '/default/page-leave' }
        ]
      }]
    }
  },

  watch: {
    // 路由切换
    $route ($route) {
      // 关闭侧边栏
      this.sidebarOpen = false
    }
  }
}
</script>
