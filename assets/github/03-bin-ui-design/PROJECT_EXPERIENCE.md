# bin-ui-design 组件库 · 项目经验

## 项目概况
基于 Vue3 + TypeScript 构建的企业级 UI 组件库，覆盖 60+ 通用组件，以 npm 包形式发布并支持按需引入。

## 项目背景
内部业务反复重写基础 UI，体验与样式不统一、维护成本高。团队需要一套可复用、可定制主题、支持暗色模式与中英文切换的组件体系，以降低重复开发、提升多项目交付效率。

## 技术栈
- 框架：Vue 3.5、TypeScript
- 构建：Vite（ES + CJS 双产物，preserveModules 保留模块）、vite-plugin-dts、Gulp + PostCSS 样式管线
- 质量：Vitest + Vue Test Utils、oxlint / ESLint / Prettier、vue-tsc 类型校验
- 能力库：@popperjs/core、async-validator、dayjs、sortablejs、vue-i18n

## 我的角色
前端负责人，负责整个前端系统构建。

## 负责内容
- 设计组件库整体架构，按 `component/index.ts + src + styles` 统一目录规范拆分 60+ 组件与 utils / hooks / directives 基础层
- 实现 `create()` 注册机制，支持自定义组件前缀、全局插件与指令安装
- 基于 ConfigProvider 的 provide/inject 实现主题、暗色模式与国际化注入
- 封装 Popper、Scrollbar、Table、Split 等复杂组件，落地树形表格、无限滚动与分割面板
- 搭建 Vite 库构建 + Gulp 样式 + dts 类型产出的工程化流水线【待补充：构建耗时】

## 优势与价值
- 架构价值：分层清晰，组件按需引入、tree-shaking 友好，新增组件成本低
- 工程价值：TS 全量类型、ES/CJS 双模块产物、lint + type-check + test 质量闭环
- 业务价值：统一多项目 UI 规范，显著减少重复开发【待补充：提效比例】
- 生态价值：已发布 npm 公共包并维护版本迭代【待补充：下载量】

## 简历亮点
- 主导设计 Vue3 + TS 组件库架构，拆分 60+ 组件与基础层，支撑多条业务线复用
- 实现 `create()` 与 ConfigProvider 机制，支持组件前缀定制、暗色主题与中英文切换
- 基于 Vite 构建 ES/CJS 双产物并配合 vite-plugin-dts 输出类型，实现按需引入与 tree-shaking
- 重构表格、滚动条、分割面板等复杂组件，落地树形表格与无限滚动能力
- 搭建 Gulp + PostCSS 样式管线，通过 CSS 变量实现运行时换肤与主题定制
