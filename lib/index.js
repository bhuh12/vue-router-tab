import RouterTab from './components/RouterTab/RouterTab.vue'
import RouterAlive from './components/RouterAlive.vue'
import RouterTabRoutes from './util/routes'
import routerPage from './mixins/routerPage'

// 安装
RouterTab.install = function install(Vue, options) {
  if (install.installed) return

  RouterTab.Vue = Vue
  install.installed = true

  Vue.component(RouterTab.name, RouterTab)
  Vue.mixin(routerPage)
}

// 如果浏览器环境且拥有全局Vue，则自动安装组件
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(RouterTab)
}

export default RouterTab

// 导出
export { RouterAlive, RouterTabRoutes }
