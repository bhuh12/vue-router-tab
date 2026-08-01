import { computed, reactive } from 'vue'
import langs, { type Lang } from '../config/lang'
import { warn } from '../util/warn'
import type { RouterTabProps } from '../types'

/** 解析国际化配置：'i18n:key' 或 ['key', ...params] */
function i18nParse(text: unknown): { key?: string; params: any[] } {
  // 字符串式：'i18n:custom.lang.key'
  if (typeof text === 'string') {
    const res = /^i18n:(\S+)$/.exec(text)
    if (res) return { key: res[1], params: [] }
  }

  // 数组式：['tab.i18n.key', 'param1', ...]
  if (Array.isArray(text)) {
    const [key, ...params] = text
    return { key, params }
  }

  return { params: [] }
}

/** 国际化 */
export function useI18n(props: Pick<RouterTabProps, 'lang' | 'i18n'>) {
  /** 当前语言文案 */
  const current = computed<Lang>(() => {
    let lang = props.lang

    // 自动识别浏览器语言
    if (lang === 'auto') {
      lang = (navigator.language || (navigator as any).userLanguage || 'en').slice(0, 2)
    }

    if (typeof lang === 'string') return (langs as Record<string, Lang>)[lang] || langs.en

    // 对象式自定义语言
    return lang as Lang
  })

  let hasWarned = false

  /** 取国际化文本，非 i18n 配置则原样返回 */
  function i18nText(text: unknown): string {
    const { key, params } = i18nParse(text)

    if (key) {
      const hasI18n = typeof props.i18n === 'function'

      // 未配置 i18n 方法则警告一次
      if (!hasWarned) {
        warn(hasI18n, current.value.msg.i18nProp)
        hasWarned = true
      }

      if (hasI18n) return props.i18n!(key, params)
    }

    return typeof text === 'string' ? text : String(text ?? '')
  }

  return reactive({
    /** 当前语言文案 */
    langs: current,

    /** 取国际化文本（支持 i18n key 与函数） */
    i18nText
  })
}

/** I18nState：由 useI18n 返回值自动推导，避免手写 interface 与实现漂移 */
export type I18nState = ReturnType<typeof useI18n>
