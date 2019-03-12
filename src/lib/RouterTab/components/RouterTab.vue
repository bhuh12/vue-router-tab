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
          @after-leave="onTabTransitionEnd">

          <router-link
            class="router-tab-item"
            tag="li"
            v-for="({ id, to, title, icon, tips, closable }, index) in items"
            :class="{ actived: activedTab === id, contextmenu: contextmenu.id === id }"
            :title="tips || title || ''"
            :key="id || to"
            :to="to"
            @contextmenu.native.prevent="e => showContextmenu(id, index, e)">

            <slot v-bind="{
              tab: items[index],
              tabs: items,
              index
            }">
              <i v-if="icon" class="tab-icon" :class="icon"></i>
              <span class="tab-title">{{title || lang.tab.untitled}}</span>
              <i class="tab-close" v-if="closable !== false && items.length > 1" :title="lang.contextmenu.close" @click.prevent="closeTab(id)"></i>
            </slot>
          </router-link>
        </transition-group>
      </div>

      <!-- 页签滚动 -->
      <a class="el-icon-caret-left nav-prev" @click="tabScroll('left')"></a>
      <a class="el-icon-caret-right nav-next" @click="tabScroll('right')"></a>
    </header>

    <!-- 页面容器 -->
    <div class="router-tab-container" :class="{ loading }">
      <router-alive ref="routerAlive" :alive-id="aliveId" @update="updateTab">
        <transition
          v-bind="typeof pageTransition === 'string' ? { name: pageTransition } : pageTransition"
          @after-enter="onPageTransitionEnd"
          @after-leave="onPageTransitionEnd"
          appear>
          <router-view ref="routerView" v-if="isRouterAlive" v-bind="routerView"/>
        </transition>
      </router-alive>
    </div>

    <!-- 右键菜单 -->
    <transition name="router-tab-zoom-lt">
      <div class="router-tab-contextmenu" :style="`left: ${contextmenu.left}px; top: ${contextmenu.top}px;`" v-if="contextmenu.id">
        <a class="contextmenu-item" :disabled="!isContextTabActived" @click="isContextTabActived && refreshTab(contextmenu.id)">
          {{lang.contextmenu.refresh}}
        </a>

        <a class="contextmenu-item" :disabled="items.length < 2" @click="items.length > 1 && refreshAll()">
          {{lang.contextmenu.refreshAll}}
        </a>

        <a class="contextmenu-item" :disabled="!isContextTabCanBeClosed" @click="isContextTabCanBeClosed && closeTab(contextmenu.id)">
          {{lang.contextmenu.close}}
        </a>

        <a class="contextmenu-item" :disabled="!tabsLeft.length" @click="tabsLeft.length && closeMulti(tabsLeft)">
          {{lang.contextmenu.closeLefts}}
        </a>

        <a class="contextmenu-item" :disabled="!tabsRight.length" @click="tabsRight.length && closeMulti(tabsRight)">
          {{lang.contextmenu.closeRights}}
        </a>

        <a class="contextmenu-item" :disabled="!tabsOther.length" @click="tabsOther.length && closeMulti(tabsOther)">
          {{lang.contextmenu.closeOthers}}
        </a>
      </div>
    </transition>
  </div>
</template>

<script src="./RouterTab.js"></script>

<style lang="scss" src="../scss/RouterTab.scss"></style>
<style lang="scss" src="../scss/transition.scss"></style>
