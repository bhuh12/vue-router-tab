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
