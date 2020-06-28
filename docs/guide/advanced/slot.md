# Slot

RouterTab supports these slots:

| Name      | Scope | Description |
| --------- | ----- | ----------- |
| `default` | `tab` | tab item    |
| `start`   | -     | tab start   |
| `end`     | -     | tab end     |

### Custom tab

You can customize your tabs using the available slot `default`. Inside the slot you will have access to following properties/attributes

| Properties | Type      | Description                                      |
| ---------- | --------- | ------------------------------------------------ |
| base       | Component | RouterTab instance                               |
| data       | Object    | tab data                                         |
| id         | String    | tab ID                                           |
| title      | String    | title                                            |
| tips       | String    | prompt                                           |
| icon       | String    | icon                                             |
| tabClass   | String    | tab class                                        |
| closable   | Boolean   | if the user will be able to close the tab or not |
| index      | Number    | tab index                                        |
| close      | Function  | tab closing method                               |

<doc-links demo="/slot/"></doc-links>

**Example:**

<<< @/src/components/frames/Slot.vue

<!-- {4,13,22} -->
