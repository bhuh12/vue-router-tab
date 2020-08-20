import { warn } from '../util/warn'

// 获取关闭参数
function getCloseArgs(args) {
  args = Array.from(args)

  let argsLen = args.length
  let arg = args[0] // 首个选项

  if (!argsLen) {
    // close()
    return {}
  } else if (
    arg &&
    typeof arg === 'object' &&
    !arg.name &&
    !arg.fullPath &&
    !arg.params &&
    !arg.query &&
    !arg.hash
  ) {
    // close({id, path, match, force, to, refresh})
    return arg
  } else {
    // close(path, to)
    let [path, to] = args
    return { path, to }
  }
}

// 路径是否一致
function equalPath(path1, path2) {
  const reg = /\/$/
  return path1.replace(reg, '') === path2.replace(reg, '')
}

// 页签操作
export default {
  methods: {
    /**
     * 打开页签（默认全新打开）
     * @param {location} path 页签路径
     * @param {Boolean} [isReplace = false] 是否 replace 方式替换当前路由
     * @param {Boolean | String} [refresh = true] 是否全新打开，如果为 `sameTab` 则仅同一个页签才全新打开
     */
    async open(path, isReplace = false, refresh = true) {
      const curId = this.activeTabId
      const tarId = this.getRouteKey(path)
      const isSameTab = equalPath(curId, tarId)

      // 打开路由与当前路由相同页签才刷新
      refresh === 'sameTab' && (refresh = isSameTab)

      refresh && this.refresh(path, false)

      try {
        await this.$router[isReplace ? 'replace' : 'push'](path)
      } catch (e) {
      } finally {
        isSameTab && this.reload()
      }
    },

    // 移除 tab 项
    async removeTab(id, force = false) {
      let { items } = this
      const idx = items.findIndex(item => item.id === id)

      // 最后一个页签不允许关闭
      if (!force && this.keepLastTab && items.length === 1) {
        throw new Error(this.langs.msg.keepLastTab)
      }

      if (!force) await this.leavePage(id, 'close')

      // 承诺关闭后移除页签和缓存
      this.$alive.remove(id)
      idx > -1 && items.splice(idx, 1)
    },

    /**
     * 关闭页签
     * 支持以下方式调用：
     *   1. this.$tabs.close({id, path, match, force, to, refresh})
     *   2. this.$tabs.close(path, to)
     * @param {String} id 通过页签 id 关闭
     * @param {location} path 通过路由路径关闭页签，如果未配置 id 和 path 则关闭当前页签
     * @param {Boolean} [match = true] path 方式关闭时，是否匹配 path 完整路径
     * @param {Boolean} [force = true] 是否强制关闭
     * @param {location} to 关闭后跳转的地址，为 null 则不跳转
     * @param {Boolean} [refresh = false] 是否全新打开跳转地址
     */
    async close() {
      // 解析参数
      let {
        id,
        path,
        match = true,
        force = true,
        to,
        refresh = false
      } = getCloseArgs(arguments)

      let { activeTabId, items } = this

      // 根据 path 获取 id
      if (!id && path) {
        id = this.getIdByPath(path, match)
        if (!id) return
      }

      // 默认当前页签
      if (!id) id = activeTabId

      try {
        const idx = items.findIndex(item => item.id === id)

        // 移除页签
        await this.removeTab(id, force)

        // 为 null 不跳转
        if (to === null) return

        // 如果关闭当前页签，则打开后一个页签
        if (!to && activeTabId === id) {
          let nextTab = items[idx] || items[idx - 1]
          to = nextTab ? nextTab.to : this.defaultPath
        }

        if (to) {
          this.open(to, true, refresh === false ? 'sameTab' : true)
        }
      } catch (e) {
        warn(false, e)
      }
    },

    // 通过页签 id 关闭页签
    async closeTab(id = this.activeTabId, to, force = false) {
      this.close({ id, to, force })
    },

    /**
     * 通过路由地址刷新页签
     * @param {location} path 需要刷新的地址
     * @param {Boolean} [match = true] 是否匹配 target 完整路径
     * @param {Boolean} [force = true] 是否强制刷新
     */
    refresh(path, match = true, force = true) {
      let id = (path && this.getIdByPath(path, match)) || undefined
      this.refreshTab(id, force)
    },

    // 刷新指定页签
    async refreshTab(id = this.activeTabId, force = false) {
      try {
        if (!force) await this.leavePage(id, 'refresh')
        this.$alive.refresh(id)
      } catch (e) {
        warn(false, e)
      }
    },

    /**
     * 刷新所有页签
     * @param {Boolean} [force = false] 是否强制刷新，如果强制则忽略页面 beforePageLeave
     */
    async refreshAll(force = false) {
      const { cache } = this.$alive
      for (const id in cache) {
        try {
          if (!force) await this.leavePage(id, 'refresh')
          this.$alive.refresh(id)
        } catch (e) {}
      }
    },

    /**
     * 重置 RouterTab 到默认状态，关闭所有页签并清理缓存页签数据
     * @param {location} [to = this.defaultPath] 重置后跳转页面
     */
    reset(to = this.defaultPath) {
      // 遍历删除缓存
      this.items.forEach(({ id }) => this.$alive.remove(id))

      // 清除缓存页签
      this.clearTabsStore()

      // 初始页签数据
      this.initTabs()

      this.open(to, true, true)
    }
  }
}
