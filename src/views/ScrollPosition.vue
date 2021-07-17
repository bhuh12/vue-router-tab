<template>
  <div class="scroll-page">
    <div class="custom-scroller">
      <div v-if="loading" class="page-loading">加载中...</div>
      <p v-for="(item, index) in list" :key="index">
        这里是滚动内容的第 <strong>{{ index + 1 }}</strong> 行
      </p>
    </div>

    <div v-if="multi" class="custom-scroller-1">
      <p v-for="(item, index) in list" :key="index">
        这里是滚动内容的第 <strong>{{ index + 1 }}</strong> 行
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScrollPosition',

  pageScroller: '.custom-scroller',

  data() {
    return {
      loading: false,
      list: new Array(100),
      multi: false
    }
  }
}
</script>

<style lang="scss" scoped>
.scroll-page {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: 100%;
}

.custom-scroller,
.custom-scroller-1 {
  position: relative;
  flex: 1;
  padding-left: 20px;
  overflow: auto;
  border: 1px solid #eaecef;

  &:hover {
    border-color: #ccc;
  }
}

.custom-scroller-1 {
  margin-top: 20px;
}

.page-loading {
  font-size: 15px;
  line-height: 100px;
  text-align: center;
}
</style>
