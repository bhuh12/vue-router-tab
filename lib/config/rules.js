import { prunePath } from '../util'

// 内置规则
export default {
  // 地址，params 不一致则独立缓存
  path: route => route.path,

  // 完整地址 (忽略 hash)，params 或 query 不一致则独立缓存
  fullpath: route => prunePath(route.fullPath)
}
