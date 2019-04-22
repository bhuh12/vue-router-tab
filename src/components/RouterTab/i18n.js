// 语言配置
import langs from '../../lang'

// 国际化
export default {
  props: {
    // 语言配置
    // - 为字符串时，可以设置为内置的语言 'zh-CN' (默认) 和 'en'
    // - 为对象时，可设置自定义的语言
    i18n: {
      type: [ String, Object ],
      default: 'zh-CN'
    }
  },

  computed: {
    // 语言内容
    lang () {
      let lang = null
      let i18n = this.i18n

      if (typeof i18n === 'string') {
        lang = langs[i18n]
      } else if (typeof i18n === 'object') {
        lang = i18n
      }

      // 找不到语言配置，则使用英文
      if (!lang) lang = langs['en']

      return lang
    }
  }
}
