import RouterTabComp from './components/RouterTab.vue'
import RouterAlive from './components/RouterAlive.vue'
import { install } from './install'

const RouterTab = Object.assign(RouterTabComp, { install })

export default RouterTab
export { RouterTab, RouterAlive, install }
export {
  useRouteMatch,
  matchRoute,
  type RouteMatch,
  type RouteMatchInfo
} from './composables/useRouteMatch'
export { useTabs } from './composables/useTabs'
export { useRouterTab, clearAllRouterTab } from './composables/useRouterTab'
export { useRouterPage, type RouteTabInput } from './composables/useRouterPage'
export { useOperate } from './composables/useOperate'
export { useContextmenu } from './composables/useContextmenu'
export { useIframe } from './composables/useIframe'
export { useI18n } from './composables/useI18n'
export { type BuiltinMenuId } from './config/contextmenu'
export { default as RouterTabRoutes, Iframe, iframeMeta } from './config/routes'
export type {
  Tab,
  RouterTabInstance,
  RouterTabPublic,
  RouterTabInternal,
  RouterTabProps,
  RouterTabPropsInput,
  RouterTabMeta,
  RouterAliveExpose,
  PresetTab,
  PageHooks,
  PageLeaveType,
  ContextmenuItemConfig,
  ContextmenuContext,
  ContextmenuData,
  CloseArg,
  OpenArg,
  OpenFn
} from './types'
