# iframe 页签

<DocLinks api="router-tab#props" :demo="DEMO_ROUTES.Iframe" />

<script setup>
import { DEMO_ROUTES } from '../../.vitepress/demoRoutes'
</script>

RouterTab 支持通过 iframe 页签嵌入外部网站。

## 注入内置路由

::: danger 必须手动注入
不注入内置路由，`openIframe()` 导航会失败。
:::

```js{2,12}
import { createRouter, createWebHistory } from 'vue-router'
import { RouterTabRoutes } from 'vue-router-tab'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Frame,
      children: [
        // 注入到 <RouterTab> 所在层级的 children
        ...RouterTabRoutes
        // ...其他页面路由
      ]
    }
  ]
})
```

`RouterTabRoutes` 只含一条**相对**路由：

```
iframe/:src/:title?/:icon?
```

::: warning 首个 param 名是 src
不是 `url`。页签路径形如 `{父路径}/iframe/{encodeURIComponent(src)}/{title}/{icon}`。
:::

多实例场景下，**每个** RouterTab 所在层级都要各自注入一份。

## 页签操作

```js
import { useRouterTab } from 'vue-router-tab'

const tabs = useRouterTab()
const src = 'https://bhuh12.github.io/vue-router-tab/'

// 打开：参数为 链接、页签标题、图标
tabs.openIframe(src, '文档', 'rt-icon-web')

// 关闭（必须传 src）
tabs.closeIframe(src)

// 刷新（必须传 src）
tabs.refreshIframe(src)
```

::: tip 三个方法都按 src 定位页签
`closeIframe` / `refreshIframe` 不能省略 `src` —— 内部通过 `getIframePath(src)` 反查页签路径。
:::

## 事件

| 事件             | 触发时机            | 参数        |
| ---------------- | ------------------- | ----------- |
| `iframe-mounted` | iframe 节点挂载就绪 | `(url, el)` |
| `iframe-loaded`  | iframe 内容加载完成 | `(url, el)` |

```vue
<template>
  <RouterTab @iframe-mounted="onIframeMounted" @iframe-loaded="onIframeLoaded" />
</template>

<script setup>
function onIframeMounted(url, el) {
  console.log('节点就绪', url, el)
}

function onIframeLoaded(url, el) {
  console.log('内容加载完成', url, el)
}
</script>
```

::: warning iframe 内部跳转也会触发 loaded
`iframe-loaded` 来自 `<iframe>` 的原生 `load` 事件，用户在 iframe 内部导航同样会触发。
:::

这是 RouterTab 的**全部事件** —— 只有这两个。

## 自定义 iframe 属性

`iframeAttrs` prop 可给 `<iframe>` 节点附加属性，入参为当前 url：

```vue
<template>
  <RouterTab :iframe-attrs="getAttrs" />
</template>

<script setup>
function getAttrs(url) {
  return {
    sandbox: 'allow-scripts allow-same-origin',
    referrerpolicy: 'no-referrer'
  }
}
</script>
```

## 安全过滤

组件对 `src` 做协议过滤：`javascript:` 与 `data:` 开头的地址（大小写不敏感）会被替换为 `about:blank`，避免 XSS。

其余地址原样使用，因此**嵌入不可信的第三方地址时仍应配置 `sandbox`**（见上一节）。

## 缓存行为

iframe 页签的缓存 key 规则为 `iframe-${src}`。iframe 节点被提到 `KeepAlive` 之外用 `v-show` 切换 —— 走 `KeepAlive` 重挂载会丢失 iframe 内部状态。

刷新 iframe 页签时，由于 `<iframe>` 节点按 url 复用、`src` 未变不会自动重载，组件内部通过重置 `src`（同值赋值）触发浏览器原生重载，该方式不受跨域限制。

实现细节见[实现原理](../meta/internals)。

## 完整示例

<<< ../../../demo/src/frames/Iframe.vue

iframe 操作页面：

<<< ../../../demo/src/views/IframeOperate.vue
