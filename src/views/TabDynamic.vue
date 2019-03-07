<template>
  <div class="app-page">
    <h2>动态页签</h2>

    <div class="form-item">
      <label>
        <p>修改页签标题</p>
        <input type="text" v-model="routeTab.title">
      </label>
    </div>

    <div class="form-item">
      <label>
        <p>修改页签提示</p>
        <input type="text" v-model="routeTab.tips">
      </label>
    </div>

    <div class="form-item tab-icons">
      <p>切换图标</p>
      <a
        class="tab-icon"
        v-for="icon in icons"
        :key="icon"
        :class="`${icon === routeTab.icon ? 'actived' : ''} ${icon}`"
        title="设置页签图标"
        @click="routeTab.icon = icon"
      ></a>
    </div>

  </div>
</template>

<script>
export default {
  data () {
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
    margin: .5em 0;
  }
}

.tab-icons {
  a {
    margin-right: 1em;
    font-size: 20px;
    cursor: pointer;

    &.actived {
      color: $color;
    }
  }
}
</style>
