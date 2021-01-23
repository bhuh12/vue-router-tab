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

// 获取滚动条宽度
export const getScrollbarWidth = (function() {
  let width = null

  return function() {
    if (width !== null) return width

    const div = document.createElement('div')

    div.style.cssText = 'width: 100px; height: 100px;overflow-y: scroll'
    document.body.appendChild(div)
    width = div.offsetWidth - div.clientWidth
    div.parentElement.removeChild(div)

    return width
  }
})()

/**
 * 提取计算属性
 * @export
 * @param {String} origin 来源属性
 * @param {Array|Object} props 需要提取的计算属性
 * @param {String} context 来源选项为 function 时的入参
 * @returns {Object}
 */
export function mapGetters(origin, props, context) {
  const map = {}

  const each = (prop, option) => {
    if (option === null || typeof option !== 'object') {
      option = { default: option }
    }

    const { default: def, alias } = option

    map[alias || prop] = function() {
      const val = this[origin][prop]
      if (context && typeof val === 'function') {
        // 函数返回
        return val(this[context])
      } else if (def !== undefined && val === undefined) {
        // 默认值
        if (typeof def === 'function') {
          return def.bind(this)()
        }
        return def
      }
      return val
    }
  }

  if (Array.isArray(props)) {
    props.forEach(prop => each(prop))
  } else {
    Object.entries(props).forEach(([prop, def]) => each(prop, def))
  }

  return map
}

// 去除路径中的 hash
export const prunePath = path => path.split('#')[0]

// 解析过渡配置
export function getTransOpt(trans) {
  return typeof trans === 'string' ? { name: trans } : trans
}

// 获取组件 id
export function getCtorId(vm) {
  return vm.$vnode.componentOptions.Ctor.cid
}
