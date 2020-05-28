const prefix = '[Vue Router Tab]'

// 错误
export function assert(condition, message) {
  if (!condition) {
    throw new Error(`${prefix} ${message}`)
  }
}

// 警告
export function warn(condition, message) {
  if (!condition) {
    typeof console !== 'undefined' && console.warn(`${prefix} ${message}`)
  }
}

// 常用消息
export const messages = {
  renamed(newName, target = '方法') {
    return `该${target}已更名为“${newName}”，请修改后使用`
  }
}
