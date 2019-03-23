import rules from './rules'

// 空对象和数组
export const emptyObj = Object.create(null)
export const emptyArray = []

// 是否定义
export function isDef (v) {
  return v !== undefined && v !== null
}

// 防抖
export function debounce (fn, delay = 200) {
  let timeout = null
  return function () {
    let context = this
    let args = arguments
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      fn.call(context, args)
    }, delay)
  }
}

// 滚动
export function scrollTo ($el, left = 0, top = 0) {
  if ($el.scrollTo) {
    $el.scrollTo({
      left,
      top,
      behavior: 'smooth'
    })
  } else {
    $el.scrollLeft = left
    $el.scrollTop = top
  }
}

/* 组件方法 */

// 获取第一个子组件
export function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (let i = 0; i < children.length; i++) {
      const c = children[i]
      if (
        isDef(c) &&
        (isDef(c.componentOptions) || isAsyncPlaceholder(c))
      ) {
        return c
      }
    }
  }
}

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

/* 路由方法 */

// 是否异步占位
export function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

// 获取路由不带hash的路径
export function getPathWithoutHash (route) {
  return route.hash
    ? route.fullPath.replace(route.hash, '')
    : route.fullPath
}

// 是否相似路由
export function isAlikeRoute (route1, route2) {
  return getPathWithoutHash(route1) === getPathWithoutHash(route2)
}

// 获取路由页面组件
export function getRouteComponent ({ matched }) {
  return matched[matched.length - 1].components.default
}

// 路由是否共用组件
export function isSameComponentRoute (route1, route2) {
  return getRouteComponent(route1) === getRouteComponent(route2)
}
