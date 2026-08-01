import type { RouterTabInstance, RouterTabPublic } from '../types'

/** tabId → 当前 RouterTab 实例（默认实例用 undefined key），由 RouterTab.vue setup 注册 */
const registry = new Map<string | undefined, RouterTabInstance>()

/** 注册当前 RouterTab 实例（RouterTab.vue 内部调用，按 tabId 存） */
export function setRouterTab(instance: RouterTabInstance, tabId?: string): void {
  registry.set(tabId, instance)
}

/** 清空实例（仅当仍是该实例时），供组件卸载时调用 */
export function clearRouterTab(instance: RouterTabInstance, tabId?: string): void {
  if (registry.get(tabId) === instance) registry.delete(tabId)
}

/** 清空所有 RouterTab 实例（多实例场景清理 / 测试隔离用） */
export function clearAllRouterTab(): void {
  registry.clear()
}

/** 获取 RouterTab 实例（未传 tabId 取默认实例）；无匹配实例时抛错 */
export function useRouterTab(tabId?: string): RouterTabPublic {
  const instance = registry.get(tabId)
  if (!instance) throw new Error('[vue-router-tab] useRouterTab() 需在挂载了 RouterTab 后调用')
  return instance
}
