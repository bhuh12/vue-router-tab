// 异步加载页面组件
export const importPage = view => () =>
  import(
    /* webpackChunkName: "p-[request]" */
    '../views/' + view + '.vue'
  )
