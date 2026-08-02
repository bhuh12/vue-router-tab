<template>
  <RouterTab :i18n="i18n" :tabs="tabs" />
</template>

<script setup lang="ts">
import { ref, computed, provide } from 'vue'

import { LANG_KEY, type LangSwitcher } from './I18n.shared'

/** 语言包（对照 v1 frames/I18n.vue） */
const langs: Record<string, Record<string, string>> = {
  en: { i18n: 'I18n Page', page: 'Page {0}' },
  zh: { i18n: '国际化页面', page: '页面 {0}' }
}

/** 当前语言 */
const currentLang = ref('en')

/** 当前语言文案 */
const lang = computed(() => langs[currentLang.value] || langs.en)

/** 初始页签，标题用 i18n key 数组式 */
const tabs = [
  '/i18n/lang',
  { to: '/i18n/page/1', title: ['page', 1] },
  { to: '/i18n/page/2', title: ['page', 2] }
]

/** 翻译函数（对照 v1，支持 {0} 占位符） */
function i18n(key: string, params: any[] = []) {
  const text = lang.value[key]
  return text ? text.replace(/\{(\d+)\}/g, (_m, i) => params[i] ?? '') : key
}

/** 语言切换器（替代 v1 Vue.prototype.$lang），provide 给子页面 */
const switcher: LangSwitcher = {
  set: (l) => (currentLang.value = l),
  get: () => currentLang.value,
  list: () => Object.keys(langs)
}
provide(LANG_KEY, switcher)
</script>
