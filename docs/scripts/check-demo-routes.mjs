// build 前断言 demoRoutes.ts 中每个 frame 在 demo/src/frames 下真实存在
// frame 文件改名会导致 demo 路由静默变化，此脚本让其变成 build 失败
import { existsSync, readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

const routesFile = fileURLToPath(new URL('../.vitepress/demoRoutes.ts', import.meta.url))
const framesDir = fileURLToPath(new URL('../../demo/src/frames/', import.meta.url))

const source = readFileSync(routesFile, 'utf8')
const frames = [...source.matchAll(/^\s{2}(\w+):/gm)].map((m) => m[1])

if (!frames.length) {
  // 正则按「两空格缩进的顶层 key」解析。若 demoRoutes.ts 换了缩进（如 prettier 改成 4 空格），
  // 这里会解析为空 —— 是安全失败，但需说清真实原因，否则会误以为映射表被清空了
  console.error(
    '[check-demo-routes] 未从 demoRoutes.ts 解析出任何 frame。\n' +
      '  若映射表非空，检查缩进是否仍为 2 空格（本脚本用 /^ {2}(\\w+):/gm 解析）'
  )
  process.exit(1)
}

const missing = frames.filter((name) => !existsSync(`${framesDir}${name}.vue`))

if (missing.length) {
  console.error(
    `[check-demo-routes] 以下 frame 在 demo/src/frames 下不存在，文档 Demo 链接会失效：\n  ${missing.join('\n  ')}`
  )
  process.exit(1)
}

console.log(`[check-demo-routes] ${frames.length} 个 frame 全部存在`)
