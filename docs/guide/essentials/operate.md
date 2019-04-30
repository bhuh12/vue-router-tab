# 页签操作

## 打开/切换页签

`RouterTab` 通过响应路由变化来新增或切换页签，直接使用 `vue-router` 提供的方法即可。

参考文档：[Vue Router 导航](https://router.vuejs.org/zh/guide/essentials/navigation.html)

<doc-links demo="/default/"></doc-links>

1. **`router-link` 组件方式**

  打开和切换到页签
  
  ``` html
  <router-link to="/page/1">页面1</router-link>
  ```

  全新打开页签 (**刷新已有页签**)

  ``` html
  <router-link to="/page/2" @click.native="$routerTab.refresh('/page/2')">页面2”<router-link>
  ```

2. **通过 `router.push`、`router.replace`、`router.go`**

  注意：在 Vue 实例内部，您可以通过 $router 访问路由实例。因此您可以调用 this.$router.push。

  ``` javascript
  // 如果需要全新打开请加上：
  // this.$routerTab.refresh('/page/1')
  this.$router.push('/page/1')
  ```

## 关闭页签

您可以通过 `RouterTab` 的实例方法 [`routerTab.close(location, fullMatch?)`](../../api/README.md#routertab-close) 来关闭页签

::: tip
1. 在 Vue 实例内部，您可以通过 `$routerTab` 访问路由页签实例。因此您可以调用 `this.$routerTab.close`。

2. 当 `RouterTab` 组件只有一个页签，或者初始页签的 `closable` 配置为 `false`，页签关闭操作将不生效。
:::

<doc-links api="#routertab-close" demo="/default/"></doc-links>

**关闭当前页签**

``` js
this.$routerTab.close()
```

**关闭指定页签**
``` js
// 关闭指定 fullPath 的页签
this.$routerTab.close('/page/1')

// 关闭指定 location 的页签
this.$routerTab.close({
  name: 'page',
  params: {
    id: 2
  }
})
```

**模糊关闭页签**
``` js
// 关闭与给定地址共用页签的地址，即使地址不完全匹配
// 默认 `alive-id` 规则下，类似 '/page/1?query=2' 这样的页签也能被匹配关闭
this.$routerTab.close('/page/1', false)
```


## 刷新页签

您可以通过 `RouterTab` 的实例方法 [`routerTab.refresh(location, fullMatch?)`](../../api/README.md#routertab-refresh) 来刷新页签

<doc-links api="#routertab-refresh" demo="/default/"></doc-links>

**刷新当前页签**

``` js
this.$routerTab.refresh()
```

**刷新指定页签**
``` js
// 刷新指定 fullPath 的页签
this.$routerTab.refresh('/page/1')

// 刷新指定 location 的页签
this.$routerTab.refresh({
  name: 'page',
  params: {
    id: 2
  }
})
```

**模糊刷新页签**
``` js
// 刷新与给定地址共用页签的地址，即使地址不完全匹配
// 默认 `alive-id` 规则下，类似 '/page/1?query=2' 这样的页签也能被匹配刷新
this.$routerTab.close('/page/1', false)
```

## 刷新所有页签

您可以通过 `RouterTab` 的实例方法 [`routerTab.refreshAll(force?)`](../../api/README.md#routertab-refreshall) 来刷新所有页签

**刷新所有页签**

``` js
this.$routerTab.refreshAll()
```

**强制刷新所有页签**，忽略页面组件的 `beforePageLeave` 配置

``` js
this.$routerTab.refreshAll(true)
```
