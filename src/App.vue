<template>
  <div class="app-ct">
    <header class="app-hd">
      <h2>
        <strong>Vue Router Tab</strong> - Demo
      </h2>
    </header>

    <div class="app-bd">
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
          { text: '动态页签配置', to: '/default/tab-dynamic' },
          { text: '页面离开提示', to: '/default/page-leave' },
          { text: '页签操作', to: '/default/tab-operate' }
        ]
      }]
    }
  }
}
</script>
