// 内置规则
const rules = {
  // 地址，例如："/page/1?type=a#title" 则取 "/page/1"
  path (route) {
    return route.path
  },

  // 完整地址 (忽略hash)，例如："/page/1?type=a#title" 则取 "/page/1?type=a"
  fullpath (route) {
    return route.fullPath.replace(route.hash, '')
  }
}

// 页签缓存规则
export default {
  props: {
    // 缓存id，如果为函数，则参数为route
    aliveId: {
      type: [ String, Function ],
      default: 'path'
    }
  },

  methods: {
    // 获取缓存 id
    getAliveId (route = this.$route) {
      let rule = (route.meta && route.meta.aliveId) || this.aliveId

      if (typeof rule === 'string') {
        rule = rules[rule.toLowerCase()]
      }

      if (typeof rule !== 'function') {
        rule = rules.path
      }

      return rule.bind(this)(route)
    }
  }
}
