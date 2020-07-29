// 引入目录下语言配置
const context = require.context('./', false, /^((?!index).)*\.js$/)

// 语言配置
export default context.keys().reduce((map, path) => {
  let [, key] = /\.\/(.*).js/g.exec(path)
  map[key] = context(path).default
  return map
}, {})
