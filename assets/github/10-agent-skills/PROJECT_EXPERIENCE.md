# agents-skills 项目经验

**项目概况**
面向 Claude Code 等 AI 编程智能体的可复用技能库，以纯 `SKILL.md` 定义、`npx skills add` 标准化分发。

**项目背景**
AI 编程能力强但缺少稳定工程规范，常见未理解即改码、超范围重构、未验证即宣称完成；站点克隆、设计系统逆向等重复场景也缺自动化方案。目标是把经验固化为可直接调用的技能，降低团队使用门槛与返工率。

**技术栈**
- 技能规范：`SKILL.md`（YAML frontmatter）、Markdown
- 脚本：原生 JavaScript、浏览器 DevTools / Playwright / Puppeteer MCP
- 产出：HTML / CSS / JS、DESIGN.md 令牌体系
- 分发：`npx skills add`、Git

**我的角色**
项目负责人 / 前端负责人，主导全部 4 个技能的架构设计与实现。

**负责内容**
- 设计统一技能架构，规范触发描述、交互式输入与多阶段流水线，落地 4 个技能。
- 实现 website-cloner 五阶段克隆流水线（侦察→下载→提取→组装→QA），资源全本地化、离线可用。
- 编写 design-extract 677 行零依赖采集脚本，用原生 API 提取 computed CSS、`:root` 变量、断点与 hover 态。
- 沉淀 plan-and-apply 执行框架，强制"读规则→切片→验证→收口"闭环；覆盖【待补充】个技能/场景。

**优势与价值**
- 技术：零外部依赖、原生 API 采集、跨域样式表容错、多厂商 MCP 自适应。
- 工程：以模板与流水线约束 AI 行为，把经验沉淀为可复用资产。
- 业务：缩短站点复刻、设计逆向、需求转提示词的产出周期（【待补充】）。

**简历亮点**
- 主导可复用 AI 技能库架构，以 SKILL.md 规范封装 4 个技能，实现一键分发。
- 构建 website-cloner 五阶段流水线，本地化全资源并截图 QA，产出可离线、可迁移静态站点。
- 自研 677 行零依赖采集脚本，提取 computed CSS 与令牌，支撑 DESIGN.md 12 章自动生成。
- 沉淀 plan-and-apply 与 evals 用例，约束 AI 先规划后实施、改后验证，降低返工风险。
