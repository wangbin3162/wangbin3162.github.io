# 听悟大模型智能纪要前端项目

**项目概况**：基于阿里云百炼的 AI 音视频转写与智能纪要前端系统，覆盖上传转写、实时录音、纪要详情全链路。

**项目背景**：会议与访谈内容整理长期依赖人工，转录慢、说话人难区分、纪要耗时。项目目标是让用户上传音视频或实时录音后，自动完成说话人分离转写、翻译、章节速览、全文摘要与问答回顾，把数小时整理压缩到分钟级。

**技术栈**：
- 框架：React 18、TypeScript、React Router
- 架构：Lerna + npm workspaces Monorepo、Vite、Father、Rollup
- 状态管理：DVA(Redux+Saga+Immer)、Recoil、Valtio
- UI：Ant Design 5、styled-components、自研设计系统
- 能力：WebSocket、MediaRecorder、AudioContext、unified/remark、katex、markmap
- 工程化：ESLint/Prettier、Husky、Jest、Playwright、GitHub Actions

**我的角色**：项目负责人 / 前端负责人，负责整个前端系统构建。

**负责内容**：
- 设计五层 Monorepo 架构，14 个包分层解耦，支撑【待补充】个业务模块并行开发
- 主导实时转写核心，封装音频采集、重采样、WebSocket 心跳重连与插件化识别，延迟【待补充】
- 构建基于操作日志的文档模型与撤销重做引擎，支持词级编辑与段落非固定转固定
- 开发纪要页章节、摘要、问答、说话人能力及海量词窗口化渲染，首屏【待补充】
- 自研 Markdown、思维导图、上传录音组件库并接入百炼 API，沉淀【待补充】个复用组件

**优势与价值**：
- 技术：严格分层与包边界，新功能按层扩展，长期可维护
- 性能：词级增量渲染与窗口化滚动，长会议实时转写不卡顿
- 业务：转写加 AI 纪要闭环，显著缩短会后整理时间
- 交付：组件库与测试/CI 体系提升复用率与迭代质量

**简历亮点**：
- 主导 14 包 Lerna Monorepo 分层架构落地，模块解耦支撑多业务并行迭代
- 设计操作日志与反向操作文档模型，实现词级编辑与撤销重做，编辑体验流畅
- 封装 AudioContext 与 WebSocket 插件化识别链路，实现边录边转与断线重连
- 自研 unified/remark 扩展 Markdown 与 markmap 思维导图，支持公式、表格与结构化展示
- 搭建 Jest 与 Playwright 加 CI 质量体系，覆盖单元与端到端保障交付稳定
