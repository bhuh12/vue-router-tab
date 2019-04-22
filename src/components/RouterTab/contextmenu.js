import { emptyObj, emptyArray } from '../../util'

// 右键菜单
export default {
  data () {
    return {
      // 右键菜单
      contextmenu: {
        id: null,
        index: -1,
        left: 0,
        top: 0
      }
    }
  },

  computed: {
    // 右键菜单是否当前页签
    isContextTabActived () {
      return this.contextmenu.id === this.activedTab
    },

    // 右键页签是否允许关闭
    isContextTabCanBeClosed () {
      let { items, contextmenu } = this
      let contextTab = items[contextmenu.index]
      return items.length > 1 && contextTab && contextTab.closable !== false
    },

    // 左侧可关闭的页签
    tabsLeft () {
      let { items, contextmenu: { id, index } } = this
      return id ? items.slice(0, index).filter(({ closable }) => closable !== false) : emptyArray
    },

    // 左侧可关闭的页签
    tabsRight () {
      let { items, contextmenu: { id, index } } = this
      return id ? items.slice(index + 1).filter(({ closable }) => closable !== false) : emptyArray
    },

    // 其他可关闭的页签
    tabsOther () {
      let { items, contextmenu: { id } } = this
      return id ? items.filter(({ closable, id: tid }) => closable !== false && id !== tid) : emptyArray
    }
  },

  watch: {
    // 路由切换更新激活的页签
    $route ($route) {
      this.hideContextmenu()
    },

    // 监听右键菜单显示关闭
    'contextmenu.id' (val, old) {
      if (!old && val) {
        // 显示右键菜单，绑定点击关闭事件
        document.addEventListener('click', this.onClick = (e) => {
          if (e.target !== this.$el.querySelector('.router-tab-contextmenu')) {
            this.hideContextmenu()
          }
        })
      } else if (old && !val) {
        // 隐藏右键菜单，移除点击关闭事件
        document.removeEventListener('click', this.onClick)
      }
    }
  },

  methods: {
    // 显示页签右键菜单
    showContextmenu (id, index, e) {
      // 菜单定位
      let { clientY: top, clientX: left } = e || emptyObj
      Object.assign(this.contextmenu, { id, index, top, left })
    },

    // 关闭页签右键菜单
    hideContextmenu () {
      this.showContextmenu(null, -1)
    },

    // 关闭多个页签
    async closeMulti (tabs) {
      let { items, $router, contextmenu } = this
      let nextTab = items.find(({ id }) => id === contextmenu.id)

      for (let { id } of tabs) {
        try {
          await this.removeTab(id)
        } catch (e) {}
      }

      // 当前页签如已关闭，则打开右键选中页签
      if (items.findIndex(({ id }) => id === this.activedTab) === -1) {
        $router.replace(nextTab.to)
      }
    }
  }
}
