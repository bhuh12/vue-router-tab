# 页签操作

## 打开/切换页签

RouterTab 通过响应路由变化来新增或切换页签，直接使用 `vue-router` 提供的方法即可。

参考文档：[Vue Router 导航](https://router.vuejs.org/zh/guide/essentials/navigation.html)

<doc-links api="#routertab-open" demo="/default/"></doc-links>

1. **`router-link` 组件方式**

  打开和切换到页签
  
  ``` html
  <router-link to="/page/1">页面1</router-link>
  ```

2. **通过 `router.push`、`router.replace`、`router.go`**

  注意：在 Vue 实例内部，您可以通过 $router 访问路由实例。因此您可以调用 this.$router.push。

  ``` javascript
  this.$router.push('/page/1')
  ```

3. **全新打开页签 (会刷新已有页签)**
   
  我们推荐您使用上述 Vue Router 内置的方式打开页签，但是如果您之前访问过该页签，您打开的将是缓存的页面。如果希望全新打开，您可以尝试以下方法。

  ``` html
  <a @click="$routerTab.open('/page/2')">页面2”<a>
  ```

## 关闭页签

您可以通过 RouterTab 的实例方法 [`routerTab.close(location, fullMatch?)`](../../api/README.md#routertab-close) 来关闭页签

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

**关闭页签后跳转地址**

``` js
// 关闭 '/page/1' 跳转到 '/page/2'
this.$routerTab.close('/page/1', '/page/2')

// 关闭当前页签跳转到 '/page/2'
this.$routerTab.close({
  to: '/page/2'
})
```

**关闭页签方法完整参数配置**

``` js
this.$routerTab.close({
  id: '', // 通过页签 id （即 aliveId 返回值）关闭页签, 与 path 二选一即可
  path: '/page/2', // 通过路由路径关闭页签，可 location 对象方式传入。如果未配置 id 和 path 则关闭当前页签
  match: false, // path 方式关闭时，是否匹配 path 完整路径，默认 true
  force: false, // 是否强制关闭，默认 true
  to: '/page/1', // 关闭后跳转的地址，可 location 对象方式传入。(未设置则跳转上一个页签，最后一个页签默认关闭后跳转默认页)
  refresh: true // 是否全新打开跳转地址 默认 false
})
```


## 刷新页签

您可以通过 RouterTab 的实例方法 [`routerTab.refresh(location, fullMatch?)`](../../api/README.md#routertab-refresh) 来刷新页签

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

您可以通过 RouterTab 的实例方法 [`routerTab.refreshAll(force?)`](../../api/README.md#routertab-refreshall) 来刷新所有页签

**刷新所有页签**

``` js
this.$routerTab.refreshAll()
```

**强制刷新所有页签**，忽略页面组件的 `beforePageLeave` 配置

``` js
this.$routerTab.refreshAll(true)
```


## 重置页签

您可以通过 RouterTab 的实例方法 [`routerTab.reset(to = this.defaultPath)`](../../api/README.md#routertab-reset) 来重置页签到初始状态

``` js
// 重置页签并跳转默认页面（程序会自动获取页签父路由地址为默认页面，您也可以通过 RouterTab 的 'default-page' 来指定）
this.$routerTab.reset()

// 重置页签并跳转 /page/2
this.$routerTab.reset('/page/2')
```
