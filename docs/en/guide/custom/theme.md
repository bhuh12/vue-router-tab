# Theming

The component exposes its theme via CSS variables — override the variables to re-skin it, no need to modify scss or import the source.

## Variable List

There are **5** in total, and that's all of them:

| Variable               | Default   | Purpose                                             |
| ---------------------- | --------- | --------------------------------------------------- |
| `--rtab-color-primary` | `#7857f6` | Primary color: active tab text, indicator bar below |
| `--rtab-border-color`  | `#eaecef` | Border: tab border, tab bar bottom line             |
| `--rtab-text-color`    | `#4d4d4d` | Regular text color, close icon                      |
| `--rtab-font-size`     | `14px`    | Tab and menu font size                              |
| `--rtab-header-height` | `40px`    | Tab bar height                                      |

## The Correct Way to Override

The variables are defined on the `.router-tab` selector **itself**, so overriding them requires matching or higher specificity:

```css
/* ✅ Same specificity, takes effect if loaded later */
.router-tab {
  --rtab-color-primary: #1890ff;
  --rtab-header-height: 36px;
}

/* ✅ Higher specificity, always takes effect */
.my-app .router-tab {
  --rtab-color-primary: #1890ff;
}
```

::: danger Setting It on :root Doesn't Work

```css
/* ❌ No effect */
:root {
  --rtab-color-primary: #1890ff;
}
```

CSS variables are inheritable, but **a declaration on the element itself takes priority over a value inherited from an ancestor**. `.router-tab` has its own `--rtab-color-primary` declaration, which overrides the value inherited from `:root`.

Likewise, setting it on any ancestor element (`body`, outer containers) has no effect.
:::

## Load Order

At the same specificity, the later declaration wins, so custom styles must be imported **after** the component styles:

```js
import 'vue-router-tab/dist/index.css'
import './my-theme.css' // Place this after
```

If you can't control the order, use higher specificity to work around it (see the second example above).

## Dark Mode

Combine with a media query or class name toggle:

```css
/* Follow the system */
@media (prefers-color-scheme: dark) {
  .router-tab {
    --rtab-border-color: #3a3a3a;
    --rtab-text-color: #d0d0d0;
  }
}

/* Manual toggle */
html.dark .router-tab {
  --rtab-border-color: #3a3a3a;
  --rtab-text-color: #d0d0d0;
}
```

## Different Themes per Instance

The variables apply to the `.router-tab` element, so adding a class name to different instances re-skins each independently:

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

See [Multiple Instances](../advanced/multi-instance) for details on multi-instance usage.

## Customization Beyond the Variables

For things the 5 variables don't cover (like tab corner radius, spacing), override the corresponding class directly:

```css
.router-tab__item {
  border-radius: 6px 6px 0 0;
}
```

Class names follow BEM; full list:

| class                                                     | Description                                 |
| --------------------------------------------------------- | ------------------------------------------- |
| `.router-tab`                                             | Root container                              |
| `.router-tab__header`                                     | Tab bar                                     |
| `.router-tab__nav`                                        | Tab navigation area                         |
| `.router-tab__scroll` / `.router-tab__scroll-container`   | Tab scroll area and its content container   |
| `.router-tab__scrollbar` / `.router-tab__scrollbar-thumb` | Custom scrollbar and thumb                  |
| `.router-tab__item`                                       | Tab item                                    |
| `.router-tab__item-icon`                                  | Tab icon                                    |
| `.router-tab__item-title`                                 | Tab title                                   |
| `.router-tab__item-close`                                 | Close button                                |
| `.router-tab__slot-start` / `.router-tab__slot-end`       | Start/end slot containers                   |
| `.router-tab__container`                                  | Page content container                      |
| `.router-tab__iframes` / `.router-tab__iframe`            | iframe container and individual iframe node |
| `.router-tab__contextmenu`                                | Context menu container                      |
| `.router-tab__contextmenu-item`                           | Menu item                                   |
| `.router-tab__contextmenu-icon`                           | Menu item icon                              |

State classes (added to the corresponding element):

| class                            | Meaning                               |
| -------------------------------- | ------------------------------------- |
| `.is-active`                     | Tab item is active                    |
| `.is-closable`                   | Tab item is closable                  |
| `.is-contextmenu`                | Tab item is right-click selected      |
| `.is-dragging` / `.is-drag-over` | Source and target during drag sorting |
| `.is-mobile`                     | Root container is in mobile layout    |

For example, to change only the active tab's background color:

```css
.router-tab__item.is-active {
  background-color: #f0f9ff;
}
```

When you need to replace the entire tab item structure, use [Tab Slots](./slot) rather than CSS overrides.
