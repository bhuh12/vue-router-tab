# 主题定制

组件通过 CSS 变量暴露主题，覆盖变量即可换肤，无需改 scss 或引入源码。

## 变量清单

共 **5 个**，这就是全部：

| 变量                   | 默认值    | 作用                           |
| ---------------------- | --------- | ------------------------------ |
| `--rtab-color-primary` | `#7857f6` | 主色：激活页签文字、下方指示条 |
| `--rtab-border-color`  | `#eaecef` | 边框：页签边框、页签栏下边线   |
| `--rtab-text-color`    | `#4d4d4d` | 常规文字色、关闭图标           |
| `--rtab-font-size`     | `14px`    | 页签与菜单字号                 |
| `--rtab-header-height` | `40px`    | 页签栏高度                     |

## 正确的覆盖方式

变量定义在 `.router-tab` **自身**的选择器上，因此覆盖时必须达到同等或更高特异性：

```css
/* ✅ 同特异性，后加载即生效 */
.router-tab {
  --rtab-color-primary: #1890ff;
  --rtab-header-height: 36px;
}

/* ✅ 更高特异性，一定生效 */
.my-app .router-tab {
  --rtab-color-primary: #1890ff;
}
```

::: danger 写在 :root 上不生效

```css
/* ❌ 无效 */
:root {
  --rtab-color-primary: #1890ff;
}
```

CSS 变量虽然可继承，但**元素自身的声明优先于从祖先继承的值**。`.router-tab` 上有自己的 `--rtab-color-primary` 声明，它会覆盖从 `:root` 继承来的值。

同理，写在任何祖先元素（`body`、外层容器）上都不生效。
:::

## 加载顺序

同特异性下后声明者胜出，所以自定义样式要在组件样式**之后**引入：

```js
import 'vue-router-tab/dist/index.css'
import './my-theme.css' // 放在后面
```

若无法控制顺序，用更高特异性绕过（见上文第二个示例）。

## 深色模式

配合媒体查询或类名切换：

```css
/* 跟随系统 */
@media (prefers-color-scheme: dark) {
  .router-tab {
    --rtab-border-color: #3a3a3a;
    --rtab-text-color: #d0d0d0;
  }
}

/* 手动切换 */
html.dark .router-tab {
  --rtab-border-color: #3a3a3a;
  --rtab-text-color: #d0d0d0;
}
```

## 多实例不同主题

变量作用在 `.router-tab` 元素上，给不同实例加类名即可各自换肤：

```vue
<template>
  <RouterTab tab-id="main" class="theme-blue" />
  <RouterTab tab-id="side" class="theme-orange" />
</template>

<style>
.router-tab.theme-blue {
  --rtab-color-primary: #1890ff;
}

.router-tab.theme-orange {
  --rtab-color-primary: #fa8c16;
}
</style>
```

多实例用法详见[多实例](../advanced/multi-instance)。

## 超出变量范围的定制

5 个变量覆盖不到的部分（如页签圆角、间距），直接覆盖对应 class：

```css
.router-tab__item {
  border-radius: 6px 6px 0 0;
}
```

class 命名遵循 BEM，完整清单：

| class                                                     | 说明                          |
| --------------------------------------------------------- | ----------------------------- |
| `.router-tab`                                             | 根容器                        |
| `.router-tab__header`                                     | 页签栏                        |
| `.router-tab__nav`                                        | 页签导航区                    |
| `.router-tab__scroll` / `.router-tab__scroll-container`   | 页签滚动区与其内容容器        |
| `.router-tab__scrollbar` / `.router-tab__scrollbar-thumb` | 自定义滚动条与滑块            |
| `.router-tab__item`                                       | 页签项                        |
| `.router-tab__item-icon`                                  | 页签图标                      |
| `.router-tab__item-title`                                 | 页签标题                      |
| `.router-tab__item-close`                                 | 关闭按钮                      |
| `.router-tab__slot-start` / `.router-tab__slot-end`       | 前后插槽容器                  |
| `.router-tab__container`                                  | 页面内容容器                  |
| `.router-tab__iframes` / `.router-tab__iframe`            | iframe 容器与单个 iframe 节点 |
| `.router-tab__contextmenu`                                | 右键菜单容器                  |
| `.router-tab__contextmenu-item`                           | 菜单项                        |
| `.router-tab__contextmenu-icon`                           | 菜单项图标                    |

状态类（加在对应元素上）：

| class                            | 含义                 |
| -------------------------------- | -------------------- |
| `.is-active`                     | 页签项处于激活态     |
| `.is-closable`                   | 页签项可关闭         |
| `.is-contextmenu`                | 页签项被右键选中     |
| `.is-dragging` / `.is-drag-over` | 拖拽排序中的源与目标 |
| `.is-mobile`                     | 根容器处于移动端布局 |

例如只想改激活页签的底色：

```css
.router-tab__item.is-active {
  background-color: #f0f9ff;
}
```

需要替换整个页签项结构时，用[页签插槽](./slot)而非 CSS 覆盖。
