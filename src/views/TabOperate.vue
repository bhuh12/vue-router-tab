<template>
  <div class="app-page">
    <h2>页签操作</h2>

    <p>你在<strong>{{pageTime}}</strong>秒前打开本页面</p>

    <div class="btn-list">
      <router-link class="btn" to="/default/page/1">打开“页面1”</router-link>

      <a class="btn" @click="$routerTab.refresh('/default/page/1')">刷新“页面1”</a>

      <router-link class="btn" to="/default/tab-dynamic">打开“动态页签”</router-link>

      <a class="btn" @click="$routerTab.close('/default/tab-dynamic')">关闭“动态页签”</a>

      <a class="btn" @click="$routerTab.refresh()">刷新当前页面</a>

      <a class="btn" @click="$routerTab.close()">关闭当前页面</a>
    </div>
  </div>
</template>

<script>
import pageTimer from '@/mixins/pageTimer'

export default {
  mixins: [ pageTimer ]
}
</script>

<style lang="scss" scoped>
.btn-list {
  display: inline-flex;
  flex-direction: column;
}

.btn {
  display: inline-block;
  margin-bottom: 1em;
  padding: 2px 8px;
  font-size: 14px;
  color: #333;
  text-decoration: none;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid #ccc;

  &:hover {
    color: $color;
  }
}
</style>
