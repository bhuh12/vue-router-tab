export const importPage = view => () => import(/* webpackChunkName: "p-[request]" */ `./views/${view}.vue`)

export const importLayout = view => () => import(/* webpackChunkName: "ly-[request]" */ `./components/layout/${view}.vue`)
