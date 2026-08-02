# 路由元信息

路由元信息，共 **10 个字段**：

| 字段        | 类型                 | 函数式 | 说明                       |
| ----------- | -------------------- | ------ | -------------------------- |
| `title`     | `MetaValue<string>`  | ✅     | 页签标题                   |
| `tips`      | `MetaValue<string>`  | ✅     | 悬浮提示，缺省回落 `title` |
| `icon`      | `MetaValue<string>`  | ✅     | 图标 class                 |
| `closable`  | `MetaValue<boolean>` | ✅     | 是否可关闭                 |
| `tabClass`  | `MetaValue<string>`  | ✅     | 页签自定义 class           |
| `key`       | `MetaValue<string>`  | ✅     | 页签规则                   |
| `keepAlive` | `boolean`            | ❌     | 是否缓存                   |
| `reuse`     | `boolean`            | ❌     | 是否复用组件               |
| `href`      | `string`             | ❌     | 外链地址                   |
| `target`    | `string`             | ❌     | 外链打开方式               |

前 6 项为 `MetaValue<T>`，可传函数（入参当前路由）实现动态值。后 4 项只接受静态值 —— `href` / `target` **不参与函数求值**。

```js
meta: {
  routerTab: {
    title: route => `订单 #${route.params.id}`,
    key: 'path',
    keepAlive: true
  }
}
```

## key 的取值规则

内置规则**只有 2 个**（大小写不敏感）：

| 规则名     | 取值             |
| ---------- | ---------------- |
| `path`     | `route.path`     |
| `fullpath` | `route.fullPath` |

不匹配内置规则名的字符串直接作为固定 key。

::: danger 函数式 key 不能返回内置规则名
返回值会再走一遍规则表解析，`() => 'path'` 会被当成内置规则名。
:::

缺省时取当前层级的 `matched.path`。详见[页签规则](/guide/essentials/rule)。
