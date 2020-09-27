# Iframe 页签

RouterTab 支持通过 Iframe 页签嵌入外部网站。

::: warning
该功能需要引入 RouterTab 内置路由，请参考 [基础 - 路由配置](README.md#路由配置)
:::

## Iframe 页签操作

<doc-links api="#routertab-openiframe" demo="/default/" />

#### 打开 Iframe 页签

```js
// 三个参数分别为：链接、页签标题、图标
this.$tabs.openIframe('https://cn.vuejs.org', 'Vue.js', 'icon-web')
```

#### 关闭 Iframe 页签

```js
this.$tabs.closeIframe('https://cn.vuejs.org')
```

#### 刷新 Iframe 页签

```js
this.$tabs.refreshIframe('https://cn.vuejs.org')
```

## Iframe 页签事件

RouterTab 支持以下的 Iframe 页签事件：

- `iframe-mounted` iframe 节点挂载就绪

- `iframe-loaded` iframe 内容加载成功

需要注意的是，iframe 内部链接跳转也会触发 `iframe-loaded` 事件

<doc-links api="#iframe-mounted" demo="/iframe/" />

**示例：**

<<< @/src/components/frames/Iframe.vue
