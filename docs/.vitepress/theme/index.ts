import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'

import DemoLink from '../components/DemoLink.vue'
import DocLinks from '../components/DocLinks.vue'

import './custom.scss'

// VitePress 不像 VuePress 那样按目录约定自动注册组件，须显式注册
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('DemoLink', DemoLink)
    app.component('DocLinks', DocLinks)
  }
} satisfies Theme
