/*
 * @Author: lzy-Jerry
 * @Date: 2023-03-21 21:56:03
 * @LastEditors: lzy-Jerry
 * @LastEditTime: 2023-03-22 22:29:32
 * @Description:
 */
const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  plugins: ['vue', '@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: 'vue-eslint-parser',
  env: {
    // 未使用这个可能会导致require或module报错
    browser: true,
    node: true,
  },
  globals: {},
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: {
      ts: '@typescript-eslint/parser',
      tsx: '@typescript-eslint/parser',
    },
  },
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
    'vue/multi-word-component-names': 'off',
  },
});
