<template>
  <RouterTab
    :iframe-attrs="getIframeAttrs"
    @iframe-mounted="iframeMounted"
    @iframe-loaded="iframeLoaded"
  />
</template>

<script setup lang="ts">
/** iframe 挂载（对照 v1）；第二参为 iframe DOM 元素 */
function iframeMounted(url: string, el: HTMLIFrameElement) {
  console.log('[iframe-mounted]', url, el.tagName)
}

/** iframe 加载完成（对照 v1）；第二参为 iframe DOM 元素 */
function iframeLoaded(url: string, el: HTMLIFrameElement) {
  console.log('[iframe-loaded]', url, el.tagName)
}

/** 按 url 返回 iframe 额外属性与事件（v1 无此能力） */
function getIframeAttrs(url: string) {
  return {
    sandbox: 'allow-scripts allow-same-origin allow-forms',
    referrerpolicy: 'no-referrer',

    // 用户自己的 onLoad，与组件 iframe-loaded 事件并存、都会触发
    onLoad: () => console.log('[iframeAttrs.onLoad]', url),

    onError: (e: Event) => console.error('[iframeAttrs.onError]', url, e)
  }
}
</script>
