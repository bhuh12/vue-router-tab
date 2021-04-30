const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/recommended', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaFeatures: {
      // 支持装饰器
      legacyDecorators: true
    }
  },
  // ESlint 规则：https://eslint.org/docs/rules/
  // Vue 规则：https://eslint.vuejs.org/rules/
  rules: {
    'no-console': 'off',
    'no-debugger': isProd ? 'warn' : 'off',
    'no-unused-vars': 'warn',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'no-prototype-builtins': 'off',
    'vue/no-v-html': 'off',
    'vue/no-unused-vars': 'warn',
    'vue/require-default-prop': 'off',
    'vue/no-mutating-props': 'off',
    // Vue 单文件块空行
    'vue/padding-line-between-blocks': 2,
    // 多行属性添加空行
    'vue/new-line-between-multi-line-property': [
      'error',
      {
        minLineOfMultilineProperty: 2
      }
    ]
  }
}
