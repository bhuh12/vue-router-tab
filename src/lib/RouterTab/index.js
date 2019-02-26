import RouterPage from './mixins/RouterPage'
import RouterTab from './components/RouterTab.vue'

// 安装
RouterTab.install = function install (Vue, options) {
  if (install.installed) return
  install.installed = true

  Vue.component(RouterTab.name, RouterTab)
  Vue.mixin(RouterPage)
}

// 如果浏览器环境且拥有全局Vue，则自动安装组件
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(RouterTab)
}

export default RouterTab
