# 新小蝶 · 企业级 AI 智能体开发平台前端

**项目概况**：基于 Langflow 开源内核打造的企业级 AI Agent 可视化开发平台前端，让业务人员拖拽即可完成智能体编排、调试与发布。

**项目背景**：企业构建 AI 智能体依赖代码开发，门槛高、迭代慢，缺少统一可视化入口。平台将大模型、向量库、工具调用封装为可拖拽节点，使非算法人员也能在浏览器内完成复杂 Agent 编排并一键上线【待补充：用户/团队规模】。

**技术栈**：
- 框架：React 19 + TypeScript + Vite 7（SWC）
- 编排画布：@xyflow/react v12（React Flow）
- 状态/数据：Zustand 多 Store + TanStack React Query v5
- UI：Radix UI + Tailwind + shadcn + framer-motion
- 请求/路由/国际化：Axios 封装 + react-router v6 + i18next（7 语言懒加载）
- 工程化：Biome、Jest、Playwright（180+ E2E）、Storybook

**我的角色**：前端负责人，负责整个前端系统构建，主导架构设计与核心模块开发。

**负责内容**：
- 搭建基于 React Flow 的可视化编排画布，实现节点拖拽、连线校验、分组子图递归与运行状态实时渲染。
- 设计 Zustand 多 Store 状态架构（flowStore 1300+ 行），统一管理画布、流程与全局变量，联动 150+ React Query 数据 Hook。
- 封装 UseRequestProcessor 统一 useQuery/useMutation，内置指数退避重试与缓存失效，规范 30+ 业务域接口层。
- 构建 i18next 多语言与白标定制层（82 个插槽组件 + Feature Flag），支撑品牌化与中文汉化交付。
- 接入 WebSocket 流式语音输入（AudioWorklet 音频处理 + 播放队列），实现实时语音对话【待补充：延迟/准确率】。

**优势与价值**：
- 架构：视图/状态/数据/定制四层解耦，白标层可低成本复用至多产品线。
- 性能：路由与语言包懒加载、组件 memo，保障大画布流畅交互。
- 业务：AI 开发从写代码降为拖拽配置，降低业务方接入门槛【待补充：上线效率提升】。
- 质量：单测 + 180+ E2E + Storybook 覆盖核心链路。

**简历亮点**：
- 主导企业级 AI Agent 平台前端从 0 到 1 构建，基于 React Flow 打造拖拽式编排画布，支撑复杂工作流与一键发布。
- 设计 Zustand + React Query 分层状态与数据方案，沉淀 150+ 复用 Hook，统一重试与错误策略【待补充：提效百分比】。
- 搭建白标定制层与 7 语言国际化体系，实现品牌化与汉化零侵入交付，复用至多产品线。
- 引入 WebSocket 流式语音交互（AudioWorklet），拓展多模态输入【待补充：延迟指标】。
- 建设 Jest + Playwright + Storybook 测试体系（180+ E2E），保障版本质量。
