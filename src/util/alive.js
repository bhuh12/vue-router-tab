import rules from './rules'

// 获取缓存 id
export function getAliveId (route = this.$route) {
  let rule = (route.meta && route.meta.aliveId) || this.aliveId

  if (typeof rule === 'string') {
    rule = rules[rule.toLowerCase()]
  }

  if (typeof rule !== 'function') {
    rule = rules.path
  }

  return rule.bind(this)(route)
}
