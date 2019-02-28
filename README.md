# Vue Router Tab

<!-- <p align="center">
  <a href="https://npmcharts.com/compare/vue-router-tab?minimal=true"><img src="https://img.shields.io/npm/dm/vue-router-tab.svg" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/vue-router-tab"><img src="https://img.shields.io/npm/v/vue-router-tab.svg" alt="Version"></a>
  <a href="https://www.npmjs.com/package/vue-router-tab"><img src="https://img.shields.io/npm/l/vue-router-tab.svg" alt="License"></a>
</p> -->

Vue Router Tab 是基于 `Vue Router` 的路由页签组件。

> 由于 Vue 内置的 `<keep-alive>` 只能根据组件的 `name` 来缓存页面，难以实现同一个组件对应多个页签的缓存，本组件定制了 `<router-alive>` 缓存组件

## 功能

- [x] 响应路由变化新增或切换页签，不同的页签缓存独立的页面
- [x] 页签关闭和刷新，右键菜单批量操作
- [x] [全局](#alive-key)和[针对特定路由](#meta.aliveKey)的页签缓存规则配置
- [x] [初始展示页签](#tabs)，页签可设置为不可关闭
- [x] [内置页签和页面过渡效果，支持自定义配置](#tab-transition)
- [x] [自定义页签项模板](#自定义页签项模板)
- [x] [动态更新页签信息 (标题/图标/提示)](#动态更新页签信息)
- [x] [路由页面离开 (页签关闭/刷新/替换) 前确认](#路由页面离开前确认)
- [x] [国际化](#i18n)：zh-CN (默认) / en，自定义语言

---

## 安装

### NPM

``` bash
# npm
npm i vue-router-tab -S

# yarn
yarn add vue-router-tab
```

## 引入

ES6:

``` javascript
// router-tab 组件依赖 vue 和 vue-router
import Vue from 'vue'
import Router from 'vue-router'

// 引入组件和样式
import RouterTab from 'vue-router-tab'
import 'vue-router-tab/dist/lib/vue-router-tab.css'

vue-router-tab.use(RouterTab)
```

Template:

``` html
<template>
  ...
  <router-tab></router-tab>
  ...
</template>
```

---

## `<router-tab>` props 配置选项

### `alive-key`

页面组件缓存的键

- 类型: `string | Function`

  - 如果类型为 `string` ，则取 `$route[aliveKey]` 的值

  - 如果类型为 `Function` ，则取 `aliveKey($route)` 返回的字符串。该函数不应返回随机变化的字符串，以免页签无法与缓存的页面对应

- 默认值: `'path'`
  
  根据 `$route.path` 来缓存页面组件。

  - 同一路由-不同 `$route.params` 的页面，各自打开独立的页签，单独缓存

  - 同一路由-相同 `$route.params` -不同 `$route.query` 的页面，共用同一个页签，后打开的页面将会替换之前页签内的页面，并且旧的页面缓存也被清除

  - 仅仅 `$route.hash` 不同的页面，共用同一页签和缓存

``` html
<!-- 取 $route.fullPath -->
<router-tab alive-key="fullPath"></router-tab>

<!-- 函数方式 -->
<router-tab :alive-key="route => route.fullPath + '1'"></router-tab>
```

### `i18n`

国际化语言配置

- 类型: `string | Object`

  - 如果类型为 `string` ，可以设置为内置的语言 `'zh-CN'` (默认) 和 `'en'`

  - 如果类型为 `Object` ，可设置自定义的语言

- 默认值: `'zh-CN'`


**指定内置语言**

``` html
<router-tab i18n="en"></router-tab>
```

**自定义语言**

``` html
<router-tab :i18n="lang"></router-tab>
```

``` javascript
export default {
  data () {
    return {
      lang: {
        tab: {
          untitled: 'Untitled Page'
        },
        contextmenu: {
          refresh: 'Refresh This',
          refreshAll: 'Refresh All',
          close: 'Close This',
          closeLefts: 'Close to the Left',
          closeRights: 'Close to the Right',
          closeOthers: 'Close Others'
        }
      }
    }
  }
}
```

### `tabs`

**初始页签数据**，页面打开时默认显示的页签。相同 `aliveKey` 的页签只保留第一个

- 类型: `Array <string | Object>`
  
  - tabs子元素类型为 `string` 时，应配置为要打开页面的 `fullPath` ，页签的标题/图片/提示等信息会从对应页面的 `router` 配置中获取

  - tabs子元素类型为 `Object` 时：
    
    - to: 页签路由地址，跟 `router.push` 的 `location` 参数一致，可以为 `fullPath`，也可以为 `location` 对象 - [参考文档](https://router.vuejs.org/zh/guide/essentials/navigation.html#router-push-location-oncomplete-onabort)
    
    - title: 页签标题，如果页面有设置 `routerTab.title` 动态标题，可在此设置最终的动态标题值，以免与默认从 `router` 获取的标题不一致
    
    - closable: 页签是否允许关闭，默认为 `true`

- 默认值: `[]`

``` html
<!-- 默认页签 -->
<router-tab :tabs="[
  '/page1',
  { to: '/page/2', title: '页面2' },
  { to: '/page/3', closable: false },
  { to: {
    name: 'page',
    params: { id: 4 },
    query: { t: 2 }
  }},
  { to: '/page/2?t=1', title: '页面2-1' }
]"></router-tab>
<!-- '/page/2'与'/page/2?t=1'两个路由的aliveKey一致，将只保留前一个页签 -->
```

### `router-view`

**Vue Router Tab 内置 `<router-view>` 组件的配置**

- 类型: `Object`
  
  > 配置参考 [Vue Router 文档 - `<router-view>` Props](https://router.vuejs.org/zh/api/#router-view-props)

- 默认值: `{}`



### `tab-transition`

**页签过渡效果**，新增和关闭页签时的过渡

- 类型: `string | Object`

  - 类型为 `string` 时，应配置为 `transition.name`

  - 类型为 `Object` 时，配置参考 [Vue文档 - transition](https://cn.vuejs.org/v2/api/#transition)

- 默认值: `'router-tab-zoom-lb'`


``` html
<!-- 直接配置过渡名称 -->
<router-tab tab-transition="my-transition"></router-tab>

<!-- 过渡详细配置 -->
<router-tab :tab-transition="{ name: 'my-transition', 'enter-class': 'my-transition-enter' }"></router-tab>
```


### `page-transition`

**页面过渡效果**

- 类型: `string | Object`
  
  同 [`tab-transition`](#tab-transition)

- 默认值: `{
  name: 'router-tab-swap',
  mode: 'out-in'
}`


### 自定义页签项模板

``` html
<router-tab>
  <template slot-scope="{ tab: { id, title, icon, closable }, tabs, index}">
      <i v-if="icon" class="tab-icon" :class="icon"></i>
      {{index}}
      <span class="tab-title">{{title || '新页签'}}</span>
      <i class="tab-close el-icon-close" v-if="closable !== false && tabs.length > 1" @click.prevent="close(id)"></i>
  </template>
</router-tab>
```

## `<router-tab>` data 实例数据

**注意**：在 Vue 实例内部，你可以通过 `$routerTab` 访问路由页签实例。因此你可以调用 `this.$routerTab.close()`。

### `routerTab.activedTab`

当前激活的页签id



## `<router-tab>` methods 实例方法


### `routerTab.close(id?)`

**关闭指定页签**

`id` 是页签id，跟页签对应页面的缓存键 `aliveKey` 保持一致。如果未提供 `id`，则默认关闭当前激活的页签


### `routerTab.refresh(id?)`

**刷新指定页签**

如果未提供 `id`，则默认刷新当前激活的页签

### `routerTab.refreshAll(force?= false)`

**刷新所有页签**

如果 `force` 为 `true`，则忽略页面组件的 `beforePageLeave` 配置

---

## 路由配置

### `meta.title`

**页签标题**

- 类型: `string`
- 默认值: `'新页签'`


### `meta.icon`

**页签图标**

- 类型: `string`


### `meta.tips`

**页签提示**

- 类型: `string`
- 默认值: 默认和页签标题 `meta.title` 保持一致


### `meta.aliveKey`

页面组件缓存的键，用以设置路由独立的页签缓存规则。

> 配置参考: [`<router-tab>` props 配置选项 => `alive-key`](#alive-key)

``` javascript
import Page1 from './views/Page1'
import Page2 from './views/Page2'

export default {
  routes: [{
    path: '/page1',
    component: Page1,
    meta: {
      title: '页面1', // 页签标题
      icon: 'el-icon-picture', // 页签图标
      tips: '这是页面1' // 页签提示
    }
  }, {
    path: '/page2/:id',
    component: Page2,
    meta: {
      title: '页面2', // 页签标题
      icon: 'el-icon-document', // 页签图标
      aliveKey: 'fullPath' // 缓存key
    }
  }]
}
```

---

## 页面组件

### 动态更新页签信息

``` javascript
export default {
  name: 'page',
  mounted () {
    setTimeout(() => {
      let { id } = this.$route.params

      // 只更新页签标题
      this.routerTab = `页面${id}动态标题`

      // 更新其他页签信息
      this.routerTab = {
        title: `页面${id}动态标题`,
        icon: 'el-icon-document',
        tips: `页面${id}动态提示`
      }
    }, 300)
  }
}
```

### 路由页面离开前确认

``` javascript
export default {
  name: 'page',

  // 路由页面离开前确认
  beforePageLeave (resolve, reject, tab, type) {
    let action = (type === 'close' && '关闭') ||
      (type === 'refresh' && '刷新') ||
      (type === 'replace' && '替换')

    // 此处使用了 Element 的 confirm 组件
    // 需将 closeOnHashChange 配置为 false，以避免路由切换导致确认框关闭
    this.$confirm(`您确认要${action}页签“${tab.title}”吗？`, '提示', { closeOnHashChange: false })
      .then(resolve)
      .catch(reject)
  }
}
```
