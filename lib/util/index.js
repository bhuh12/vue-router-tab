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
