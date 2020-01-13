# iframe 页签

RouterTab 支持通过 iframe 页签嵌入外部网站。

::: warning
该功能需要引入 RouterTab 内置路由，请参考 [基础 - 路由配置](README.md#路由配置)
:::


## iframe 页签操作

<doc-links api="#routertab-openiframetab" demo="/default/"></doc-links>

#### 打开 iframe 页签

``` js
// 三个参数分别为：链接、页签标题、图标
this.$routerTab.openIframe('https://www.baidu.com', '百度', 'icon-web')
```

#### 关闭 iframe 页签

``` js
this.$routerTab.closeIframe('https://www.baidu.com')
```

#### 刷新 iframe 页签

``` js
this.$routerTab.refreshIframe('https://www.baidu.com')
```

## iframe 页签事件

RouterTab 支持以下的 iframe 页签事件：

- `iframe-mounted` iframe 节点挂载就绪

- `iframe-loaded` iframe 内容加载成功


需要注意的是，iframe 内部链接跳转也会触发 `iframe-loaded` 事件

<doc-links api="#iframe-mounted" demo="/iframe/"></doc-links>

**示例：**

<<< @/demo/components/frames/Iframe.vue
