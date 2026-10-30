# AI-News 项目经验

## 项目概况

面向 AI 从业者的资讯聚合平台，贯通多源采集、LLM 摘要与 Web 可视化展示。

## 项目背景

AI 资讯分散在 Twitter、RSS、GitHub，人工筛选耗时且易漏。目标是构建采集—聚合—生成—展示的自动化闭环，稳定产出快讯、日报与 Changelog，降低信息获取成本。

## 技术栈

- 后端：Python、Flask、Gunicorn、systemd、Nginx
- 采集：feedparser、Twitter/GitHub API、Requests、ThreadPoolExecutor
- AI：OpenAI 兼容接口（deepseek-chat）、Prompt 工程
- 前端：Jinja2、原生 JS、CSS、ECharts、IntersectionObserver
- 工程：pytest、python-dotenv、多环境部署脚本

## 我的角色

项目负责人，主导前后端全模块设计与开发。

## 负责内容

- 设计采集、聚合、分析、生成、渲染五层架构，统一 Twitter/RSS/GitHub 事件模型与数据流。
- 开发三类采集器：RSS 并行抓取+AI 评分、Twitter 分组分页、GitHub Release 翻页+AI 翻译总结。
- 构建 AI 摘要引擎，实现分类、品牌匹配、48 小时去重与多层兜底解析，产出快讯与日报 JSON。
- 建设 Flask 四页面与卡片分页 API，交付响应式首页、快讯详情与 Changelog 图表页。
- 落地 pytest 回归、飞书推送、Selenium 截图与 Gunicorn+Nginx 部署，覆盖【待补充】个数据源、【待补充】期快讯。

## 优势与价值

- 技术价值：五层解耦架构与统一事件模型，采集器可插拔、AI 调用可降级，系统易扩展维护。
- 技术价值：多级去重与兜底解析，AI 空返回仍可产出。
- 业务价值：定时自动产出快讯、日报、Changelog 并推送飞书，替代人工筛选。
- 业务价值：响应式 Web 与图表可视化，多端阅读一致。

## 简历亮点

- 主导设计五层解耦架构，统一多源事件模型，标准化采集到展示链路，支撑【待补充】个信源稳定运行。
- 实现 RSS 的 AI 评分与 48 小时双重去重，过滤重复与低价值内容，摘要准确率提升【待补充】。
- 构建 AI 摘要多层兜底解析，空响应自动降级，可用性达【待补充】。
- 开发 Flask 多页面与卡片无限滚动 API，结合 ECharts 可视化，首屏体验优化【待补充】。
- 打通采集、生成、推送、部署全流程，实现定时自动化运营，人力成本下降【待补充】。
