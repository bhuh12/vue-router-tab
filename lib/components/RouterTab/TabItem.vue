<template>
  <router-link
    tag="li"
    :class="{
      'router-tab-item': true,
      [tabClass || '']: true,
      actived: base.activeTabId === id,
      'is-closable': closable,
      'is-contextmenu': base.contextmenu.id === id
    }"
    :to="to"
  >
    <slot v-bind="this">
      <i v-if="icon" class="tab-icon" :class="icon" />
      <span class="tab-title" :title="tips">{{ title }}</span>
      <i v-if="closable" class="tab-close" @click.prevent="close" />
    </slot>
  </router-link>
</template>

<script>
// 从 data 的字段直接生成 computed
const mapDataComputed = (...keys) => {
  const map = {}
  keys.forEach(key => {
    map[key] = function () {
      return this.data[key]
    }
  })
  return map
}

// 页签项
export default {
  name: 'TabItem',
  inject: ['i18nText'],
  props: {
    // 页签原始数据，方便 slot 插槽自定义数据
    data: {
      type: Object,
      required: true
    },

    // 页签项索引
    index: Number
  },

  computed: {
    // RouterTab 根组件
    base () {
      return this.$parent.$parent
    },

    // 直接从 data 中获取值
    ...mapDataComputed('id', 'to', 'icon', 'tabClass', 'target', 'href'),

    // 未命名页签
    untitled () {
      return this.base.lang.tab.untitled
    },

    // 页签标题
    title () {
      return this.i18nText(this.data.title) || this.untitled
    },

    // 页签提示
    tips () {
      return this.i18nText(this.data.tips || this.data.title) || this.untitled
    },

    // 是否可关闭
    closable () {
      const { keepLastTab, items } = this.base
      return this.data.closable && !(keepLastTab && items.length < 2)
    }
  },

  methods: {
    // 关闭当前页签
    close () {
      this.$routerTab.closeTab(this.id)
    }
  }
}
</script>
