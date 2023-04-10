<!--
 * @Author: lzy-Jerry
 * @Date: 2023-03-20 22:12:44
 * @LastEditors: xiaohu
 * @LastEditTime: 2023-04-10 15:16:19
 * @Description: 
-->
## 配置jsx/tsx
pnpm i @vitejs/plugin-vue-jsx --save-dev 且需要在vite.config.ts中引入

## stylelint
1.安装
pnpm install --save-dev stylelint stylelint-config-standard

2.创建配置文件
.stylelintrc.json

3.解决stylelint和prettier的冲突
npm install --save-dev stylelint-config-prettier

["stylelint-config-standard", "stylelint-config-prettier"]

4.如果项目中使用的是less、sass之类的预处理器，那么可以安装对应的处理插件
pnpm i --save-dev stylelint-less

"extends": [
    "stylelint-config-standard",
    "stylelint-config-prettier",
    "stylelint-less"
]

5.处理css属性的排序插件
pnpm install stylelint-order --save-dev

需要手动配置rules // 指定声明块内属性的字母顺序
    'order/properties-order': [
        'position',
        ...
    ]

### 踩坑
当校验less文件时提示you should use the "customSyntax" option when linting something other than CSS
意味着我们需要安装特定的插件来解析less详情可见
https://stylelint.io/migration-guide/to-14/



### editorconfig 
 - 用于跨不同的编辑器和IDE编码风格保持统一的配置文件比如Tab 变几个空格啊、换行符是 CR 还是 CRLF 啊、文件编码是不是 UTF-8，更多的是编译器IDE本身的配置与语言无关，实际上还是有些功能和preitter相似的；
 - 需要安装EditorConfig for VS Code 插件生效；


### eslint：代码检测工具，检测代码潜在问题  --- 需要在vscode中安装eslint

同理 airbnb可能也有一套针对js、jsx、ts、tsx、vue的eslint规则也可以使用他们的插件

eslint-define-config：在配置eslintrc的时候会自动提示；
eslint：eslint核心；

- eslint for less --生效


- eslint for vue -- 生效
  eslint-plugin-vue：vue eslint的插件；
      - plugin:vue/base 仅仅针对错误；
      - plugin:vue/vue3-essential base的plus版；
      - plugin:vue/vue3-recommended 推荐使用；
  vue-eslint-parser：vue模板解析器主要解析.vue结尾的<template>内容；

eslint for ts tsx  -- 生效
  @typescript-eslint/parser: ts解析器;
  @typescript-eslint/eslint-plugin: ts eslint插件;

安装vscode eslint插件之后vscode可以读取项目配置eslint文件检测代码；
可以通过在settings中设置在保存编码时修复被检测出不符合规范的代码；
"editor.codeActionsOnSave": { //  启用保存时自动修复
    "source.fixAll.eslint": true
},


eslintrc中的一些字段

plugins
extends：继承其他的一些规则库；
env
global
parser
parserOptions 
  parser
  ecmaVersion
  sourceType
rules: 自定义一些规则生效与否或自定义规则

### prettier 代码格式工具，格式化代码
prettier -- 生效
eslint-config-prettier: 解决与eslint的冲突 （eslint 也有部分代码格式的功能，因此需要解决两者的冲突）
eslint-plugin-prettier：解决与eslint的冲突



### 问题汇总
- 引入path模块时找不到模块“path”或其相应的类型声明ts
  - 原因： 
  - 解决方法：安装 pnpm install @types/node --save-dev 
- 配置别名@之后导入时会报找不到模块ts
  - 原因：在配置别名之后ts确实不知道@表示的是啥，因此需要在tsconfig中配置paths
  - 解决方法：在tsconfig中配置paths: {"@/*": ["src/*"]},这里的src需要配置baseUrl: '.'
