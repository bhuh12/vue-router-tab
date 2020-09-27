# Slot

RouterTab supports these slots:

| Slot Name | Scope | Description   |
| --------- | ----- | ------------- |
| `default` | `tab` | Tab item      |
| `start`   | -     | Tab bar start |
| `end`     | -     | Tab bar end   |

### Custom tab

You can customize your tabs using the available slot `default`. Inside the slot you will have access to following properties/attributes

| Properties | Type      | Description                   |
| ---------- | --------- | ----------------------------- |
| base       | Component | RouterTab instance            |
| data       | Object    | tab data                      |
| id         | String    | tab ID                        |
| title      | String    | title                         |
| tips       | String    | prompt                        |
| icon       | String    | icon                          |
| tabClass   | String    | tab class                     |
| closable   | Boolean   | Whether the tab can be closed |
| index      | Number    | tab index                     |
| close      | Function  | tab closing method            |

<doc-links demo="/slot/" />

**Example:**

<<< @/src/components/frames/Slot.vue

<!-- {4,13,22} -->
