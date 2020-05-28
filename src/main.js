import Vue from 'vue'
import RouterTab from '../lib'

import App from './App.vue'
import router from './router'

Object.assign(Vue.config, {
  productionTip: false,
  devtools: true
})

Vue.use(RouterTab)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
