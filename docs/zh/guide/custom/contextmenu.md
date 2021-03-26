# 右键菜单

## 禁用右键菜单

你可以通过配置 `:contextmenu="false"` 来禁用右键菜单

**示例：**

```html
<router-tab :contextmenu="false" />
```

## 自定义右键菜单

通过数组方式配置 `contextmenu`，可以自定义右键菜单

::: tip
参考：[内置右键菜单](https://github.com/bhuh12/vue-router-tab/blob/main/lib/config/contextmenu.js)
:::

<doc-links api="#contextmenu" demo="/contextmenu/" />

**示例：**

<<< @/src/components/frames/Contextmenu.vue

<!-- {4,13,22} -->
