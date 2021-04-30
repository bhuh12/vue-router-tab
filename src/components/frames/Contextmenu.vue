<template>
  <router-tab
    :class="{ 'is-fullscreen': fullscreen }"
    :contextmenu="contextmenu"
  />
</template>

<script>
// 引入全屏混入
import fullscreen from '../../mixins/fullscreen'

export default {
  mixins: [fullscreen],

  computed: {
    // 右键菜单
    contextmenu() {
      return [
        // 使用内置菜单
        'refresh',

        // 扩展内置菜单：添加图标
        {
          id: 'close',
          icon: 'rt-icon-close'
        },

        // 扩展内置菜单：修改执行方法
        {
          id: 'closeOthers',
          handler({ $menu }) {
            $menu.closeMulti($menu.others)
            alert('关闭其他页签')
          }
        },

        // 自定义菜单
        {
          id: 'custom',
          title: '自定义操作',
          tips: '这是一个自定义操作',
          icon: 'rt-icon-doc',
          class: 'custom-action',
          // 是否显示，不提供则默认显示
          visible(context) {
            return context.$tabs.items.length < 3
          },

          // 是否启用，不提供则默认启用
          enable(context) {
            return !(context.data.index % 2)
          },

          // 点击触发
          handler(context) {
            console.log(context)
            alert('这是自定义操作，请打开控制台查看输出参数')
          }
        },

        // 拥有状态的菜单 - 全屏
        {
          id: 'fullscreen',
          title: () => (this.fullscreen ? '退出全屏' : '全屏'),
          icon: () =>
            this.fullscreen ? 'rt-icon-fullscreen-exit' : 'rt-icon-fullscreen',

          // 点击触发
          handler: () =>
            setTimeout(() => {
              this.fullscreen = !this.fullscreen
            }, 300)
        }
      ]
    }
  }
}
</script>
