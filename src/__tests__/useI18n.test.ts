import { describe, it, expect } from 'vitest'
import { useI18n } from '../composables/useI18n'
import langs from '../config/lang'

describe('语言包', () => {
  it('导出 zh / en', () => {
    expect(langs.zh.tab.untitled).toBe('无标题')
    expect(langs.en.tab.untitled).toBe('Untitled')
  })
})

describe('useI18n', () => {
  it('lang 字符串选中对应语言', () => {
    const i = useI18n({ lang: 'zh' })
    expect(i.langs.contextmenu.refresh).toBe('刷新')
  })

  it('未知语言回退英文', () => {
    const i = useI18n({ lang: 'xx' })
    expect(i.langs.tab.untitled).toBe('Untitled')
  })

  it('lang 对象直接用', () => {
    const custom: any = { tab: { untitled: 'X' }, contextmenu: {}, msg: {} }
    const i = useI18n({ lang: custom })
    expect(i.langs.tab.untitled).toBe('X')
  })

  it('i18nText 解析 "i18n:key" 字符串式', () => {
    const i = useI18n({ lang: 'en', i18n: (key) => `T(${key})` })
    expect(i.i18nText('i18n:my.key')).toBe('T(my.key)')
  })

  it('i18nText 解析 ["key", ...params] 数组式', () => {
    const i = useI18n({ lang: 'en', i18n: (key, params) => `${key}:${(params || []).join(',')}` })
    expect(i.i18nText(['greet', 'a', 'b'])).toBe('greet:a,b')
  })

  it('普通文本原样返回', () => {
    const i = useI18n({ lang: 'en' })
    expect(i.i18nText('普通标题')).toBe('普通标题')
  })
})
