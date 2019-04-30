# 初始展示页签

通过配置 `router-tab` 组件的 `tabs` 属性，可以设置进入页面时默认显示的页签。

<doc-links api="#tabs" demo="/initial-tabs/"></doc-links>

**示例：**

  ``` html
  <router-tab :tabs="tabs"/>
  ```

  ``` javascript {7,10,13,16,17,18,19,20,21,22}
  export default {
    data () {
      return {
        // 默认页签项
        tabs: [
          // 推荐 fullPath 方式配置默认页签项。RouterTab 会自动获取路由里的页签配置
          '/page/1',

          // 设置初始 title，用于需要动态更新页签信息的路由页面
          { to: '/page/2', title: '页面2', icon: 'icon-page' },

          // 设置 closable 为 false，可以禁止页签被关闭
          { to: '/page/3', closable: false },

          // 也可以 location 方式设置默认页签项
          {
            to: {
              name: 'page',
              params: { id: 4 },
              query: { t: 2 }
            }
          },
          
          // 此页面与'/page/2'的aliveId一致，将只保留先设置的页签
          { to: '/page/2?t=1', title: '页面2-1' }
        ]
      }
    }
  }
  ```