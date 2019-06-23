# 页签规则

不同的页签维护着各自的页面缓存，而**页签规则**定义了不同的路由**打开页签的方式**。


## 内置规则

- `path` (默认规则)
  - 规则：`(route, pagePath) => pagePath || route.path` 
  - 说明：相同 route.params 的路由共用页签，嵌套路由页签根据 pagePath
  - <demo-link href="/default/rule/a/1"/>

- `fullPath`
  - 规则：`(route, pagePath) => pagePath || route.fullPath.replace(route.hash, '')` 
  - 说明：相同 route.params 和 route.query 的路由共用页签，嵌套路由页签根据 pagePath
  - <demo-link href="/global-rule/rule/a/1"/>


## 全局页签规则

通过配置 `router-tab` 组件的 `alive-id` 属性，您可以定义全局的页签规则

<doc-links api="#alive-id" demo="/global-rule/rule/a/1"></doc-links>

**示例：**

``` html
<router-tab :alive-id="(route, pagePath) => pagePath || route.fullPath.replace(route.hash, '')"/>
```

例子中，配置 `alive-id` 为 `fullPath` 去除 `hash` 部分。

根据该规则，`page/1` 和 `page/1?query=2`、`page/2`、`page/2?query=2` 这四个地址都是打开**不同**的页签。而 `page/1` 和 `page/1#hash1` 是同一个页签，因为它们忽略 `hash` 后的路径一致。

该规则已经内置在 `RouterTab` 中了，因此，您也可以直接这样使用：

``` html
<router-tab alive-id="fullPath"/>
```


## 路由页签规则

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
    aliveId (route, pagePath) {
      return `/my-page/${route.params.catalog}`
    }
  }
}
```

根据示例中的页签规则，`/my-page/a/1` 和 `/my-page/a/2` 打开的是**同一个**页签。而 `/my-page/b/1` 和 `/my-page/b/2` 则打开另外一个页签
