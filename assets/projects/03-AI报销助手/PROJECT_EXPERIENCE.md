# 财务差旅报销系统 · 项目经验

**项目概况**：基于 FastAPI + Vue 3 的前后端一体差旅报销系统，覆盖申请、识别、补助计算到审批全流程。

**项目背景**：差旅报销长期依赖手工整理票据、逐项填报，天数与补助靠人工核算，耗时易错；系统以 AI 票据识别与规则化补助计算为核心，实现报销单自动生成、状态跟踪与留痕，降低成本、提升合规性。

**技术栈**：
- 前端：Vue 3、TypeScript、Vite、Element Plus、Pinia、Vue Router、UnoCSS、Axios
- 后端：FastAPI、Tortoise-ORM、Redis、Casbin、DashScope（qwen-vl / qwen）
- 工程化：ESLint / Prettier、Commitlint、pnpm、Docker Compose

**我的角色**：项目负责人 / 前端负责人，主导全模块设计与开发。

**负责内容**：
- 搭建前端底座：封装 Axios 请求层（Token 注入、401 防抖）与 Pinia 多 Store，实现后端菜单驱动的动态路由，沉淀 useTable（缓存 / 分页）与 ArtTable 体系，支撑 84 视图、73 组件。
- 落地 Casbin 三级权限（菜单 / 按钮 / API）与四级数据权限，配套 v-auth、usePermission 与权限标识规范，管控【待补充】权限点。
- 主导基础资料、补助设置、出差申请、费用报销、审批意见五模块，实现申请即生单、按城市等级与天数自动算补助及五态流转与【待补充】单据审批留痕。
- 对接 DashScope 票据识别（qwen-vl + qwen），完成批量上传、回填与修正留痕，并用 html2canvas + jsPDF 导出报销单 PDF。
- 搭建 FastAPI 异步分层、初始化向导、Redis 双模式与 Docker 编排，内置 fastmcp 工具服务。

**优势与价值**：
- 技术：请求、表格、权限三层复用，配合异步后端，模块易扩展。
- 业务：票据识别与补助计算替代人工核算，减少错漏与重复录入。
- 交付：初始化向导与 Docker 一键部署，降低上线成本。

**简历亮点**：
- 主导 Vue 3 + TS 前端工程化，封装请求 / 路由 / useTable 复用体系，支撑 84 视图。
- 设计 Casbin 三级权限与四级数据权限前端方案，实现菜单到按钮粒度管控。
- 推动 AI 票据识别落地，以 qwen-vl + qwen 两步结构化，将录入转为自动回填与校正。
- 实现申请到报销单自动化与五态状态机，补助按城市等级与天数自动计算。
