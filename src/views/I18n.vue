<template>
  <div>
    <h2>国际化路由页签</h2>

    <section>
      切换语言：
      <a
        v-for="lang in $lang.list()"
        :key="lang"
        :class="{primary: lang === $lang.get()}"
        class="demo-btn"
        @click="$lang.set(lang)"
      >{{ lang }}</a>
    </section>
  </div>
</template>
