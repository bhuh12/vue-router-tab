/**
 * 是否因 keepLastTab 而关不掉（单一判定，供 removeTab 拦截与菜单项禁用共用，
 * 两处各写一遍会漂成「菜单可点但关不掉」）。
 */
export function isLastKeptTab(
  /** keepLastTab 配置 */
  keepLastTab: boolean,
  /** 当前页签总数 */
  count: number
): boolean {
  return keepLastTab && count === 1
}

/**
 * 去掉 hash，保留 path 与 query（对齐 v1 `path.split('#')[0]`）。
 * query 必须保留：alivePath 靠它区分「同 key 但 query 不同」的页签地址替换，
 * 一并去掉会让 leaveGuard 的 replace 分支永不成立。
 */
export function prunePath(path: string): string {
  return path.replace(/#.*$/, '')
}

/** 从数组原地移除首个匹配项，返回该数组 */
export function remove<T>(arr: T[], item: T): T[] {
  const i = arr.indexOf(item)
  if (i > -1) arr.splice(i, 1)
  return arr
}

/** 把 transition 配置归一成 <transition> 属性对象 */
export function getTransOpt(trans?: string | Record<string, any>): Record<string, any> {
  return typeof trans === 'string' ? { name: trans } : { ...trans }
}

/** 防抖：返回包装函数，delay 内多次调用只执行最后一次 */
export function debounce<T extends (...args: any[]) => any>(fn: T, delay = 200) {
  let timer: ReturnType<typeof setTimeout> | null = null
  return function (this: any, ...args: Parameters<T>) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => fn.apply(this, args), delay)
  }
}

/** 滚动到指定位置 */
export function scrollTo(opts: {
  wrap: Element | null
  left?: number
  top?: number
  smooth?: boolean
}) {
  const { wrap, left = 0, top = 0, smooth = true } = opts
  if (!wrap) return

  if ((wrap as HTMLElement).scrollTo) {
    ;(wrap as HTMLElement).scrollTo({ left, top, behavior: smooth ? 'smooth' : 'auto' })
  } else {
    wrap.scrollLeft = left
    wrap.scrollTop = top
  }
}

/** 元素滚动到可视区域 */
export function scrollIntoView(opts: {
  el: HTMLElement | null
  wrap: HTMLElement | null
  block?: ScrollLogicalPosition
  inline?: ScrollLogicalPosition
}) {
  const { el, wrap, block = 'start', inline = 'nearest' } = opts
  if (!el || !wrap) return

  if (el.scrollIntoView) {
    el.scrollIntoView({ behavior: 'smooth', block, inline })
  } else {
    scrollTo({ wrap, left: el.offsetLeft, top: el.offsetTop })
  }
}

/** 归一化 pageScroller 配置为 selector 数组（字符串按逗号切分，对齐 v1） */
export function normalizeScrollers(input?: string | string[]): string[] {
  if (!input) return []
  const arr = Array.isArray(input) ? input : input.split(/\s?,\s?/)
  return arr.filter(Boolean)
}

/** 解析滚动容器选择器为元素：$ 前缀查 document（组件外部选择器），否则在页面根元素内查 */
export function resolveScroller(selector: string, root: HTMLElement | null): Element | null {
  if (selector.startsWith('$')) return document.querySelector(selector.slice(1))
  return root?.querySelector(selector) ?? null
}

/** 获取滚动条宽度（缓存） */
let scrollbarWidth: number | null = null
export function getScrollbarWidth(): number {
  if (scrollbarWidth !== null) return scrollbarWidth

  const div = document.createElement('div')
  div.style.cssText = 'width:100px;height:100px;overflow-y:scroll'
  document.body.appendChild(div)
  scrollbarWidth = div.offsetWidth - div.clientWidth
  div.parentElement?.removeChild(div)
  return scrollbarWidth
}
