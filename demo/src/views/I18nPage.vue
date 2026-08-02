<template>
  <div>
    <h2>国际化路由页签</h2>

    <section>
      切换语言：
      <a
        v-for="lang in $lang.list()"
        :key="lang"
        class="demo-btn"
        :class="{ primary: lang === $lang.get() }"
        @click="$lang.set(lang)"
      >
        {{ lang }}
      </a>
    </section>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'

import { LANG_KEY } from '../frames/I18n.shared'

const $lang = inject(LANG_KEY)!
</script>
