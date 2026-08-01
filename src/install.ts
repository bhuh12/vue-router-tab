import type { App } from 'vue'
import RouterTab from './components/RouterTab.vue'
import RouterAlive from './components/RouterAlive.vue'

/** 将 RouterTab 与 RouterAlive 注册为全局组件 */
export function install(app: App): void {
  app.component('RouterTab', RouterTab)
  app.component('RouterAlive', RouterAlive)
}
