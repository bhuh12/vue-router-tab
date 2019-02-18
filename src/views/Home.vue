<template>
  <div>
    <nav class="demo-nav">
      <router-link to="/page/2">params:2</router-link>
      <router-link to="/page/2?t=3">params:2 query:t=3</router-link>
      <router-link to="/page/3">params:3</router-link>
    </nav>
    <router-tab/>
  </div>
</template>

<style lang="scss" scoped>
.demo-nav {
  margin-bottom: 10px;

  a {
    margin-right: 15px;
    font-size: 13px;
    color: blue;

    &:hover {
      color: orange;
    }

    &.router-link-exact-active {
      font-weight: 700;
    }
  }
}
</style>
