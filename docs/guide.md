
# 教程

## 安装

### npm

``` bash
npm i vue-router-tab -S
```

### yarn (推荐)

``` bash
yarn add vue-router-tab
```

## 基础

### 引入组件

**示例：**

``` javascript {8,9,15}
// @/main.js 入口

// router-tab 组件依赖 vue 和 vue-router
import Vue from 'vue'
import Router from 'vue-router'

// 引入组件和样式
import RouterTab from 'vue-router-tab'
import 'vue-router-tab/dist/lib/vue-router-tab.css'

import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.use(RouterTab)

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')

```

### 应用组件

配置参考: [RouterTab Props](api.md#routertab-props)

::: danger
`RouterTab` 仅支持单例模式，请勿在同一个页面中引入多个 `RouterTab` 组件！
:::

**示例：**

``` html {6}
<!-- @/components/layout/Frame.vue 布局框架 -->
<template>
  <div class="app-header">头部</div>
  <div class="app-body">
    <div class="app-side">侧边栏</div>
    <router-tab/>
  </div>
</template>
```

### 路由配置

1. 引入 `RouterTab` 内置路由以支持[操作 iframe 页签](#iframe-页签操作)
2. 通过路由的 `meta` 信息，来设置页签的**标题**、**图标**、**提示**和**路由页签规则**

配置参考: [Route.meta 路由元信息](api.md#route-meta-路由元信息)

**示例：**

``` javascript {6,9,22,25,28,33,34,35,36}
// @/router.js 路由
import Vue from 'vue'
import Router from 'vue-router'

// RouterTab 内置路由
import { RouterTabRoutes } from 'vue-router-tab'

// 引入布局框架组件
import Frame from './components/layout/Frame.vue'

// 异步加载页面组件
const importPage = view => () => import(/* webpackChunkName: "p-[request]" */ `./views/${view}.vue`)

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/page1',

    // 父路由组件内必须包含 <router-tab>
    component: Frame,

    // 子路由里配置需要通过页签打开的页面路由
    children: [

      // 引入 RouterTab 内置路由以支持操作 iframe 页签
      ...RouterTabRoutes,
      {
        path: '/page/:id',
        component: importPage('Page'),
        meta: {
          title: '页面', // 页签标题
          icon: 'icon-user', // 页签图标，可选
          tips: '这是一个页面', // 页签提示，可选，如未设置则跟title一致
          aliveId: 'fullPath', // 路由打开页签规则，可选
        }
      },
      {
        path: '/404',
        component: importPage('404'),
        meta: {
          title: '找不到页面',
          icon: 'icon-page'
        }
      },
      {
        path: '*',
        redirect: '/404'
      }
    ]
}
```

## 页签操作

### 打开/切换页签

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

### 关闭页签

您可以通过 `RouterTab` 的实例方法 [`routerTab.close(location, fullMatch?)`](api.md#routertab-close) 来关闭页签

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


### 刷新页签

您可以通过 `RouterTab` 的实例方法 [`routerTab.refresh(location, fullMatch?)`](api.md#routertab-refresh) 来刷新页签

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

### 刷新所有页签

您可以通过 `RouterTab` 的实例方法 [`routerTab.refreshAll(force?)`](api.md#routertab-refreshall) 来刷新所有页签

**刷新所有页签**

``` js
this.$routerTab.refreshAll()
```

**强制刷新所有页签**，忽略页面组件的 `beforePageLeave` 配置

``` js
this.$routerTab.refreshAll(true)
```

### iframe 页签操作

`RouterTab` 支持通过 iframe 页签嵌入外部网站。

::: warning
该功能需要引入 `RouterTab` 内置路由，请参考 [基础 - 路由配置](#路由配置)
:::

<doc-links api="#routertab-openiframetab" demo="/default/"></doc-links>

**打开 iframe 页签**

``` js
// 三个参数分别为：链接、页签标题、图标
this.$routerTab.openIframeTab('https://map.baidu.com/', '百度地图', 'icon-web')
```

**关闭 iframe 页签**

``` js
this.$routerTab.closeIframeTab('https://map.baidu.com/')
```

**刷新 iframe 页签**

``` js
this.$routerTab.refreshIframeTab('https://map.baidu.com/')
```


## 页签规则

不同的页签维护着各自的页面缓存，而**页签规则**定义了不同的路由**打开页签的方式**。


### 内置规则

- `path` (默认规则)
  - 规则：`route => route.path` 
  - 说明：相同route.params的路由共用页签
  - <demo-link href="/default/rule/a/1"/>

- `fullPath`
  - 规则：`route => route.fullPath.replace(route.hash, '')` 
  - 说明：相同route.params和route.query的路由共用页签
  - <demo-link href="/global-rule/rule/a/1"/>


### 全局页签规则

通过配置 `router-tab` 组件的 `alive-id` 属性，您可以定义全局的页签规则

<doc-links api="#alive-id" demo="/global-rule/rule/a/1"></doc-links>

**示例：**

``` html
<router-tab :alive-id="route => route.fullPath.replace(route.hash, '')"/>
```

例子中，配置 `alive-id` 为 `fullPath` 去除 `hash` 部分。

根据该规则，`page/1` 和 `page/1?query=2`、`page/2`、`page/2?query=2` 这四个地址都是打开**不同**的页签。而 `page/1` 和 `page/1#hash1` 是同一个页签，因为它们忽略 `hash` 后的路径一致。

该规则已经内置在 `RouterTab` 中了，因此，您也可以直接这样使用：

``` html
<router-tab alive-id="fullPath"/>
```


### 路由页签规则

通过配置**路由**的 `meta.aliveId` 属性，您可以针对特定路由定制页签规则

<doc-links api="#meta-aliveid" demo="/default/route-rule/a/1"></doc-links>

**示例：**

``` javascript {8,9,10}
const route = {
  path: '/my-page/:catalog/:type',
  component: {
    template: '<div>定制规则：{{$route.params.catalog}}/{{$route.params.type}}</div>'
  },
  meta: {
    title: '定制规则',
    aliveId (route) {
      return `/my-page/${route.params.catalog}`
    }
  }
}
```

根据示例中的页签规则，`/my-page/a/1` 和 `/my-page/a/2` 打开的是**同一个**页签。而 `/my-page/b/1` 和 `/my-page/b/2` 则打开另外一个页签


## 进阶

前面的内容已经能满足大部分使用场景了，您还可以根据下面的内容实现更多功能。


### 过渡效果

您可以通过配置 `router-tab` 组件的 `tab-transition` 和 `page-transition` 属性，分别替换默认的**页签**和**页面**过渡效果

::: warning
- 如果是组件作用域内的 CSS(配置了 `scoped`)，需要在选择器前添加 `/deep/`才能生效

- 页签项 `.router-tab-item` 默认设置了 `transition` 和 `transform-origin` 的样式，您可能需要覆盖它已避免影响到自定义的过渡效果
:::

<doc-links api="#tab-transition" demo="/transition/"></doc-links>

**页签过渡效果-示例：**

``` html {2,6}
<template>
  <router-tab tab-transition="tab-scale"/>
</template>

<style lang="scss" scoped>
/deep/ .tab-scale {
  &-enter-active,
  &-leave-active {
    transition: opacity .5s, transform .5s;
  }

  &-enter,
  &-leave-to {
    opacity: 0;
    transform: scale(1.5);
  }
}
</style>
```

<doc-links api="#page-transition" demo="/transition/"></doc-links>

**页面过渡效果-示例：**

``` html {2,6}
<template>
  <router-tab page-transition="page-fade"/>
</template>

<style lang="scss" scoped>
/deep/ .page-fade {
  &-enter-active,
  &-leave-active {
    transition: opacity .5s;
  }

  &-enter,
  &-leave-to {
    opacity: 0;
  }
}
</style>
```

#### 详细配置

您还可以使用对象的方式设置 `tab-transition` 和 `page-transition` 的值，以实现详细的过渡效果配置

配置参考: [Vue - transition](https://cn.vuejs.org/v2/api/#transition)

``` html
<router-tab :tab-transition="{
  name: 'my-transition',
  'enter-class': 'my-transition-enter'
}"/>
```


### 自定义页签模板

通过 `router-tab` 组件的默认作用域插槽，我们可以自定义页签显示的内容

插槽的作用域提供以下属性供模板使用：
  - **tab** {Object} 页签项信息，包括 `id`, `title`, `icon`, `closable` 等
  - **tabs** {Array} 页签列表
  - **index** {Number} 索引

<doc-links demo="/slot/"></doc-links>

**示例：**

``` html {2}
<router-tab>
  <template v-slot="{ tab: { id, title, icon, closable }, tabs, index}">
    <i v-if="icon" class="tab-icon" :class="icon"></i>
    <span class="tab-title">{{title || '未命名页签'}}</span>
    <span class="tab-badge">{{index}}</span>
    <i class="tab-close el-icon-close" v-if="closable !== false &&tabs.length > 1" @click.prevent="$routerTab.close(id)"></i>
  </template>
</router-tab>
```


### 初始展示页签

通过配置 `router-tab` 组件的 `tabs` 属性，可以设置进入页面时默认显示的页签。

<doc-links api="#tabs" demo="/initial-tabs/"></doc-links>

**示例：**

  ``` html
  <router-tab :tabs="tabs"/>
  ```

  ``` javascript {7,10,13,16,17,18,19,20,21,22}
  export default {
    data () {
      return {
        // 默认页签项
        tabs: [
          // 推荐 fullPath 方式配置默认页签项。RouterTab 会自动获取路由里的页签配置
          '/page/1',

          // 设置初始 title，用于需要动态更新页签信息的路由页面
          { to: '/page/2', title: '页面2', icon: 'icon-page' },

          // 设置 closable 为 false，可以禁止页签被关闭
          { to: '/page/3', closable: false },

          // 也可以 location 方式设置默认页签项
          {
            to: {
              name: 'page',
              params: { id: 4 },
              query: { t: 2 }
            }
          },
          
          // 此页面与'/page/2'的aliveId一致，将只保留先设置的页签
          { to: '/page/2?t=1', title: '页面2-1' }
        ]
      }
    }
  }
  ```

### 动态更新页签

`RouterTab` 会监听组件 `this.routeTab` 来动态更新页签信息。您可以通过设置 `this.routeTab` 来更改页签的标题、图标、提示。

<doc-links demo="/default/tab-dynamic"></doc-links>

**示例：**

``` javascript {8,11,12,13,14,15}
export default {
  name: 'page',
  mounted () {
    setTimeout(() => {
      let { id } = this.$route.params

      // 只更新页签标题
      this.routeTab = `页面${id}动态标题`

      // 更新多个页签信息
      this.routeTab = {
        title: `页面${id}动态标题`,
        icon: 'el-icon-document',
        tips: `页面${id}动态提示`
      }
    }, 300)
  }
}
```


### 语言配置

通过配置 `router-tab` 组件的 `i18n` 属性，可以设置组件显示的语言 (主要表现为页签右键菜单)。


`RouterTab` 默认语言是 `zh-CN`，另外内置了 `en`。

<doc-links api="#i18n" demo="/lang-en/"></doc-links>

**指定组件显示为英文**

``` html
<router-tab i18n="en"/>
```

**自定义的语言** ([参考配置](https://github.com/bhuh12/vue-router-tab/blob/dev/src/lib/RouterTab/lang/en.js))

``` html
<router-tab :i18n="customLanguage"/>
```

``` javascript
export default {
  data () {
    return {
      customLanguage: {
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
        },
        msg: {
          keepOneTab: 'Keep at least 1 tab'
        }
      }
    }
  }
}
```


### 页面离开确认

当页签**关闭**、**刷新**或**替换**时会触发 `beforePageLeave`，通过 `Promise` 的 `resolve` 和 `reject` 来允许或者阻止页签页面的离开。

::: warning

- `beforePageLeave` 在组件的最外层，不是放在 `methods` 里

- 如果还需要在浏览器页面关闭或刷新前阻止，请使用 
[`onbeforeunload`](https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onbeforeunload)
:::

<doc-links demo="/initial-tabs/page-leave"></doc-links>

**示例：**

``` javascript {3,15,21,23,28}
export default {
  // 页面离开前确认
  beforePageLeave (resolve, reject, tab, type) {
    // 离开类型
    const action = {
      close: '关闭',
      refresh: '刷新',
      replace: '替换'
    }[type]

    const msg = `您确认要${action}页签“${tab.title}”吗？`

    // 值未改变，则直接离开页签
    if (this.editValue === this.value) {
      resolve()
      return
    }

    // 值改变则确认提示
    if (confirm(msg)) {
      resolve()
    } else {
      reject('拒绝了页面离开')
    }

    /*
    // 此处使用了 Element 的 confirm 组件
    // 需将 closeOnHashChange 配置为 false，以避免路由切换导致确认框关闭
    this.$confirm(msg, '提示', { closeOnHashChange: false })
      .then(resolve)
      .catch(reject)
    */
  }
}
```
