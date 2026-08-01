<template>
  <div ref="rootEl" class="router-tab">
    <header class="router-tab__header">
      <div class="router-tab__slot-start"><slot name="start" /></div>

      <TabScroll ref="scrollRef" :tabs="instance">
        <transition-group tag="ul" class="router-tab__nav" v-bind="tabTrans">
          <TabItem
            v-for="(item, index) in instance.items"
            :key="item.id"
            :tabs="instance"
            :data="item"
            :index="index"
          >
            <template v-if="$slots.default" #default="scope">
              <slot v-bind="scope" />
            </template>
          </TabItem>
        </transition-group>
      </TabScroll>

      <div class="router-tab__slot-end"><slot name="end" /></div>
    </header>

    <div class="router-tab__container">
      <RouterAlive
        :keep-alive="keepAlive"
        :reuse="reuse"
        :max="maxAlive"
        :transition="typeof pageTransition === 'string' ? pageTransition : pageTrans.name"
        @ready="onAliveReady"
        @change="onAliveChange"
      />

      <transition-group v-bind="pageTrans" tag="div" class="router-tab__iframes">
        <iframe
          v-bind="iframeAttrs?.(url)"
          v-for="url in instance.iframes"
          v-show="url === instance.currentIframe"
          :key="url"
          :src="url"
          :name="IFRAME_NAME_PREFIX + url"
          frameborder="0"
          class="router-tab__iframe"
          @load="onIframeLoad(url, $event)"
          @vue:mounted="onIframeVnodeMounted(url, $event.el as HTMLIFrameElement)"
        />
      </transition-group>
    </div>

    <transition name="router-tab-zoom">
      <Contextmenu
        v-if="contextmenuEnabled && instance.contextData.index > -1"
        :tabs="instance"
        :data="instance.contextData"
        :menu="contextMenuConf"
      />
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, toRefs, onScopeDispose } from 'vue'
import { useRoute } from 'vue-router'

import { useState } from '../composables/useState'
import { useI18n } from '../composables/useI18n'
import { useTabs } from '../composables/useTabs'
import { usePageLeave, installGuard } from '../composables/usePageLeave'
import { useOperate } from '../composables/useOperate'
import { useRestore, installRestore } from '../composables/useRestore'
import { useContextmenu, installContextmenu } from '../composables/useContextmenu'
import { useIframe, IFRAME_NAME_PREFIX } from '../composables/useIframe'
import { useTabScroll } from '../composables/useTabScroll'
import { setRouterTab, clearRouterTab } from '../composables/useRouterTab'
import { getTransOpt } from '../util'

import RouterAlive from './RouterAlive.vue'
import TabItem from './TabItem.vue'
import TabScroll from './TabScroll.vue'
import Contextmenu from './Contextmenu.vue'

import type { RouterTabInstance, RouterTabPropsInput, RouterAliveExpose, Tab } from '../types'
import type { ScrollExpose } from '../composables/useTabScroll'
import type { RouteMatch } from '../composables/useRouteMatch'

const props = withDefaults(defineProps<RouterTabPropsInput>(), {
  tabs: () => [],
  restore: false,
  restoreWatch: false,
  append: 'last',
  keepLastTab: true,
  dragsort: true,
  keepAlive: true,
  maxAlive: 0,
  reuse: false,
  tabTransition: 'router-tab-zoom',
  pageTransition: () => ({ name: 'router-tab-swap', mode: 'out-in' }),
  contextmenu: true,
  lang: 'auto',
  pageScroller: '.router-tab__container'
})

const emit = defineEmits<{
  /** iframe 节点挂载完成 */
  'iframe-mounted': [url: string, el: HTMLIFrameElement]

  /** iframe 内容加载完成 */
  'iframe-loaded': [url: string, el: HTMLIFrameElement]
}>()

defineSlots<{
  /** 页签栏左侧 */
  start(): any

  /** 页签栏右侧 */
  end(): any

  /** 自定义页签内容 */
  default(scope: { tab: Tab; closable: boolean }): any
}>()

/** RouterTab 根元素（iframe 定位、滚动计算的范围，多实例互不干扰） */
const rootEl = ref<HTMLElement | null>(null)

/** TabScroll 组件实例 */
const scrollRef = ref<ScrollExpose | null>(null)

const route = useRoute()

// 根状态（items/activeTabId/activeTab/$alive/pages/onDragSort）
const state = useState()

// i18n
const i18n = useI18n(props)

// 右键菜单状态（无依赖）
const ctxmenu = useContextmenu()

// 页面离开确认（拓扑起点，只依赖 state）
const pageLeave = usePageLeave(state)

// 页签原语
const tabs = useTabs(state, props, i18n, pageLeave)

/** 页签组件所在根路径（依赖 routeMatch，$alive ready 后才可用；跨模块派生值不入 state，按需 getter 传入） */
const basePath = computed(() => (state.$alive ? tabs.matchRoute(route).basePath : '/'))

// 恢复
const restore = useRestore(
  state,
  props,
  {
    get basePath() {
      return basePath.value
    }
  },
  tabs
)

/** 初始页签：restore 优先，否则用 props.tabs 预设 */
function initTabs() {
  tabs.initTabs(props.tabs, restore.restoreTabs)
}

// 命令式 API
const ops = useOperate(
  state,
  {
    get defaultPath() {
      return props.defaultPage || basePath.value || '/'
    },
    initTabs
  },
  tabs,
  pageLeave,
  restore
)

// iframe（依赖 ops.close/refresh）
const iframe = useIframe(
  {
    get basePath() {
      return basePath.value
    }
  },
  ops,
  rootEl
)

// 页签滚动（adjust 供用户主动重算，如全屏切换后）
const { adjust } = useTabScroll(state, ctxmenu, scrollRef, rootEl)

// iframe 状态转 ref（方法不参与 toRefs，避免被包成 Ref<fn>）
const iframeRefs = toRefs(iframe)

/** 页签过渡属性 */
const tabTrans = computed(() => getTransOpt(props.tabTransition))

/** 页面过渡属性 */
const pageTrans = computed(() => getTransOpt(props.pageTransition))

/** 自定义菜单项配置（prop 为布尔时用内置默认菜单） */
const contextMenuConf = computed(() =>
  Array.isArray(props.contextmenu) ? props.contextmenu : undefined
)

/** 是否启用右键菜单（对应 prop contextmenu !== false） */
const contextmenuEnabled = computed(() => props.contextmenu !== false)

/** RouterAlive 就绪：存实例并初始化页签（页签初始化需 $alive 已可用） */
function onAliveReady(alive: RouterAliveExpose) {
  state.$alive = alive
  initTabs()
}

/** RouterAlive 页面创建/更新：同步页签数据 */
function onAliveChange(type: 'create' | 'update', match: RouteMatch) {
  tabs.syncFromAlive(type, match, route)
}

/** iframe 挂载：emit url + DOM 元素 */
function onIframeVnodeMounted(url: string, el: HTMLIFrameElement) {
  emit('iframe-mounted', url, el)
}

/** iframe 加载完成：emit url + DOM 元素 */
function onIframeLoad(url: string, e: Event) {
  emit('iframe-loaded', url, e.target as HTMLIFrameElement)
}

// 对外实例：聚合 state + 各 composable，供 useRouterTab() 取用。
// props 镜像用 getter 透传，展开会拷成 setup 期快照丢响应性（本项目踩过三次）。
const instance = reactive({
  // 根状态：逐字段 toRefs 保响应性（外层 reactive 解包后消费方免 .value）
  ...toRefs(state),

  // 命令式 API：全部在对外契约内，整体展开
  ...ops,

  // 页签原语：只挑契约内的三个（presetTabs/syncFromAlive 等属内部实现，不外泄）
  getRouteKey: tabs.getRouteKey,
  getIdByPath: tabs.getIdByPath,
  removeTab: tabs.removeTab,

  // iframe：只挑契约内字段（getIframePath 属内部拼路径实现，整体展开会外泄）
  iframes: iframeRefs.iframes,
  currentIframe: iframeRefs.currentIframe,
  openIframe: iframe.openIframe,
  closeIframe: iframe.closeIframe,
  refreshIframe: iframe.refreshIframe,
  reloadIframe: iframe.reloadIframe,

  // 右键菜单
  contextData: ctxmenu.contextData,
  showContextmenu: ctxmenu.showContextmenu,
  hideContextmenu: ctxmenu.hideContextmenu,

  langs: computed(() => i18n.langs),
  i18nText: i18n.i18nText,
  basePath,
  adjust,

  get keepLastTab() {
    return props.keepLastTab
  },
  get dragsort() {
    return props.dragsort
  },
  get pageScroller() {
    return props.pageScroller
  }
}) as RouterTabInstance

// 注册实例（按 tabId 多实例）+ 安装守卫/恢复/菜单
setRouterTab(instance, props.tabId)
installGuard(
  state,
  {
    get basePath() {
      return basePath.value
    }
  },
  tabs,
  pageLeave
)
installRestore(state, props, { initTabs }, restore)
installContextmenu(state, ctxmenu, rootEl)

onScopeDispose(() => clearRouterTab(instance, props.tabId))
</script>

<style lang="scss">
@use '../scss/variables';
@use '../scss/routerTab';
@use '../scss/transition';
</style>
