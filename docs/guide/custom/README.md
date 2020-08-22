# Tabs Behavior

## Drag Sort

RouterTab supports tab drag sort by default, you can disable this function by configuring `:dragsort="false"`.

<doc-links api="#dragsort" demo="/dragsort/" />

**Example:**

```html
<router-tab :dragsort="false" />
```

## Insert Position

RouterTab can specify the insert position of the new tab by configuring `append`, and supports the following two options:

- `last` End of tabs (default)

- `next` Next position of current tab

<doc-links api="#append" demo="/append/" />

**Example:**

```html
<router-tab append="next" />
```

## Close Last Tab

By default, the last tab of RouterTab can not be closed manually.

This behavior can be modified by configuring `:keep-last-tab="false"`.

After closing the last tab, RouterTab will redirect to the default route.

<doc-links api="#keep-last-tab" demo="/close-last-tab/" />

**Example:**

```html
<router-tab :keep-last-tab="false" />
```
