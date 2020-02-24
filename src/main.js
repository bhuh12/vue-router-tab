import Vue from 'vue'
import RouterTab from '../lib'

import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// Demo 演示开启开发工具
Vue.config.devtools = true

Vue.use(RouterTab)

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
