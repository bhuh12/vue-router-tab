<template>
  <div>
    <h2>动态页签</h2>

    <div class="form-item">
      <label>
        <p>修改页签标题</p>
        <input v-model="routeTab.title" type="text" />
      </label>
    </div>

    <div class="form-item">
      <label>
        <p>修改页签提示</p>
        <input v-model="routeTab.tips" type="text" />
      </label>
    </div>

    <div class="form-item tab-icons">
      <p>切换图标</p>
      <a
        v-for="icon in icons"
        :key="icon"
        class="tab-icon"
        :class="`${icon === routeTab.icon ? 'is-active' : ''} ${icon}`"
        title="设置页签图标"
        @click="routeTab.icon = icon"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routeTab: {
        title: '动态页签',
        icon: 'rt-icon-log',
        tips: ''
      },

      icons: ['rt-icon-log', 'rt-icon-doc', 'rt-icon-contact']
    }
  }
}
</script>

<style lang="scss" scoped>
.form-item {
  margin-bottom: 1rem;

  p {
    margin: 0.5em 0;
  }
}

.tab-icons {
  a {
    margin-right: 1em;
    font-size: 20px;
    cursor: pointer;

    &.is-active {
      color: $color;
    }
  }
}
</style>
