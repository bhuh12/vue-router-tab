# 自定义页签模板

通过 `router-tab` 组件的默认作用域插槽，我们可以自定义页签显示的内容

插槽的作用域提供以下属性供模板使用：
  - **tab** {Object} 页签项信息，包括 `id`, `title`, `icon`, `closable` 等
  - **tabs** {Array} 页签列表
  - **index** {Number} 索引

<doc-links demo="/slot/"></doc-links>

**示例：**

``` html {2}
<router-tab>
  <template v-slot="{ tab: { id, title, icon, closable }, tabs, index}">
    <i
      v-if="icon"
      class="tab-icon"
      :class="icon"
    />
    <span class="tab-title">{{ $routerTab.i18nText(title) || '未命名页签' }}</span>
    <span class="tab-badge">{{ index }}</span>
    <i
      v-if="closable !== false && tabs.length > 1"
      class="tab-close"
      @click.prevent="$routerTab.closeTab(id)"
    />
  </template>
</router-tab>
```