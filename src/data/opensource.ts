import type { ImageMetadata } from 'astro'

import binAdminPro from '../assets/opensource/bin-admin-pro.png'
import binAnimation from '../assets/opensource/bin-animation.png'
import binChartsNext from '../assets/opensource/bin-charts-next.png'
import binDatav from '../assets/opensource/bin-datav.png'
import binDatavSchema from '../assets/opensource/bin-datav-schema.png'
import binEditorNext from '../assets/opensource/bin-editor-next.png'
import binExcelPro from '../assets/opensource/bin-excel-pro.png'
import binFormMaker from '../assets/opensource/bin-form-maker.png'
import binGridLayout from '../assets/opensource/bin-grid-layout.png'
import binKeyframeAnimation from '../assets/opensource/bin-keyframe-animation.png'
import binTreeOrg from '../assets/opensource/bin-tree-org.png'
import binUiDesign from '../assets/opensource/bin-ui-design.png'

export interface OpenSourceItem {
  name: string
  icon: string
  stars: string
  description: string
  techs: string[]
  github: string
  demo: string
  image: ImageMetadata
  year: number
  category: '组件库' | '可视化' | '工具类'
}

export const openSourceTotalStars = '682+'

export const openSourceItems: OpenSourceItem[] = [
  {
    name: 'bin-ui-design',
    icon: '🧩',
    stars: '135',
    description: '一个基于 Vue3 和 TypeScript 的组件库',
    techs: ['Vue3', 'TypeScript'],
    github: 'https://github.com/wangbin3162/bin-ui-design',
    demo: 'https://wangbin3162.github.io/bin-ui-design',
    image: binUiDesign,
    year: 2024,
    category: '组件库'
  },
  {
    name: 'bin-admin-pro',
    icon: '⚙️',
    stars: '71',
    description: '基于 bin-ui 的后端管理系统',
    techs: ['Vue3 全家桶'],
    github: 'https://github.com/wangbin3162/bin-admin-pro',
    demo: 'https://wangbin3162.github.io/bin-admin-pro',
    image: binAdminPro,
    year: 2024,
    category: '组件库'
  },
  {
    name: 'bin-editor-next',
    icon: '📝',
    stars: '194',
    description: '基于 brace 的 Vue3 编辑器组件库',
    techs: ['Vue3', 'brace'],
    github: 'https://github.com/wangbin3162/bin-editor-next',
    demo: 'https://wangbin3162.github.io/bin-editor-next',
    image: binEditorNext,
    year: 2022,
    category: '组件库'
  },
  {
    name: 'bin-datav',
    icon: '📊',
    stars: '94',
    description: '一个基于 Vue3 和 TypeScript 的数据可视化组件库',
    techs: ['Vue3', 'TypeScript'],
    github: 'https://github.com/wangbin3162/bin-datav',
    demo: 'https://wangbin3162.github.io/bin-datav',
    image: binDatav,
    year: 2024,
    category: '可视化'
  },
  {
    name: 'bin-datav-schema',
    icon: '🖥️',
    stars: '—',
    description: 'vite + vue3 + bin-ui-design + bin-datav 的数据可视化大屏框架',
    techs: ['Vue3', 'TypeScript'],
    github: 'https://github.com/wangbin3162/bin-datav-schema',
    demo: 'https://wangbin3162.github.io/bin-datav-schema',
    image: binDatavSchema,
    year: 2024,
    category: '可视化'
  },
  {
    name: 'bin-grid-layout',
    icon: '⬜',
    stars: '18',
    description: '一个基于 Vue3 和 TypeScript 的网格布局组件库',
    techs: ['Vue3', 'TypeScript'],
    github: 'https://github.com/wangbin3162/bin-grid-layout',
    demo: 'https://wangbin3162.github.io/bin-grid-layout',
    image: binGridLayout,
    year: 2023,
    category: '组件库'
  },
  {
    name: 'bin-charts-next',
    icon: '📈',
    stars: '24',
    description: '一个基于 Vue3 和 ECharts 的图表组件库',
    techs: ['Vue3', 'ECharts'],
    github: 'https://github.com/wangbin3162/bin-charts-next',
    demo: 'https://wangbin3162.github.io/bin-charts-next',
    image: binChartsNext,
    year: 2023,
    category: '可视化'
  },
  {
    name: 'bin-form-maker',
    icon: '📋',
    stars: '7',
    description: '一个基于 Vue3 和 TypeScript 的表单生成器组件库',
    techs: ['Vue3', 'TypeScript'],
    github: 'https://github.com/wangbin3162/bin-form-maker',
    demo: 'https://wangbin3162.github.io/bin-form-maker',
    image: binFormMaker,
    year: 2023,
    category: '组件库'
  },
  {
    name: 'bin-excel-pro',
    icon: '📑',
    stars: '6',
    description: '一个基于 Vue3 和 Univer 的 Excel 表格组件库',
    techs: ['Vue3', 'Univer'],
    github: 'https://github.com/wangbin3162/bin-excel-pro',
    demo: 'https://wangbin3162.github.io/bin-excel-pro',
    image: binExcelPro,
    year: 2024,
    category: '组件库'
  },
  {
    name: 'bin-tree-org',
    icon: '🌳',
    stars: '103',
    description: '一个基于 Vue2 的组织树组件',
    techs: ['Vue2'],
    github: 'https://github.com/wangbin3162/bin-tree-org',
    demo: 'https://wangbin3162.github.io/bin-tree-org',
    image: binTreeOrg,
    year: 2021,
    category: '组件库'
  },
  {
    name: 'bin-animation',
    icon: '✨',
    stars: '22',
    description: '基于 Vue，结合 transition 钩子函数配合的 CSS3 动画库',
    techs: ['Vue'],
    github: 'https://github.com/wangbin3162/bin-animation',
    demo: 'https://wangbin3162.github.io/bin-animation',
    image: binAnimation,
    year: 2022,
    category: '工具类'
  },
  {
    name: 'bin-keyframe-animation',
    icon: '🎬',
    stars: '8',
    description: 'JavaScript 关键帧动画库',
    techs: ['JavaScript'],
    github: 'https://github.com/wangbin3162/bin-keyframe-animation',
    demo: 'https://wangbin3162.github.io/bin-keyframe-animation',
    image: binKeyframeAnimation,
    year: 2023,
    category: '工具类'
  }
]
