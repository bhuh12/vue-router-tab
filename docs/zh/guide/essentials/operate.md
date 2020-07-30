# 页签操作

## 打开/切换页签

RouterTab 通过响应路由变化来新增或切换页签，您可以使用以下两种方式。

### 1. Vue Router 原生方式（推荐）

使用 Vue Router 内置的方式打开页签，如果您之前访问过该地址，您打开的将是缓存的页签页面。

参考文档：[Vue Router 导航](https://router.vuejs.org/zh/guide/essentials/navigation.html)

使用 `<router-link>` 组件

```html
<router-link to="/page/1">页面1</router-link>
```

使用 `router.push`、`router.replace`、`router.go` 等方法

```javascript
this.$router.push('/page/1')
```

### 2. RouterTab 内置方法

`open (path, isReplace = false, refresh = true)`

此方法默认会刷新已有页签，如果希望**全新打开页签**，您可以尝试此方法。

<doc-links api="#routertab-open" demo="/default/" />

**全新打开页签**

```javascript
this.$tabs.open('/page/2')
```

## 关闭页签

`close({id, path, match = true, force = true, to, refresh = false})`

您可以通过 RouterTab 的实例方法 [`routerTab.close`](../../api/README.md#routertab-close) 来关闭指定页签

<doc-links api="#routertab-close" demo="/default/" />

**关闭当前页签**

```js
this.$tabs.close()
```

**关闭指定页签**

```js
// 关闭指定 fullPath 的页签
this.$tabs.close('/page/1')

// 关闭指定 location 的页签
this.$tabs.close({
  name: 'page',
  params: {
    id: 2
  }
})
```

**关闭页签后跳转地址**

```js
// 关闭 '/page/1' 跳转到 '/page/2'
this.$tabs.close('/page/1', '/page/2')

// 关闭当前页签跳转到 '/page/2'
this.$tabs.close({
  to: '/page/2'
})
```

**完整选项说明**

```js
this.$tabs.close({
  id: '', // 通过页签 id （即 key 返回值）关闭页签, 与 path 二选一即可
  path: '/page/2', // 通过路由路径关闭页签，可 location 对象方式传入。如果未配置 id 和 path 则关闭当前页签
  match: false, // path 方式关闭时，是否匹配 path 完整路径，默认 true
  force: false, // 是否强制关闭，默认 true
  to: '/page/1', // 关闭后跳转的地址，可 location 对象方式传入。(未设置则跳转上一个页签，最后一个页签默认关闭后跳转默认页)
  refresh: true // 是否全新打开跳转地址 默认 false
})
```

## 刷新页签

`refresh (path, match = true, force = true)`

您可以通过 RouterTab 的实例方法 [`routerTab.refresh`](../../api/README.md#routertab-refresh) 来刷新指定页签

<doc-links api="#routertab-refresh" demo="/default/" />

**刷新当前页签**

```js
this.$tabs.refresh()
```

**刷新指定页签**

```js
// 刷新指定 fullPath 的页签
this.$tabs.refresh('/page/1')

// 刷新指定 location 的页签
this.$tabs.refresh({
  name: 'page',
  params: {
    id: 2
  }
})
```

**模糊刷新页签**

```js
// 刷新与给定地址共用页签的地址，即使地址不完全匹配
// 默认规则下，类似 '/page/1?query=2' 这样的页签也能被匹配刷新
this.$tabs.refresh('/page/1', false)
```

## 刷新所有页签

`refreshAll (force = false)`

您可以通过 RouterTab 的实例方法 [`routerTab.refreshAll`](../../api/README.md#routertab-refreshall) 来刷新所有页签

**刷新所有页签**

```js
this.$tabs.refreshAll()
```

**强制刷新所有页签**，忽略页面组件的 `beforePageLeave` 配置

```js
this.$tabs.refreshAll(true)
```

## 重置页签

`reset (to = this.defaultPath)`

通常，在用户重新登录或者切换角色的情况下，我们需要关闭用户所有页签并恢复页签初始状态，包括恢复初始页签、跳转到指定的默认页面等

针对这些场景，您可以使用 [`routerTab.reset`](../../api/README.md#routertab-reset) 方法来重置页签到初始状态

```js
// 重置页签并跳转默认页面
// 程序会自动获取页签父路由地址为默认页面
// 您也可以通过 RouterTab 的 'default-page' 来指定
this.$tabs.reset()

// 重置页签并跳转 /page/2
this.$tabs.reset('/page/2')
```
