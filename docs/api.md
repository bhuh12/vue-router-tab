# API 参考

## RouterTab Props

### alive-id

页面组件缓存的 id

- 类型: `String | Function`

  - 如果类型为 `String` ，则可使用内置的缓存规则，`path` (默认) 和 `fullPath`

  - 如果类型为 `Function` ，则取 `aliveId(route)` 返回的字符串。该函数传入相同的 `route` 应返回固定的字符串，以免页签无法与缓存的页面对应

- 默认值: `'path'`
  
  根据 `route.path` 来缓存页面组件。


### i18n

语言配置

- 类型: `String | Object`

  - 如果类型为 `String` ，可以设置为内置的语言 `'zh-CN'` (默认) 和 `'en'`

  - 如果类型为 `Object` ，可设置自定义的语言

- 默认值: `'zh-CN'`


### tabs

**初始页签数据**，进入页面时默认显示的页签。相同 `aliveId` 的页签只保留第一个

- 类型: `Array <String | Object>`
  
  - tabs子元素类型为 `String` 时，应配置为要打开页面的 `fullPath` ，页签的标题、图标、提示等信息会从对应页面的 `router` 配置中获取

  - tabs子元素类型为 `Object` 时：
    
    - to: 页签路由地址，跟 `router.push` 的 `location` 参数一致，可以为 `fullPath`，也可以为 `location` 对象 - [参考文档](https://router.vuejs.org/zh/guide/essentials/navigation.html#router-push-location-oncomplete-onabort)
    
    - title: 页签标题，如果页面有设置 `routerTab.title` 动态标题，可在此设置最终的动态标题值，以免与默认从 `router` 获取的标题不一致
    
    - closable: 页签是否允许关闭，默认为 `true`

- 默认值: `[]`

### router-view

**Vue Router Tab 内置 `<router-view>` 组件的配置**

- 类型: `Object`
  
  配置参考: [Vue Router - \<router-view\> Props](https://router.vuejs.org/zh/api/#router-view-props)

- 默认值: `{}`



### tab-transition

**页签过渡效果**，新增和关闭页签时的过渡

- 类型: `String | Object`

  - 类型为 `String` 时，应配置为 `transition.name`

  - 类型为 `Object` 时，配置参考: [Vue - transition](https://cn.vuejs.org/v2/api/#transition)

- 默认值: `'router-tab-zoom'`


### page-transition

**页面过渡效果**

- 类型: `String | Object`
  
  同 [`tab-transition`](#tab-transition)

- 默认值: `{
  name: 'router-tab-swap',
  mode: 'out-in'
}`


## RouterTab 实例属性

### routerTab.activedTab

当前激活的页签id


## RouterTab 实例方法

::: tip
在 Vue 实例内部，您可以通过 `this.$routerTab` 来访问路由页签实例。例如：调用 `this.$routerTab.close()` 来关闭当前页签。
:::

### routerTab.close

- **参数**：
  - `{String | Object} [location]` 路由地址 - [参考文档](https://router.vuejs.org/zh/guide/essentials/navigation.html#router-push-location-oncomplete-onabort)
  - `{Boolean} [fullMatch = true]` 是否全匹配（匹配fullPath去除hash部分）

- **说明**：

  关闭指定 `location` 的页签

  
### routerTab.refresh

- **参数**：
  - `{String | Object} [location]` 路由地址 - [参考文档](https://router.vuejs.org/zh/guide/essentials/navigation.html#router-push-location-oncomplete-onabort)
  - `{Boolean} [fullMatch = true]` 是否全匹配（匹配fullPath去除hash部分）

- **说明**：

  刷新指定 `location` 的页签


### routerTab.refreshAll

- **参数**：
  - `{Boolean} [force = false]` 如果 `force` 为 `true`，则忽略页面组件的 `beforePageLeave` 配置，强制刷新所有页签

- **说明**：

  刷新所有页签



## Route.meta 路由元信息

通过路由的 `meta`，我们可以配置路由页签的标题、图标、提示和缓存规则

### meta.title

- 类型: `String`
- 默认值: `'新页签'`

页签标题


### meta.icon

- 类型: `String`

页签图标


### meta.tips

- 类型: `String`
- 默认值: 默认和页签标题 `meta.title` 保持一致

页签提示


### meta.aliveId

页面组件缓存的 id，用以设置路由独立的页签缓存规则。

配置参考: [RouterTab Props > alive-id](#alive-id)


## RouterPage 路由页面

通过 `RouterTab` 加载的页面组件


### beforePageLeave
 
  - **参数**: 
    - `{Function} resolve` 执行后允许离开页签
    - `{Function} reject` 执行后阻止离开页签
    - `{Object} tab` 页签信息
    - `{String} type` 离开类型：`close`: '关闭', `refresh`: '刷新', `replace`: '替换'

  - **说明**: 页面离开确认。页面组件选项，与 `data`, `methods` 并列


### vm.$routerTab

为了方便调用，`RouterTab` 将实例挂载在 `Vue.prototype` 上。因此，在所有 Vue 组件内部，您都可以通过 `this.$routerTab` 来访问路由页签实例


### vm.routeTab

**路由页签配置**。`RouterTab` 通过监听页面组件的 `this.routeTab` 来更新页面对应页签的标题、图标、提示

### vm._isRouterPage

**是否是路由页面**：在通过 `RouterTab` 加载的页面组件内部，访问 `this._isRouterPage` 会返回 `true`

::: tip
应用：在需要给路由页面添加全局混入 `mixin` 时，可在生命周期钩子（ `created` 之后）里判断 `this._isRouterPage`
:::
