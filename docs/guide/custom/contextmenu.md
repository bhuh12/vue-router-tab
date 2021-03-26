# Contextmenu

## Disable Contextmenu

You can disable the contextmenu by configuring `:contextmenu="false"`

**Example:**

```html
<router-tab :contextmenu="false" />
```

## Custom Contextmenu

Configure `contextmenu` through an array to customize the contextmenu

::: tip
Reference: [Built-in Contextmenu](https://github.com/bhuh12/vue-router-tab/blob/main/lib/config/contextmenu.js)
:::

<doc-links api="#contextmenu" demo="/contextmenu/" />

**Example:**

**Template**

```html
<router-tab
  :class="{ 'is-fullscreen': fullscreen }"
  :contextmenu="contextmenu"
/>
```

**Javascript**

```javascript
// full screen mixin
import fullscreen from '../../mixins/fullscreen'

export default {
  mixins: [fullscreen],

  computed: {
    contextmenu() {
      return [
        // Built-in menu
        'refresh',

        // Extend built-in menu: add icon
        {
          id: 'close',
          icon: 'rt-icon-close'
        },

        // Extend built-in menu: custom handler
        {
          id: 'closeOthers',
          handler({ $menu }) {
            $menu.closeMulti($menu.others)
            alert('Close other tabs')
          }
        },

        // custom menu
        {
          id: 'custom',
          title: 'Custom Action',
          tips: 'This is a custom action',
          icon: 'rt-icon-doc',
          class: 'custom-action',
          // Whether to display or not, default display
          visible(context) {
            return context.$tabs.items.length < 3
          },
          // Whether it is enabled or not, it will be enabled by default
          enable(context) {
            return !(context.data.index % 2)
          },
          // Click to trigger
          handler(context) {
            console.log(context)
            alert(
              'This is a custom operation, please open the console to view the output parameters'
            )
          }
        },

        // Menu with status: fullscreen
        {
          id: 'fullscreen',
          title: () => (this.fullscreen ? 'Exit Full Screen' : 'Full Screen'),
          icon: () =>
            this.fullscreen ? 'rt-icon-fullscreen-exit' : 'rt-icon-fullscreen',
          // Click to trigger
          handler: () =>
            setTimeout(() => {
              this.fullscreen = !this.fullscreen
            }, 300)
        }
      ]
    }
  }
}
```
