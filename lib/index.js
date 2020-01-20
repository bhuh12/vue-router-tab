import RouterTab from './components/RouterTab/RouterTab.vue'
import RouterAlive from './components/RouterAlive'
import routerPage from './mixins/routerPage'
import routes from './util/routes'

// 安装
RouterTab.install = function install (Vue, options) {
  if (install.installed) return
  install.installed = true

  Vue.component(RouterTab.name, RouterTab)
  Vue.component(RouterAlive.name, RouterAlive)
  Vue.mixin(routerPage)
}

// 如果浏览器环境且拥有全局Vue，则自动安装组件
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(RouterTab)
}

export default RouterTab

// 路由
export const RouterTabRoutes = routes
