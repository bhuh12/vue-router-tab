<template>
  <div>
    <header class="header">
      嵌套路由{{ $route.params.nestId }}
      <input type="text">
    </header>

    <div class="content">
      <nav class="nav">
        <router-link to="./page1">
          页面1
        </router-link>
        <router-link to="./page2">
          页面2
        </router-link>
      </nav>
      <router-view class="page" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
$border: 1px solid #ddd;

.router-tab-page {
  display: flex;
  flex-direction: column;
  padding: 0 !important;
  height: 100%;
}

.header {
  padding: 15px;
  font-size: 18px;
  line-height: 1;
  border-bottom: $border;
}

.content {
  flex: auto;
  overflow: auto;

  .nav {
    float: left;
    width: 100px;
    height: 100%;
    border-right: $border;

    a {
      display: block;
      padding: .8em 1em;
      color: #2c3e50;
      text-decoration: none;
      border-bottom: $border;

      &:hover {
        color: $color;
      }

      &.router-link-active {
        color: $color;
        background-color: #f7f7f7;
      }
    }
  }

  .page {
    padding-left: 20px;
    height: 100%;
    overflow: auto;
  }
}
</style>
