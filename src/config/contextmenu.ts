import { isLastKeptTab } from '../util'

import type { ContextmenuItemConfig } from '../types'

/** 内置菜单项（handler 入参为 ContextmenuContext） */
const menuMap: Record<string, ContextmenuItemConfig> = {
  // 刷新
  refresh: {
    handler: ({ $tabs, data }) => $tabs.refreshTab(data.id ?? undefined)
  },

  // 刷新全部
  refreshAll: {
    handler: ({ $tabs }) => $tabs.refreshAll()
  },

  // 关闭
  close: {
    // 复用 removeTab 的同一判定：keepLastTab 下剩最后一个页签时关不掉，
    // 直接禁用而非等点击后抛错
    enable: ({ $tabs, target }) =>
      !!target?.closable && !isLastKeptTab($tabs.keepLastTab, $tabs.items.length),
    handler: ({ $tabs, data }) => $tabs.closeTab(data.id ?? undefined)
  },

  // 关闭左侧
  closeLefts: {
    enable: ({ lefts }) => lefts.length > 0,
    handler: ({ lefts, closeMulti }) => closeMulti(lefts)
  },

  // 关闭右侧
  closeRights: {
    enable: ({ rights }) => rights.length > 0,
    handler: ({ rights, closeMulti }) => closeMulti(rights)
  },

  // 关闭其他
  closeOthers: {
    enable: ({ others }) => others.length > 0,
    handler: ({ others, closeMulti }) => closeMulti(others)
  }
}

// 填充 id
Object.entries(menuMap).forEach(([id, item]) => (item.id = id))

export default menuMap

/** 内置菜单项 id 字面量联合类型 */
export type BuiltinMenuId =
  | 'refresh'
  | 'refreshAll'
  | 'close'
  | 'closeLefts'
  | 'closeRights'
  | 'closeOthers'

/** 默认菜单顺序 */
export const defaultMenu: BuiltinMenuId[] = [
  'refresh',
  'refreshAll',
  'close',
  'closeLefts',
  'closeRights',
  'closeOthers'
]
