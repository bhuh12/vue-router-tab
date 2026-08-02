import type { InjectionKey } from 'vue'

/** 语言切换器（替代 v1 Vue.prototype.$lang，供 I18n frame 与 I18nPage 共享） */
export interface LangSwitcher {
  /** 切换到指定语言 */
  set: (lang: string) => void

  /** 取当前语言 */
  get: () => string

  /** 取所有可选语言 */
  list: () => string[]
}

/** 语言切换器注入 key */
export const LANG_KEY: InjectionKey<LangSwitcher> = Symbol('demo-lang')
