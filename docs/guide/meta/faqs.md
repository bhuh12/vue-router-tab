# FAQ

### 📣 Child routes don't render in tabs ([issues 78](https://github.com/bhuh12/vue-router-tab/issues/78))

RouterTab is deliberately designed in this way. Only the direct sub-routes of routes that use the RouterTab component will generate the tab page. The nested lower-level routing is displayed as in Vue Router.

Imagine that there are **subtabs** inside our tab page, and the subtabs also need to respond to routing. This scenario must be supported by nested routing

It would be very messy for all tab routing to be placed directly on the same layer. We can use the `...` expansion operator to merge and import the routing configuration of different modules:

```javascript
// RouterTab built-in routing
import {RouterTabRoutes} from'vue-router-tab'

const news = [{...}]
const product = [{...}]

const routes = [
   {
     path:'/',
     component: Frame,
     children: [
       ...RouterTabRoutes,
       ...news,
       ...product,
     ]
   }
]
```
