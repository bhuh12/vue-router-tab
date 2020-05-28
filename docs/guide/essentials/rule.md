# Tab rules

Different tabs maintain their own page caches, and **page tab rules** define different routes **ways to open tabs by routing**.

## Built-in rules

- `path` (default rule)

  - Rule：`(route, pagePath) => pagePath || route.path`
  - Note: Routes with the same route.params share tabs, nested route tabs are based on pagePath
  - <demo-link href="/default/rule/a/1"/>

- `fullPath`
  - Rule：`(route, pagePath) => pagePath || route.fullPath.replace(route.hash, '')`
  - Note: Routes with the same route.params and route.query share tabs. Nested route tabs are based on pagePath
  - <demo-link href="/global-rule/rule/a/1"/>

## Global rules

By configuring RouterTab component `alive-id` attributes, you can define global rules tab

<doc-links api="#alive-id" demo="/global-rule/rule/a/1"></doc-links>

**Examples：**

```html
<router-tab
  :alive-id="(route, pagePath) => pagePath || route.fullPath.replace(route.hash, '')"
/>
```

Example, if `alive-id` is set to `fullPath` tabs will be created for each unique route except `hash`.

Routes like `page/1` and `page/1?query=2` and `page/2` and `page/2?query=2` are treated as **four seperate tabs** because they are four **unique** addresses. But routes with `hashes` like `page/1` and `page/1#hash1` will be treated as the **same** tab.

This rule are set as `default`, but you can also use it directly like this:

```html
<router-tab alive-id="fullPath" />
```

## Routing rules

By configuring the routing of `meta.aliveId` properties, you can customize the tab for a particular route.

<doc-links api="#meta-aliveid" demo="/default/route-rule/a/1"></doc-links>

**Example：**

```javascript {9,10,11}
const route = {
  path: '/my-page/:catalog/:type',
  component: {
    template:
      '<div>Custom：{{$route.params.catalog}}/{{$route.params.type}}</div>'
  },
  meta: {
    title: 'Custom',
    aliveId(route, pagePath) {
      return `/my-page/${route.params.catalog}`
    }
  }
}
```

According to the example, `/my-page/a/1` and `/my-page/a/2` will be the in the same tab. While `/my-page/b/1` and `/my-page/b/2` will open a sperate tab.
