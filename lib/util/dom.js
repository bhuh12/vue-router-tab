import { isDef } from './index'

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

// 是否异步占位
export function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}
