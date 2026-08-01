import { readFileSync } from 'node:fs'

const msgPath = process.argv[2]
if (!msgPath) process.exit(0)

const msg = readFileSync(msgPath, 'utf-8').trim()

const commitRE =
  /^(revert: )?(feat|fix|polish|docs|style|refactor|perf|test|workflow|ci|chore|types|build)(\(.+\))?: .{1,50}/

if (!commitRE.test(msg)) {
  console.error('ERROR: invalid commit message format.')
  console.error('Proper format: <type>(<scope>): <subject>')
  console.error("Example: feat(compiler): add 'comments' option")
  process.exit(1)
}
