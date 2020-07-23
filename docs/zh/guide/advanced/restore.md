# 刷新后还原页签

给 RouterTab 组件设置 `restore` 属性，可以设置在浏览器刷新后还原页签。

RouterTab 通过 sessionStorage 来存储页签缓存信息

<doc-links api="#restore" demo="/restore/" />

**默认方式**

```html
<router-tab restore />
```

**自定义缓存**

RouterTab 支持自定义本地存储的 key，根据给定的 key 来获取对应的缓存

在实际应用中，我们希望根据当前用户来存储浏览器页签信息。

```html
<router-tab :restore="userInfo.userId" />
```

**监听 restore 参数**

通常，我们的数据会从服务端异步获取，如果我们希望在用户数据获取到后再根据用户还原页签，可以配置 `restore-watch` 来监听 restore 参数，改变后自动还原对应用户的页签

```html
<router-tab :restore="userInfo.userId" restore-watch />
```
