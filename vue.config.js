module.exports = {
  publicPath: '', // 相对路径

  // webpack 链式配置
  chainWebpack: config => {
    // 移除 prefetch 插件
    config.plugins.delete('prefetch')
  },

  css: {
    loaderOptions: {
      sass: {
        // scss公共变量
        data: `@import "@/assets/scss/variables.scss";`
      }
    }
  }
}
