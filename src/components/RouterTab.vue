<template>
  <div class="router-tab">
    <!-- 页签列表 -->
    <header class="router-tab-header">
      <div class="router-tab-scroll">
        <transition-group
          tag="ul"
          class="router-tab-nav"
          v-bind="typeof tabTransition === 'string' ? { name: tabTransition } : tabTransition"
          @after-enter="onTabTransitionEnd"
          @after-leave="onTabTransitionEnd"
        >
          <router-link
            v-for="({ id, to, title, icon, tips, closable }, index) in items"
            :key="id || to"
            class="router-tab-item"
            tag="li"
            :class="{ actived: activedTab === id, contextmenu: contextmenu.id === id }"
            :title="tips || title || ''"
            :to="to"
            @contextmenu.native.prevent="e => showContextmenu(id, index, e)"
          >
            <slot
              v-bind="{
                tab: items[index],
                tabs: items,
                index
              }"
            >
              <i
                v-if="icon"
                class="tab-icon"
                :class="icon"
              />
              <span class="tab-title">{{ title || lang.tab.untitled }}</span>
              <i
                v-if="closable !== false && items.length > 1"
                class="tab-close"
                :title="lang.contextmenu.close"
                @click.prevent="closeTab(id)"
              />
            </slot>
          </router-link>
        </transition-group>
      </div>

      <!-- 页签滚动 -->
      <a
        class="el-icon-caret-left nav-prev"
        @click="tabScroll('left')"
      />
      <a
        class="el-icon-caret-right nav-next"
        @click="tabScroll('right')"
      />
    </header>

    <!-- 页面容器 -->
    <div
      class="router-tab-container"
      :class="{ loading }"
    >
      <router-alive
        ref="routerAlive"
        :alive-id="aliveId"
        @update="updateTab"
      >
        <transition
          v-bind="typeof pageTransition === 'string' ? { name: pageTransition } : pageTransition"
          appear
          @after-enter="onPageTransitionEnd"
          @after-leave="onPageTransitionEnd"
        >
          <router-view
            v-if="isRouterAlive"
            ref="routerView"
            v-bind="routerView"
            class="router-tab-page"
          />
        </transition>
      </router-alive>
    </div>

    <!-- 右键菜单 -->
    <transition name="router-tab-zoom-lt">
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

<script src="./RouterTab.js"></script>

<style lang="scss" src="../scss/routerTab.scss"></style>
<style lang="scss" src="../scss/transition.scss"></style>
