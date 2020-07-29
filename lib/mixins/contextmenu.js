import { emptyObj } from '../util'

// 右键菜单
export default {
  data() {
    return {
      // 右键菜单
      contextData: {
        id: null,
        index: -1,
        left: 0,
        top: 0
      }
    }
  },

  computed: {
    // 菜单配置
    contextMenu() {
      if (Array.isArray(this.contextmenu)) {
        return this.contextmenu
      }
      return undefined
    }
  },

  watch: {
    // 路由切换隐藏右键菜单
    $route() {
      this.hideContextmenu()
    },

    // 监听右键菜单显示关闭
    'contextData.id'(val, old) {
      if (!old && val) {
        // 显示右键菜单，绑定点击关闭事件
        document.addEventListener(
          'click',
          (this.onClick = e => {
            if (
              e.target !== this.$el.querySelector('.router-tab-contextmenu')
            ) {
              this.hideContextmenu()
            }
          })
        )
      } else if (old && !val) {
        // 隐藏右键菜单，移除点击关闭事件
        document.removeEventListener('click', this.onClick)
      }
    }
  },

  methods: {
    // 显示页签右键菜单
    showContextmenu(id, index, e) {
      // 菜单定位
      let { clientY: top, clientX: left } = e || emptyObj
      Object.assign(this.contextData, { id, index, top, left })
    },

    // 关闭页签右键菜单
    hideContextmenu() {
      this.showContextmenu(null, -1)
    }
  }
}
