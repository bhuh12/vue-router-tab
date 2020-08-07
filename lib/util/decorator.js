/* 装饰器 */

/**
 * 防抖
 * @param {number} [delay=200] 延迟
 */
export const debounce = (delay = 200) => (target, name, desc) => {
  const fn = desc.value
  let timeout = null

  desc.value = function(...rest) {
    let context = this
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      fn.call(context, ...rest)
    }, delay)
  }
}
