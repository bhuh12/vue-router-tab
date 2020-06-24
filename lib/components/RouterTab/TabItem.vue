<template>
  <router-link
    tag="li"
    :class="{
      'router-tab__item': true,
      [tabClass || '']: true,
      'is-active': Tab.activeTabId === id,
      'is-closable': closable,
      'is-contextmenu': Tab.contextmenu.id === id
    }"
    :to="to"
  >
    <slot v-bind="this">
      <i v-if="icon" class="router-tab__item-icon" :class="icon" />
      <span class="router-tab__item-title" :title="tips">{{ title }}</span>
      <i
        v-if="closable"
        class="router-tab__item-close"
        @click.prevent.stop="close"
      />
    </slot>
  </router-link>
</template>

<script>
import { mapGetters } from '../../util'

// 页签项
export default {
  name: 'TabItem',
  inject: ['Tab'],
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
    // 从 this.data 提取计算属性
    ...mapGetters('data', ['id', 'to', 'icon', 'tabClass', 'target', 'href']),

    // 国际化
    i18nText() {
      return this.Tab.i18nText
    },

    // 未命名页签
    untitled() {
      return this.Tab.lang.tab.untitled
    },

    // 页签标题
    title() {
      return this.i18nText(this.data.title) || this.untitled
    },

    // 页签提示
    tips() {
      return this.i18nText(this.data.tips || this.data.title) || this.untitled
    },

    // 是否可关闭
    closable() {
      const { keepLastTab, items } = this.Tab
      return this.data.closable !== false && !(keepLastTab && items.length < 2)
    }
  },

  methods: {
    // 关闭当前页签
    close() {
      this.Tab.closeTab(this.id)
    }
  }
}
</script>
