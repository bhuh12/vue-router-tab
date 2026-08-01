import zh from './zh'
import en from './en'

/** 显式语言 map，替代 v1 的 require.context */
const langs = { zh, en }

export type Lang = typeof zh
export default langs
