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

// 滚动
export function scrollTo($el, left = 0, top = 0) {
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
