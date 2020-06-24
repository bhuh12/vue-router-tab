<template>
  <div class="router-tab" :class="{ 'is-mobile': isMobile }">
    <!-- 页签头部 -->
    <header
      ref="header"
      :class="['router-tab__header', hasScroller && 'is-scroll']"
    >
      <div class="router-tab__slot-start">
        <slot name="start" />
      </div>

      <div ref="scroll" class="router-tab__scroll" @wheel.prevent="tabWheel">
        <!-- 页签列表 -->
        <transition-group
          ref="nav"
          tag="ul"
          class="router-tab__nav"
          v-bind="tabTrans"
          @after-enter="onTabTransEnd"
          @after-leave="onTabTransEnd"
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
          >
            <template v-if="$scopedSlots.default" #default="scope">
              <slot v-bind="scope" />
            </template>
          </tab-item>
        </transition-group>

        <div ref="scroller" class="router-tab__scroller"></div>
      </div>

      <div class="router-tab__slot-end">
        <slot name="end" />
      </div>
    </header>

    <!-- 页面容器 -->
    <div class="router-tab__container" :class="{ loading }">
      <router-alive
        page-class="router-tab-page"
        :keep-alive="keepAlive"
        :reuse="reuse"
        :max="maxAlive"
        :transition="pageTrans"
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
      <div
        v-if="contextmenu.id"
        class="router-tab__contextmenu"
        :style="`left: ${contextmenu.left}px; top: ${contextmenu.top}px;`"
      >
        <a
          class="router-tab__contextmenu-item"
          @click="refreshTab(contextmenu.id)"
        >
          {{ lang.contextmenu.refresh }}
        </a>

        <a
          class="router-tab__contextmenu-item"
          :disabled="items.length < 2"
          @click="items.length > 1 && refreshAll()"
        >
          {{ lang.contextmenu.refreshAll }}
        </a>

        <a
          class="router-tab__contextmenu-item"
          :disabled="!isContextTabCanBeClosed"
          @click="isContextTabCanBeClosed && closeTab(contextmenu.id)"
        >
          {{ lang.contextmenu.close }}
        </a>

        <a
          class="router-tab__contextmenu-item"
          :disabled="!tabsLeft.length"
          @click="tabsLeft.length && closeMulti(tabsLeft)"
        >
          {{ lang.contextmenu.closeLefts }}
        </a>

        <a
          class="router-tab__contextmenu-item"
          :disabled="!tabsRight.length"
          @click="tabsRight.length && closeMulti(tabsRight)"
        >
          {{ lang.contextmenu.closeRights }}
        </a>

        <a
          class="router-tab__contextmenu-item"
          :disabled="!tabsOther.length"
          @click="tabsOther.length && closeMulti(tabsOther)"
        >
          {{ lang.contextmenu.closeOthers }}
        </a>
      </div>
    </transition>
  </div>
</template>

<script src="./index.js"></script>

<style lang="scss" src="../../scss/routerTab.scss"></style>
<style lang="scss" src="../../scss/transition.scss"></style>
