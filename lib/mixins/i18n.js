import langs from '../config/lang' // 语言配置
import { warn } from '../util/warn'

// 国际化
export default {
  computed: {
    // 语言内容
    langs() {
      let { lang } = this

      // 自动识别浏览器语言
      if (lang === 'auto') {
        lang = (navigator.language || navigator.userLanguage).substr(0, 2)
      }

      if (typeof lang === 'string') {
        lang = langs[lang]
      }

      // 找不到语言配置，则使用英文
      if (!lang) lang = langs['en']

      return lang
    }
  },

  methods: {
    // 获取国际化内容
    i18nText(text) {
      let { key, params } = this.i18nParse(text)

      if (key) {
        const hasI18nProp = typeof this.i18n === 'function'

        // 未配置 i18n 方法则警告
        if (!this._hasI18nPropWarn) {
          warn(hasI18nProp, this.langs.msg.i18nProp)
          this._hasI18nPropWarn = true
        }

        if (hasI18nProp) {
          return this.i18n(key, params)
        }
      }

      return text
    },

    // 解析国际化
    i18nParse(text) {
      let key
      let params

      // 获取国际化配置
      if (typeof text === 'string') {
        // 字符串方式配置：'i18n:custom.lang.key'
        const res = /^i18n:([^\s]+)$/.exec(text)

        if (res) {
          key = res[1]
          params = []
        }
      } else if (Array.isArray(text)) {
        // 数组方式配置：['tab.i18n.key', 'param1', 'param2', ...]
        ;[key, ...params] = text
      }

      return { key, params }
    }
  }
}
