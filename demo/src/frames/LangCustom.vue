<template>
  <RouterTab :lang="customLanguage" />
</template>

<script setup lang="ts">
/** 自定义组件语言包（对照 v1 LangCustom.vue） */
const customLanguage = {
  /** 页签相关文案 */
  tab: {
    /** 未命名页签的默认标题 */
    untitled: 'Untitled Page'
  },

  /** 右键菜单文案 */
  contextmenu: {
    /** 刷新 */
    refresh: 'Refresh This',
    /** 刷新全部 */
    refreshAll: 'Refresh All',
    /** 关闭 */
    close: 'Close This',
    /** 关闭左侧 */
    closeLefts: 'Close to the Left',
    /** 关闭右侧 */
    closeRights: 'Close to the Right',
    /** 关闭其他 */
    closeOthers: 'Close Others'
  },

  /** 提示文案 */
  msg: {
    /** 最后一个页签禁止关闭的提示 */
    keepLastTab: 'Keep at least 1 tab',
    /** 未传 i18n prop 却用了 i18n key 时的告警文案 */
    i18nProp: 'Please set the i18n prop of RouterTab'
  }
}
</script>
