// 空对象和数组
export const emptyObj = Object.create(null)
export const emptyArray = []

// 从数组删除项
export function remove(arr, item) {
  if (arr.length) {
    const index = arr.indexOf(item)
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

// 防抖
export function debounce(fn, delay = 200) {
  let timeout = null
  return function() {
    let context = this
    let args = arguments
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      fn.call(context, args)
    }, delay)
  }
}

/**
 * 滚动到指定位置
 * @export
 * @param {Element} wrap 滚动区域
 * @param {number} [left=0]
 * @param {number} [top=0]
 */
export function scrollTo({ wrap, left = 0, top = 0, smooth = true }) {
  if (!wrap) return

  if (wrap.scrollTo) {
    wrap.scrollTo({
      left,
      top,
      behavior: smooth ? 'smooth' : 'auto'
    })
  } else {
    wrap.scrollLeft = left
    wrap.scrollTop = top
  }
}

/**
 * 指定元素滚动到可视区域
 * @export
 * @param {Element} el 目标元素
 * @param {Element} wrap 滚动区域
 * @param {String} block 垂直方向的对齐，可选：'start', 'center', 'end', 或 'nearest'
 * @param {String} inline 水平方向的对齐，可选值同上
 */
export function scrollIntoView({
  el,
  wrap,
  block = 'start',
  inline = 'nearest'
}) {
  if (!el || !wrap) return

  if (el.scrollIntoView) {
    el.scrollIntoView({ behavior: 'smooth', block, inline })
  } else {
    let { offsetLeft, offsetTop } = el
    let left, top

    if (block === 'center') {
      top = offsetTop + (el.clientHeight - wrap.clientHeight) / 2
    } else {
      top = offsetTop
    }

    if (inline === 'center') {
      left = offsetLeft + (el.clientWidth - wrap.clientWidth) / 2
    } else {
      left = offsetLeft
    }

    scrollTo({ wrap, left, top })
  }
}

// 提取计算属性
export function mapGetters(prop, keys) {
  const map = {}

  keys.forEach(key => {
    map[key] = function() {
      return this[prop][key]
    }
  })

  return map
}

// 去除路径中的 hash
export const prunePath = path => path.split('#')[0]

// 解析过渡配置
export function getTransOpt(trans) {
  return typeof trans === 'string' ? { name: trans } : trans
}
