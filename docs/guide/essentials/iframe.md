
# iframe 页签操作

`RouterTab` 支持通过 iframe 页签嵌入外部网站。

::: warning
该功能需要引入 `RouterTab` 内置路由，请参考 [基础 - 路由配置](README.md#路由配置)
:::

<doc-links api="#routertab-openiframetab" demo="/default/"></doc-links>

#### 打开 iframe 页签

``` js
// 三个参数分别为：链接、页签标题、图标
this.$routerTab.openIframeTab('https://www.baidu.com', '百度', 'icon-web')
```

#### 关闭 iframe 页签

``` js
this.$routerTab.closeIframeTab('https://www.baidu.com')
```

#### 刷新 iframe 页签

``` js
this.$routerTab.refreshIframeTab('https://www.baidu.com')
```
