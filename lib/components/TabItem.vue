<template>
  <router-link
    tag="li"
    :class="{
      'router-tab__item': true,
      [tabClass || '']: true,
      'is-active': $tabs.activeTabId === id,
      'is-closable': closable,
      'is-contextmenu': $tabs.contextData.id === id,
      'is-drag-over': isDragOver && !isDragging
    }"
    :to="to"
    :draggable="$tabs.dragsort"
    @dragstart.native="onDragStart"
    @dragend.native="onDragEnd"
    @dragover.native.prevent="isDragOver = true"
    @dragleave.native.prevent="isDragOver = false"
    @drop.native="onDrop"
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
import { mapGetters } from '../util'

// 页签项
export default {
  name: 'TabItem',
  inject: ['$tabs'],
  props: {
    // 页签原始数据，方便 slot 插槽自定义数据
    data: {
      type: Object,
      required: true
    },

    // 页签项索引
    index: Number
  },

  data() {
    return {
      isDragging: false, // 是否正在拖拽
      isDragOver: false // 是否拖拽经过
    }
  },

  computed: {
    // 从 this.data 提取计算属性
    ...mapGetters('data', ['id', 'to', 'icon', 'tabClass', 'target', 'href']),

    // 国际化
    i18nText() {
      return this.$tabs.i18nText
    },

    // 未命名页签
    untitled() {
      return this.$tabs.lang.tab.untitled
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
      const { keepLastTab, items } = this.$tabs
      return this.data.closable !== false && !(keepLastTab && items.length < 2)
    }
  },

  methods: {
    // 关闭当前页签
    close() {
      this.$tabs.closeTab(this.id)
    },

    // 拖拽
    onDragStart(e) {
      this.isDragging = this.$tabs.isDragging = true
      e.dataTransfer.dropEffect = 'move'
      e.dataTransfer.setData('text', this.index + '')
    },

    // 拖拽结束
    onDragEnd() {
      this.isDragging = this.$tabs.isDragging = false
    },

    // 释放后排序
    onDrop(e) {
      const { items } = this.$tabs
      const fromIndex = +e.dataTransfer.getData('text')
      const tab = items[fromIndex]

      items.splice(fromIndex, 1)
      items.splice(this.index, 0, tab)

      this.isDragOver = false
    }
  }
}
</script>
