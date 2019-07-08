// 异步加载页面组件
export const importPage = view => () => import(
  /* webpackChunkName: "p-[request]" */
  `../views/${view}.vue`
)

// 异步加载路由框架
export const importFrame = view => () => import(
  /* webpackChunkName: "ly-[request]" */
  `../components/frames/${view}.vue`
)
