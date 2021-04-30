<template>
  <div class="router-tab">
    <!-- 页签头部 -->
    <header ref="header" class="router-tab__header">
      <div class="router-tab__slot-start">
        <slot name="start" />
      </div>

      <tab-scroll ref="scroll">
        <!-- 页签列表 -->
        <transition-group
          tag="ul"
          class="router-tab__nav"
          v-bind="tabTrans"
          @after-enter="onTabTrans"
          @after-leave="onTabTrans"
        >
          <tab-item
            v-for="(item, index) in items"
            :key="item.id || item.to"
            ref="tab"
            :data="item"
            :index="index"
            @contextmenu.native.prevent="
              e => showContextmenu(item.id, index, e)
            "
          />
        </transition-group>
      </tab-scroll>

      <div class="router-tab__slot-end">
        <slot name="end" />
      </div>
    </header>

    <!-- 页面容器 -->
    <div class="router-tab__container">
      <router-alive
        page-class="router-tab-page"
        :keep-alive="keepAlive"
        :reuse="reuse"
        :max="maxAlive"
        :transition="pageTrans"
        :page-scroller="pageScroller"
        @ready="onAliveReady"
        @change="onAliveChange"
      />

      <!-- iframe 页面 -->
      <transition-group
        v-bind="pageTrans"
        tag="div"
        class="router-tab__iframes"
      >
        <iframe
          v-for="url in iframes"
          v-show="url === currentIframe"
          :key="url"
          :src="url"
          :name="iframeNamePrefix + url"
          frameborder="0"
          class="router-tab__iframe"
          @load="iframeLoaded(url)"
        />
      </transition-group>
    </div>

    <!-- 右键菜单 -->
    <transition name="router-tab-zoom">
      <tab-contextmenu
        v-if="contextmenu !== false && contextData.index > -1"
        :data="contextData"
        :menu="contextMenu"
      />
    </transition>
  </div>
</template>

<script src="./RouterTab.js"></script>
