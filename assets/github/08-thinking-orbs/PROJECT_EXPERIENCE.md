# thinking-orbs-universal 项目经验

## 项目概况
面向 AI/Agent 界面的点阵思考球加载动效组件库，框架无关，原生支持 Vue 3、React、Web Component 与原生 JS。

## 项目背景
原 thinking-orbs 仅支持 React，多技术栈产品难以复用；WebGL/滤镜方案又存在跨浏览器渲染不一致与低端设备卡顿。目标是解耦渲染引擎与框架，输出像素一致、可主题化、可访问的通用动效库。

## 技术栈
- 语言构建：TypeScript、Vite 多入口 Lib、vite-plugin-dts
- 渲染：Canvas 2D、3D 正交投影、斐波那契球面点阵、z 排序景深着色
- 适配：Vue 3 / React / Web Components / 原生 API
- 工程：子路径 exports、可选 peerDependencies、GitHub Actions 发布

## 我的角色
负责整个前端系统构建。

## 负责内容
- 设计框架无关分层架构，将原 React Canvas 引擎解耦为纯 TS 引擎、OrbController 控制器与多框架适配层。
- 实现控制器生命周期：DPR 适配、rAF 循环、IntersectionObserver 离屏与切页自动暂停、销毁清理。
- 开发六状态 × 双尺寸手调预设与点阵绘制算法，保证跨浏览器像素一致。
- 搭建主题与无障碍体系：data-theme/class 与系统主题多层解析、减少动效静态帧、CSS 变量实时驱动。
- 配置多入口打包与子路径导出，支持按需引入与 Tree-shaking，已发布 v1.1.0，累计下载【待补充】次。

## 优势与价值
- 引擎与框架彻底解耦，纯 2D Canvas 无滤镜，三大浏览器像素一致、低端设备低成本。
- CSS 变量 + 多层主题解析 + 无障碍降级，主题作者无需改源码即可定制。
- 一套库覆盖多技术栈，降低多产品线复用与维护成本。
- 细腻的 Agent 状态动效提升 AI 界面等待体验与反馈质感。

## 简历亮点
- 主导将 React-only 动效库重构为框架无关引擎，通过控制层抽象让 Vue/React/Web Component/原生 JS 复用同一渲染管线。
- 设计六状态×双尺寸预设与 3D 点阵算法，以纯 2D Canvas 实现跨浏览器一致的 AI 加载动效。
- 构建多入口 Vite 打包与子路径导出，配合可选依赖实现按需加载与 Tree-shaking。
- 落地主题自适应与可访问性体系，并搭建 GitHub Actions 自动发布链路。
