const PREFIX = '[vue-router-tab] '

/** 断言失败（cond 为假）时输出带前缀的警告 */
export function warn(cond: unknown, msg: string) {
  if (!cond) console.warn(PREFIX + msg)
}
