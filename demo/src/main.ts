import { createApp } from 'vue'
import RouterTab from 'vue-router-tab'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.use(RouterTab)
app.mount('#app')
