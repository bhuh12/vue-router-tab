import { defineConfig } from 'vite-plus'
import vue from '@vitejs/plugin-vue'
import Vue from 'unplugin-vue/rolldown'

export default defineConfig({
  plugins: [vue()],
  pack: {
    entry: ['src/index.ts'],
    format: ['esm', 'umd'],
    globalName: 'VueRouterTab',
    platform: 'neutral',
    minify: true,
    deps: {
      neverBundle: ['vue', 'vue-router']
    },
    plugins: [Vue({ isProduction: true })],
    dts: { vue: true },
    css: { fileName: 'index.css' },
    outputOptions: { exports: 'named', globals: { vue: 'Vue', 'vue-router': 'VueRouter' } }
  },
  test: {
    environment: 'happy-dom',
    include: ['src/**/*.test.ts'],
    exclude: ['spike/**', 'node_modules/**']
  },
  lint: {
    ignorePatterns: ['dist/**', 'docs/.vitepress/dist/**', 'demo/dist/**', 'node_modules/**']
  },
  fmt: {
    ignorePatterns: [
      'dist/**',
      'docs/.vitepress/dist/**',
      'demo/dist/**',
      'pnpm-lock.yaml',
      'node_modules/**'
    ],
    singleQuote: true,
    semi: false,
    trailingComma: 'none'
  },
  staged: {
    '*.{js,ts,vue}': 'vp check --fix'
  }
})
