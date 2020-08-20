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
      return Array.isArray(this.contextmenu) ? this.contextmenu : undefined
    }
  },

  watch: {
    // 路由切换隐藏右键菜单
    $route() {
      this.hideContextmenu()
    },

    // 拖拽排序隐藏右键菜单
    onDragSort() {
      this.hideContextmenu()
    }
  },

  mounted() {
    // 显示右键菜单，绑定点击关闭事件
    document.addEventListener('click', this.contextmenuClickOutSide)
  },

  destroyed() {
    // 隐藏右键菜单，移除点击关闭事件
    document.removeEventListener('click', this.contextmenuClickOutSide)
  },

  methods: {
    // 显示页签右键菜单
    async showContextmenu(id, index, e) {
      // 关闭已打开的菜单
      if (id !== null && this.contextData.id !== null) {
        this.hideContextmenu()
        await this.$nextTick()
      }

      // 菜单定位
      let { clientY: top, clientX: left } = e || emptyObj
      Object.assign(this.contextData, { id, index, top, left })
    },

    // 关闭页签右键菜单
    hideContextmenu() {
      this.showContextmenu(null, -1)
    },

    // 菜单外部点击关闭
    contextmenuClickOutSide(e) {
      if (e.target !== this.$el.querySelector('.router-tab-contextmenu')) {
        this.hideContextmenu()
      }
    }
  }
}
