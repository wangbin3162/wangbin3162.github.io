export const heroContent = {
  greeting: '你好，我是',
  name: '王 彬',
  role: '前端开发者 · 开源爱好者 · 可视化玩家'
}

export const heroStats = [
  { value: '12', label: '年写代码' },
  { value: '12', label: '个开源库' },
  { value: '682+', label: 'GitHub Stars' },
  { value: '50+', label: '个项目经历' }
]

export const heroTags = ['Vue3 生态', '数据可视化', 'AI 应用', '组件库', '开源', '全端开发']

export const heroBubbles = [
  { text: 'Vue3', className: 'bubble-1' },
  { text: 'ECharts', className: 'bubble-2' },
  { text: 'AI', className: 'bubble-3' },
  { text: 'TypeScript', className: 'bubble-4' },
  { text: '682★', className: 'bubble-5' },
  { text: 'Three.js', className: 'bubble-6' }
]

export const aboutSectionLinks = [
  { id: 'about', label: '关于我' },
  { id: 'experience', label: '成长轨迹' },
  { id: 'projects', label: '项目' },
  { id: 'skills', label: '技术栈' },
  { id: 'strengths', label: '擅长的事' }
]

export const aboutIntro =
  '写了 12 年前端，从 Unity3D 游戏开发转到 Web，一路折腾过<strong>组件库、数据可视化大屏、低代码平台、AI 智能体</strong>，什么有意思就去琢磨什么。平时喜欢把工作中反复造的轮子抽成开源库，目前维护着 <strong>12 个 Vue 生态的开源项目</strong>。对 Vue3 生态和工程化比较熟，也爱玩 ECharts、Three.js 这些可视化的东西。最近在探索 AI + 前端的结合，用 LangChain 和大模型做了一些好玩的应用。'

export const aboutStats = [
  { value: '12+', label: '年写代码' },
  { value: '50+', label: '个项目经历' },
  { value: '12', label: '个开源项目' },
  { value: '682+', label: 'GitHub Stars' },
  { value: '80+', label: '封装过的组件' },
  { value: '3', label: '个平台（Web/小程序/桌面）' }
]

export const experienceEntries = [
  {
    period: '2018 — 至今',
    company: '深耕前端 · 全栈探索',
    role: 'Vue 生态 → 可视化 → AI 应用',
    items: [
      '从零搭建了一套 Vue3 组件库（bin-ui-design），封装 50+ 组件，自己和团队的项目都在用',
      '折腾工程化，把项目从 Webpack 迁到 Vite，构建速度快了好几倍',
      '做了不少数据可视化大屏，智慧城市、智慧工厂那种，Three.js 3D 场景也玩了不少',
      '最近在做 AI 相关的东西 —— 智能体平台、RAG 知识库、OCR 识别，挺有意思',
      '搭了一套 CI/CD 流程，从提交代码到部署上线基本自动化了'
    ]
  },
  {
    period: '2015 — 2017',
    company: '入行 · Unity3D 游戏开发',
    role: 'C# + 3D 渲染 → 跨平台游戏',
    items: [
      '最早用 Unity3D + C# 做游戏，搞过渲染管线优化和多平台适配',
      '这段经历让我对 3D 可视化和性能优化有了底子，后来转前端也用上了'
    ]
  }
]

export const projectGroups = [
  {
    label: '🏗️ 基础工具',
    items: [
      {
        icon: '🧩',
        period: '2021 — 至今',
        name: 'bin-ui-design — Vue3 组件库',
        description:
          '自己从零搭的组件库，Monorepo 架构，Vitest + Cypress 测试覆盖 85%，自己项目和团队项目都在用。',
        techs: ['Vue3', 'TypeScript', 'Vite', 'Tailwind'],
        result: '✦ 50+ 个项目在用 · 开源在 GitHub'
      },
      {
        icon: '🖥️',
        period: '2022 — 至今',
        name: '数据可视化大屏平台',
        description:
          '拖拽式布局编辑器，Three.js 做 3D 场景，ECharts 跑上百个图表也不卡，支持多屏自适应。',
        techs: ['Vue3', 'ECharts', 'Three.js', 'WebGL'],
        result: '✦ 做了 20+ 块大屏 · 智慧城市 / 智慧工厂 / 信用体系'
      },
      {
        icon: '🤖',
        period: '2025 — 至今',
        name: 'AI 智能体平台',
        description:
          '接入大模型做的 AI 平台，支持 RAG 检索增强、多轮对话、工具调用、流式响应，可以用插件扩展。',
        techs: ['Vue3', 'LangChain', 'OpenAI', 'WebSocket'],
        result: '✦ 团队日常都在用 · 效率提升明显'
      }
    ]
  },
  {
    label: '💼 业务应用',
    items: [
      {
        icon: '📊',
        period: '2024 — 至今',
        name: 'AI 智能问数平台',
        description:
          '用自然语言查数据、生成报告，CopilotKit 做流式交互，ECharts 做图表可视化，还能一键导出 PDF。',
        techs: ['React', 'Next.js', 'CopilotKit', 'ECharts'],
        result: '✦ 原来做月报要 2 天，现在 2 小时搞定'
      },
      {
        icon: '🗄️',
        period: '2020 — 2025',
        name: '数据治理平台',
        description: '做数据血缘分析和元数据管理的平台，D3.js 画复杂关系图，支持拖拽式数据建模。',
        techs: ['Vue3', 'D3.js', 'ECharts', 'AntV'],
        result: '✦ 管理了大部分数据资产 · 做了好几年的长期项目'
      },
      {
        icon: '🔧',
        period: '2021 — 2023',
        name: '低代码平台',
        description:
          '拖拽搭建应用的平台，JSON Schema 转 Vue 代码，内置 50+ 业务组件，带版本控制和发布管理。',
        techs: ['Vue3', 'TypeScript', 'vue-flow'],
        result: '✦ 用它搭了 30+ 个应用 · 省了不少开发时间'
      }
    ]
  },
  {
    label: '🚀 创新探索',
    items: [
      {
        icon: '📚',
        period: '2025 — 至今',
        name: '智能知识库系统',
        description:
          '把分散的知识整合到一起，支持智能检索、知识图谱可视化、标签分类，方便团队查找和复用。',
        techs: ['Vue3', 'TypeScript', 'Elasticsearch', 'Mermaid'],
        result: '✦ 找资料比以前快多了 · 知识终于不散落各处了'
      },
      {
        icon: '🔍',
        period: '2023 — 至今',
        name: 'OCR 智能识别平台',
        description:
          '证件、票据、文档都能识别的 OCR 平台。支持图片预处理、批量上传、可视化校正，挺实用的工具。',
        techs: ['Vue3', 'bin-ui-design', '表单设计器'],
        result: '✦ 准确率 95% · 省掉了大量手动录入的活'
      },
      {
        icon: '🔄',
        period: '2023 — 至今',
        name: '数据交换平台',
        description:
          '跨部门数据共享交换，AntV G6 画关系图，WebSocket 做实时监控和告警，还有多维度的统计报表。',
        techs: ['Vue3', 'AntV G6', 'ECharts', 'WebSocket'],
        result: '✦ 连接了 20+ 个部门 · 每天跑千万级数据'
      }
    ]
  }
]

export const skillGroups = [
  {
    title: '💻 核心语言',
    items: [
      { name: 'Vue3 / Vue2', level: '精通', tone: 'expert' },
      { name: 'TypeScript', level: '精通', tone: 'expert' },
      { name: 'JavaScript', level: '精通', tone: 'expert' },
      { name: 'React', level: '熟练', tone: 'proficient' },
      { name: 'Next.js', level: '熟练', tone: 'proficient' }
    ]
  },
  {
    title: '📊 可视化',
    items: [
      { name: 'ECharts', level: '精通', tone: 'expert' },
      { name: 'Three.js', level: '精通', tone: 'expert' },
      { name: 'D3.js', level: '精通', tone: 'expert' },
      { name: 'WebGL', level: '熟练', tone: 'proficient' },
      { name: 'Canvas', level: '熟练', tone: 'proficient' },
      { name: 'AntV G6', level: '熟练', tone: 'proficient' }
    ]
  },
  {
    title: '⚙️ 工程化',
    items: [
      { name: 'Vite', level: '精通', tone: 'expert' },
      { name: 'Webpack', level: '精通', tone: 'expert' },
      { name: 'Rollup', level: '熟练', tone: 'proficient' },
      { name: 'Monorepo', level: '熟练', tone: 'proficient' },
      { name: 'CI/CD', level: '熟练', tone: 'proficient' }
    ]
  },
  {
    title: '📱 移动端 · 跨端',
    items: [
      { name: '微信小程序', level: '精通', tone: 'expert' },
      { name: 'uni-app', level: '熟练', tone: 'proficient' },
      { name: 'React Native', level: '掌握', tone: 'familiar' },
      { name: 'Electron', level: '掌握', tone: 'familiar' }
    ]
  },
  {
    title: '🤖 AI 工具链',
    items: [
      { name: 'Claude Code', level: '精通', tone: 'expert' },
      { name: 'Copilot', level: '精通', tone: 'expert' },
      { name: 'Cursor', level: '精通', tone: 'expert' },
      { name: 'LangChain', level: '熟练', tone: 'proficient' },
      { name: 'CopilotKit', level: '熟练', tone: 'proficient' }
    ]
  },
  {
    title: '🔗 其他',
    items: [
      { name: 'Node.js', level: '熟练', tone: 'proficient' },
      { name: 'Unity3D', level: '熟练', tone: 'proficient' },
      { name: 'Elasticsearch', level: '掌握', tone: 'familiar' },
      { name: 'C#', level: '掌握', tone: 'familiar' }
    ]
  }
]

export const strengths = [
  {
    icon: '⚡',
    title: '从零开始造东西',
    description: '喜欢从一个想法开始，把整套系统搭起来。从设计到开发再到上线运维，享受把事情做完整的过程。'
  },
  {
    icon: '🎯',
    title: '组件库狂热爱好者',
    description:
      '造了 50 多个组件，从编辑器、图表到拖拽大屏都写过。最开心的事就是封装一个好用的组件，然后看到别人真的在用。'
  },
  {
    icon: '📊',
    title: '数据可视化玩家',
    description:
      '最早写 Unity3D 做 3D 可视化，后来转到前端继续折腾。ECharts、Three.js、WebGL 都玩过，做过不少数据大屏和 3D 智慧园区之类的酷炫项目。'
  },
  {
    icon: '🤖',
    title: 'AI 编程重度用户',
    description:
      'Cursor、Copilot、Claude Code 都是我的日常工具。也自己折腾过 AI 智能体和 RAG 知识库，觉得 AI 辅助编程是真的爽。'
  },
  {
    icon: '🌐',
    title: '什么端都能写',
    description: 'Web、小程序、uniapp、桌面端都做过。喜欢尝试不同平台，享受在不同环境下解决问题的乐趣。'
  },
  {
    icon: '🔓',
    title: '开源爱好者',
    description: 'GitHub 上维护了 12 个开源库，收获 682+ Stars。写开源项目是因为自己需要，能帮到别人就更开心了。'
  }
]

export const footerContacts = [
  {
    icon: '✉️',
    label: '邮箱',
    value: '316281400@qq.com',
    href: 'mailto:316281400@qq.com'
  },
  {
    icon: '💻',
    label: 'GitHub',
    value: 'github.com/wangbin3162',
    href: 'https://github.com/wangbin3162'
  },
  {
    icon: '🌐',
    label: '站点',
    value: 'news.wangbinai.top',
    href: 'https://news.wangbinai.top'
  }
]

export const filingInfo = {
  icpLabel: '苏ICP备2026033414号',
  icpHref: 'https://beian.miit.gov.cn/',
  gonganLabel: '苏公网安备32030302308165号',
  gonganHref: 'https://beian.mps.gov.cn/#/query/webSearch?code=32030302308165'
}
