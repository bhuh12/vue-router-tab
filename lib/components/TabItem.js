import { mapGetters } from '../util'

// 拖拽传输数据前缀
const TRANSFER_PREFIX = 'RouterTabDragSortIndex:'

// 排序拖拽数据
// 用以解决双核浏览器兼容模式下无法通过 dataTransfer.getData 获取数据
let dragSortData = null

// 页签项
// @vue/component
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
      onDragSort: false, // 是否正在拖拽
      isDragOver: false // 是否拖拽经过
    }
  },

  computed: {
    // 从 this.data 提取计算属性
    ...mapGetters('data', ['id', 'to', 'icon', 'tabClass', 'target', 'href']),

    // class
    classList() {
      return [
        'router-tab__item',
        this.tabClass,
        {
          'is-active': this.$tabs.activeTabId === this.id,
          'is-closable': this.closable,
          'is-contextmenu': this.$tabs.contextData.id === this.id,
          'is-drag-over': this.isDragOver && !this.onDragSort
        }
      ]
    },

    // 国际化
    i18nText() {
      return this.$tabs.i18nText
    },

    // 未命名页签
    untitled() {
      return this.$tabs.langs.tab.untitled
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
    // 插槽默认内容
    slotDefault() {
      return [
        this.icon && <i class={['router-tab__item-icon', this.icon]} />,
        <span class="router-tab__item-title" title={this.tips}>
          {this.title}
        </span>,
        this.closable && (
          <i
            class="router-tab__item-close"
            vOn:click_prevent_stop={this.close}
          />
        )
      ]
    },

    // 关闭当前页签
    close() {
      this.$tabs.closeTab(this.id)
    },

    // 拖拽
    onDragStart(e) {
      this.onDragSort = this.$tabs.onDragSort = true
      dragSortData = TRANSFER_PREFIX + this.index
      e.dataTransfer.setData('text', dragSortData)
      e.dataTransfer.effectAllowed = 'move'
    },

    // 拖拽悬浮
    onDragOver(e) {
      this.isDragOver = true
      e.dataTransfer.dropEffect = 'move'
    },

    // 拖拽结束
    onDragEnd() {
      this.onDragSort = this.$tabs.onDragSort = false
      dragSortData = null
    },

    // 释放后排序
    onDrop(e) {
      const { items } = this.$tabs
      const raw = e.dataTransfer.getData('text') || dragSortData

      this.isDragOver = false

      if (typeof raw !== 'string' || !raw.startsWith(TRANSFER_PREFIX)) return

      const fromIndex = raw.replace(TRANSFER_PREFIX, '')
      const tab = items[fromIndex]

      items.splice(fromIndex, 1)
      items.splice(this.index, 0, tab)
    }
  },

  // 渲染组件
  // 使用 jsx render 模式替换 template，避免 Vue 2.5.22 版本不支持子组件使用父组件的 slot 导致出错。
  render() {
    const { default: slot = this.slotDefault } = this.$tabs.$scopedSlots

    return (
      <RouterLink
        custom
        to={this.to}
        scopedSlots={{
          default: ({ navigate }) => {
            return (
              <li
                class={this.classList}
                draggable={this.$tabs.dragsort}
                vOn:click={navigate}
                vOn:dragstart={this.onDragStart}
                vOn:dragend={this.onDragEnd}
                vOn:dragover_prevent={this.onDragOver}
                vOn:dragleave_prevent={() => (this.isDragOver = false)}
                vOn:drop_stop_prevent={this.onDrop}
                vOn:click_middle={() => this.closable && this.close()}
              >
                {slot(this)}
              </li>
            )
          }
        }}
      ></RouterLink>
    )
  }
}
