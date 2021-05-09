# Tab Operations

## Open/Switch

RouterTab responds to route change, thus, there are two ways to open/switch tabs.

### 1. Native Vue Router way (recommended)

Open tabs in a native Vue Router way. If the link is visited earlier, the exsiting cached tab will be brought to front.

See [Vue Router Navigation](https://router.vuejs.org/guide/essentials/navigation.html)

Via `<router-link>`

```html
<router-link to="/page/1">Page 1</router-link>
```

Via `router.push`, `router.replace`, `router.go`, etc.

```javascript
this.$router.push('/page/1')
```

### 2. RouterTab built-in method

`open (path, isReplace = false, refresh = true)`

This method will reload the existing cached tab by default, which might be usefule if you intend to **force-new-open** a tab.

<doc-links api="#routertab-open" demo="/default/" />

**Force-new-open**

```javascript
this.$tabs.open('/page/2')
```

## Close

`close({id, path, match = true, force = true, to, refresh = false})`

You can close a tab with [`routerTab.close`](../../api/README.md#routertab-close)

<doc-links api="#routertab-close" demo="/default/" />

**Current tab**

```js
this.$tabs.close()
```

**Designated tab**

```js
// fullPath
this.$tabs.close('/page/1')

// location
this.$tabs.close({
  name: 'page',
  params: {
    id: 2
  }
})
```

**Jump after closed**

```js
// close '/page/1', then jump to '/page/2'
this.$tabs.close('/page/1', '/page/2')

// close current, then jump to '/page/2'
this.$tabs.close({
  to: '/page/2'
})
```

**Options**

```js
this.$tabs.close({
  id: '', // close by tab id, i.e., key. equivalent to path
  path: '/page/2', // close by route path, accepts location object. Will close current tab if neither id nor path is provided.
  match: false, // should match full path or not in path mode, defaults to true
  force: false, // should force close or not, defaults to true
  to: '/page/1', // url to jump to after closed, accepts location object.
  refresh: true // should refresh the `to` url or not, defaults to false
})
```

## Refresh

`refresh (path, match = true, force = true)`

You can refresh a tab with [`routerTab.refresh`](../../api/README.md#routertab-refresh)

<doc-links api="#routertab-refresh" demo="/default/" />

**Current tab**

```js
this.$tabs.refresh()
```

**Designated tab**

```js
// fullPath
this.$tabs.refresh('/page/1')

// location
this.$tabs.refresh({
  name: 'page',
  params: {
    id: 2
  }
})
```

**Fuzzy matching**

```js
// refresh tabs in fuzzy mode
// e.g., '/page/1?query=2' will get refreshed by this rule
this.$tabs.refresh('/page/1', false)
```

## Refresh All

`refreshAll (force = false)`

You can refresh all tabs with [`routerTab.refreshAll`](../../api/README.md#routertab-refreshall)

**Refresh all**

```js
this.$tabs.refreshAll()
```

**Force-refresh all**, ignoring `beforePageLeave` in tab components

```js
this.$tabs.refreshAll(true)
```

## Reset

`reset (to = this.defaultPath)`

Generally, when user logged out, we need to reset all tabs to initial state, e.g., close all tabs and restore welcome page.

You can do that with [`routerTab.reset`](../../api/README.md#routertab-reset)

```js
// reset tabs and jump to default page
// (RouterTab will use parent route as default page,
//   or you can configure this with `default-page`.)
this.$tabs.reset()

// reset tabs and jump to /page/2
this.$tabs.reset('/page/2')
```
