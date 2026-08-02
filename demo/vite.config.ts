import { fileURLToPath } from 'node:url'

import { defineConfig, normalizePath } from 'vite'
import vue from '@vitejs/plugin-vue'

/** demo 源码目录（正斜杠，用于匹配 Vite 传入的 filename） */
const srcDir = normalizePath(fileURLToPath(new URL('./src', import.meta.url)))

/** scss 公共变量绝对路径 */
const varsFile = `${srcDir}/assets/scss/variables.scss`

export default defineConfig({
  plugins: [vue()],
  // 部署在 docs 站的子目录下（见 .github/workflows/deploy.yml 的 Assemble 步骤），
  // 不设 base 则产物引用 /assets/*，线上全 404
  base: '/vue-router-tab/demo/',
  // 共用仓库根的 public/：logo 一份文件，docs / demo / README 同源
  publicDir: fileURLToPath(new URL('../public', import.meta.url)),
  server: {
    // dev 启动自动打开浏览器
    open: true
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 只给 demo 自身样式注入变量：库经 alias 引源码，其 SFC 样式自带 @use，重复注入会报错
        additionalData: (source: string, filename: string) =>
          normalizePath(filename).startsWith(srcDir)
            ? `@use "${varsFile}" as *;\n${source}`
            : source
      }
    }
  },
  resolve: {
    alias: {
      '@': srcDir,
      // 指向库源码而非 dist：免 build 前置，改库即热更新，样式随 SFC 自动注入
      'vue-router-tab': fileURLToPath(new URL('../src/index.ts', import.meta.url))
    }
  }
})
