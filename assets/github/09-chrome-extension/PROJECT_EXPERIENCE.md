# AetherDock · AI 侧边栏助手

**项目概况**
基于 MV3 的 Chrome 扩展「AetherDock」，将 AI 问答、常用网页入口与书签检索整合进浏览器侧边栏的个人工作台。

**项目背景**
查资料时常需复制页面文本再切到网页调用 AI，链路冗长；常用站点与浏览器收藏夹分散、检索低效。目标是在当前浏览上下文内一键引用追问，并统一收纳常用入口。

**技术栈**
- 框架：React 19、TypeScript、Vite 6
- 架构：Turborepo + pnpm monorepo，MV3 Service Worker
- API：Chrome Extension（sidePanel / contextMenus / commands / bookmarks / topSites / storage / scripting）
- 工程化：ESLint、Prettier、自定义 HMR、i18n、WebdriverIO E2E

**我的角色**
负责整个前端系统构建。

**负责内容**
- 设计 monorepo 分层与侧边栏多 Tab 架构（网页面板 / AI 问答 / 配置），以统一存储驱动状态同步。
- 实现划词追问：右键菜单与快捷键捕获选中文本，Service Worker 代理 AI 接口规避跨域并支持自定义模型。
- 开发多轮会话：历史记录、快捷指令（解释/总结/翻译）、引用上下文，本地持久化【待补充】条会话。
- 实现全页书签搜索浮层：内容脚本 IIFE 注入 + 键盘导航，后台基于收藏夹与 topSites 加权检索。
- 封装通用存储层与 useStorage Hook，跨页面实时同步，支撑可拖拽排序的快捷网页面板。

**优势与价值**
- 技术价值：抽象通用存储与页面配置体系，新增入口或存储项仅需少量代码。
- 技术价值：内容脚本、后台代理、侧边栏三端分工清晰，规避 CORS 与 MV3 生命周期限制。
- 业务价值：划词即问、书签即搜，缩短资料获取与信息检索路径，提升【待补充】效率。

**简历亮点**
- 主导 AetherDock 扩展前端架构，基于 React 19 + Vite + Turborepo 构建可扩展多入口 monorepo。
- 设计 MV3 三端协同方案，Service Worker 代理 AI 接口解决跨域，实现划词引用与多轮对话。
- 自研 storage 抽象与 useStorage Hook，实现跨上下文状态同步，复用至多类业务面板。
- 实现全页书签搜索浮层与快捷键唤起，结合加权排序提升检索命中率。
