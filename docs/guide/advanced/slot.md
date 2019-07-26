# 自定义页签模板

通过 `router-tab` 组件的默认作用域插槽，我们可以自定义页签显示的内容

插槽的作用域提供以下属性供模板使用：
  - **tab** {Object} 页签项信息，包括 `id`, `title`, `icon`, `closable` 等
  - **tabs** {Array} 页签列表
  - **index** {Number} 索引

<doc-links demo="/slot/"></doc-links>

**示例：**

<<< @/demo/components/frames/Slot.vue{3,6}
