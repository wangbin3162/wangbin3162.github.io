# 政务服务报告 · 项目经验

## 项目概况
面向政务信用信息共享平台的项目月度服务简报管理系统，覆盖模板配置、批量生成、在线编辑与分享的前端平台。

## 项目背景
政务项目每月需为多个地市输出统一格式的服务简报，此前依赖人工套模板排版，耗时长且易出错（推断）。系统以可配置模板 + 批量生成 + 在线编辑，降低重复劳动、保证一致性，并支撑发布与分享。

## 技术栈
- 框架：Vue 3（Composition API）、Vue Router（Hash）、Vite 8
- UI/样式：bin-ui-design（按需引入）、Tailwind CSS 4、@lucide/vue
- 编辑/渲染：bin-editor-next（AceEditor）、brace、highlight.js、html2canvas、iframe 沙箱
- 工程化：axios 分层封装、useTable Hook、ESLint + oxlint、Vite 分包、SSH 自动部署

## 我的角色
前端负责人，负责整个前端系统构建。

## 负责内容
- 搭建 Vue3 + Vite 分层架构（views/api/hooks/components/layout），封装 axios 拦截器与统一 loading、useTable 分页 Hook；
- 实现模板管理：列表 CRUD、项目编码唯一校验、启停开关 before-change、Ace 全屏编辑 + 实时预览；
- 实现批量生成：月份选择 + 项目多选（全选/半选/搜索去重），按 pro_codes 批量提交，单次可生成【待补充】个项目；
- 实现历史记录：原始/最新报告双版本预览、iframe 在线编辑回写、分享链接、整页截图、HTML 下载与发布流转；
- 沉淀 HtmlPreview 与 html2image 通用能力，解决 iframe 内容提取与全页截图还原。

## 优势与价值
- 技术价值：分层清晰、组件与 Hook 复用，降低维护成本；
- 工程价值：按需引入 + 代码分包 + lint/format + 自动部署，提升交付效率；
- 业务价值：模板化管理与批量生成替代人工排版，月报产出效率提升【待补充】；
- 数据价值：原始/最新双版本留痕，可编辑可追溯，形成"生成—编辑—发布—分享"闭环。

## 简历亮点
- 主导 Vue3 + Vite 前端架构搭建，分层封装请求与分页 Hook，支撑三大模块迭代；
- 设计模板管理全流程（CRUD + 编码校验 + 启停开关 + Ace 编辑实时预览），实现模板可视化维护；
- 重构批量生成交互，加入项目多选（全选/半选/搜索去重）与批量提交，单次生成【待补充】份报告；
- 基于 iframe 沙箱 + MutationObserver 实现报告在线编辑回写，集成整页截图、下载与分享，打通报告交付闭环；
- 落地按需引入、Vite 分包、ESLint/oxlint 规范与 SSH 自动部署，交付效率提升【待补充】。
