const prefix = '[vue-router-tab]'

// 错误
export function assert (condition, message) {
  if (!condition) {
    throw new Error(`${prefix} ${message}`)
  }
}

// 警告
export function warn (condition, message) {
  if (process.env.NODE_ENV !== 'production' && !condition) {
    typeof console !== 'undefined' && console.warn(`${prefix} ${message}`)
  }
}
