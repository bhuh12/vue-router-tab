# 页签行为

## 拖拽排序

RouterTab 默认支持页签拖拽排序，你可以通过配置 `:dragsort="false"` 来禁用该功能

<doc-links api="#dragsort" demo="/dragsort/" />

**示例：**

```html
<router-tab :dragsort="false" />
```

## 新页签插入位置

RouterTab 可以通过配置 `append` 来指定新页签插入位置，支持以下两种选项：

- `last` 页签末尾（默认）

- `next` 当前页签下一个

<doc-links api="#append" demo="/append/" />

**示例：**

```html
<router-tab append="next" />
```

## 关闭最后的页签

默认情况下，RouterTab 最后一个页签不允许手动关闭。

通过配置 `:keep-last-tab="false"` 可以修改这一行为。

在关闭最后的页签后，RouterTab 会为你跳转到默认路由。

<doc-links api="#keep-last-tab" demo="/close-last-tab/" />

**示例：**

```html
<router-tab :keep-last-tab="false" />
```
