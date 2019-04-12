// 构建目标是否为库
const isBuildLib = process.env.VUE_CLI_BUILD_TARGET === 'lib'

module.exports = {
  presets: [
    ['@vue/app', {
      useBuiltIns: isBuildLib ? false : 'usage'
    }]
  ]
}
