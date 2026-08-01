import { ref, reactive, type Ref } from 'vue'
import { useRouter } from 'vue-router'
import type { OperateState } from './useOperate'

/** iframe name 前缀（供 RouterTab 容器定位 iframe 节点） */
export const IFRAME_NAME_PREFIX = 'RouterTabIframe-'

/** iframe 页签 */
export function useIframe(
  /** 基础配置 */
  options: {
    /** 根路径（拼 iframe 路由地址，getter 保响应性） */
    basePath: string
  },
  /** 命令式 API（close/refresh） */
  ops: OperateState,
  /** RouterTab 根元素（在其内定位 iframe 节点，避免多实例互相命中） */
  rootEl: Ref<HTMLElement | null>
) {
  const router = useRouter()

  /** 已挂载的 iframe url 列表 */
  const iframes = ref<string[]>([])
  /** 当前显示的 iframe url */
  const currentIframe = ref<string | null>(null)

  /** 拼接 iframe 页签路由路径 */
  function getIframePath(src: string, title?: string, icon?: string) {
    let path = `${options.basePath}/iframe/`.replace(/\/+/g, '/') + encodeURIComponent(src)
    if (title) {
      path += '/' + title
      if (icon) path += '/' + icon
    }
    return path
  }

  /** 打开 iframe 页签 */
  function openIframe(src: string, title?: string, icon?: string) {
    router.push(getIframePath(src, title, icon))
  }

  /** 关闭 iframe 页签 */
  async function closeIframe(src: string) {
    await ops.close({ path: getIframePath(src), match: false })
  }

  /** 刷新 iframe 页签 */
  function refreshIframe(src: string) {
    ops.refresh(getIframePath(src), false)
  }

  /**
   * 重新加载已挂载的 iframe 节点（节点不存在则静默跳过，即首次打开无需重载）。
   *
   * 刷新页签只重挂 Iframe 页面组件，容器里的 `<iframe>` 按 `:key="url"` 被 Vue 复用，
   * src 未变则不会重新加载（F-02 根因）。改 key 强制重建则会让 transition-group 的
   * 离场节点因 `display: none` 收不到 transitionend 而永不移除、每次刷新泄漏一个节点，
   * 故走「重置 src」触发浏览器原生重载：同值赋值即可重载，且不受跨域限制
   * （`contentWindow.location.reload()` 跨域会抛 SecurityError）。
   */
  function reloadIframe(url: string) {
    const el = rootEl.value?.querySelector<HTMLIFrameElement>(
      `iframe[name="${CSS.escape(IFRAME_NAME_PREFIX + url)}"]`
    )
    if (!el) return
    const src = el.src
    el.src = src
  }

  return reactive({
    /** 已挂载的 iframe url 列表 */
    iframes,

    /** 当前显示的 iframe url */
    currentIframe,

    /** 拼接 iframe 页签路由路径 */
    getIframePath,

    /** 打开 iframe 页签 */
    openIframe,

    /** 关闭 iframe 页签 */
    closeIframe,

    /** 刷新 iframe 页签 */
    refreshIframe,

    /** 重新加载已挂载的 iframe 节点 */
    reloadIframe
  })
}

/** IframeState：由 useIframe 返回值自动推导，避免手写 interface 与实现漂移 */
export type IframeState = ReturnType<typeof useIframe>
