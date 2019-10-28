# 刷新后还原页签

给 RouterTab 组件设置 `restore` 属性，可以设置在浏览器刷新后还原页签。

RouterTab 通过 sessionStorage 来存储页签缓存信息

<doc-links api="#restore" demo="/restore/"></doc-links>

**默认方式**

``` html
<router-tab restore />
```

**自定义缓存**

RouterTab 支持自定义本地存储的 key，根据给定的 key 来获取对应的缓存

在实际应用中，我们希望根据当前用户来存储浏览器页签信息。

``` html
<router-tab :restore="userInfo.userId" />
```
