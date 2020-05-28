<template>
  <div class="router-tab">
    <!-- 页签头部 -->
    <header :class="['router-tab-header', hasScroller && 'is-scroll']">
      <!-- 页签向前滚动 -->
      <a class="nav-prev" @click="tabScroll('left')" />

      <div class="router-tab-scroll">
        <!-- 页签列表 -->
        <transition-group
          tag="ul"
          class="router-tab-nav"
          v-bind="getTransOpt(tabTransition)"
          @after-enter="onTabTransitionEnd"
          @after-leave="onTabTransitionEnd"
        >
          <tab-item
            v-for="(item, index) in items"
            :key="item.id || item.to"
            :data="item"
            :index="index"
            @contextmenu.native.prevent="
              e => showContextmenu(item.id, index, e)
            "
          >
            <template v-if="$scopedSlots.default" v-slot:default="scope">
              <slot v-bind="scope" />
            </template>
          </tab-item>
        </transition-group>
      </div>

      <!-- 页签向后滚动 -->
      <a class="nav-next" @click="tabScroll('right')" />
    </header>

    <!-- 页面容器 -->
    <div class="router-tab-container" :class="{ loading }">
      <!-- 路由页面 -->
      <router-alive ref="routerAlive" :alive-id="aliveId" @update="updateTab">
        <transition
          v-bind="getTransOpt(pageTransition)"
          appear
          @after-enter="onPageTransitionEnd"
          @after-leave="onPageTransitionEnd"
        >
          <router-view
            v-if="isViewAlive"
            ref="routerView"
            v-bind="routerView"
            class="router-tab-page"
          />
        </transition>
      </router-alive>

      <!-- iframe 页面 -->
      <transition-group
        v-bind="getTransOpt(pageTransition)"
        tag="div"
        class="router-tab-iframes"
      >
        <iframe
          v-for="url in iframes"
          v-show="url === currentIframe"
          :key="url"
          :src="url"
          :name="iframeNamePrefix + url"
          frameborder="0"
          class="router-tab-iframe"
          @load="iframeLoaded(url)"
        />
      </transition-group>
    </div>

    <!-- 右键菜单 -->
    <transition name="router-tab-zoom">
      <div
        v-if="contextmenu.id"
        class="router-tab-contextmenu"
        :style="`left: ${contextmenu.left}px; top: ${contextmenu.top}px;`"
      >
        <a
          class="contextmenu-item"
          :disabled="!isContextTabActived"
          @click="isContextTabActived && refreshTab(contextmenu.id)"
        >
          {{ lang.contextmenu.refresh }}
        </a>

        <a
          class="contextmenu-item"
          :disabled="items.length < 2"
          @click="items.length > 1 && refreshAll()"
        >
          {{ lang.contextmenu.refreshAll }}
        </a>

        <a
          class="contextmenu-item"
          :disabled="!isContextTabCanBeClosed"
          @click="isContextTabCanBeClosed && closeTab(contextmenu.id)"
        >
          {{ lang.contextmenu.close }}
        </a>

        <a
          class="contextmenu-item"
          :disabled="!tabsLeft.length"
          @click="tabsLeft.length && closeMulti(tabsLeft)"
        >
          {{ lang.contextmenu.closeLefts }}
        </a>

        <a
          class="contextmenu-item"
          :disabled="!tabsRight.length"
          @click="tabsRight.length && closeMulti(tabsRight)"
        >
          {{ lang.contextmenu.closeRights }}
        </a>

        <a
          class="contextmenu-item"
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
