import { defineConfig } from 'vitepress'

const linkBase = 'https://wangbin3162.github.io'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  outDir: '../docs',
  title: '个人主页',
  description: '王彬的个人站点集合',
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: '个人主页',
    // search: { provider: 'local' },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: '资源',
        items: [
          { text: 'bin-admin-pro', link: `${linkBase}/bin-admin-pro/`, target: '_blank' },
          { text: 'bin-datav', link: `${linkBase}/bin-datav`, target: '_blank' },
          { text: 'bin-datav-schema', link: `${linkBase}/bin-datav-schema/`, target: '_blank' }
        ]
      },
      {
        text: '官方库v3',
        items: [
          { text: 'bin-ui-next', link: `${linkBase}/bin-ui-next/`, target: '_blank' },
          { text: 'bin-editor-next', link: `${linkBase}/bin-editor-next/`, target: '_blank' },
          { text: 'bin-charts-next', link: `${linkBase}/bin-charts-next/`, target: '_blank' }
        ]
      },
      {
        text: '官方库v2',
        items: [
          { text: 'bin-ui', link: `${linkBase}/bin-ui/`, target: '_blank' },
          { text: 'bin-ace-editor', link: `${linkBase}/bin-ace-editor/`, target: '_blank' },
          { text: 'bin-charts', link: `${linkBase}/bin-charts/`, target: '_blank' },
          { text: 'bin-tree-org', link: `${linkBase}/bin-tree-org/`, target: '_blank' }
        ]
      },
      {
        text: '动画库',
        items: [
          { text: 'bin-animation', link: `${linkBase}/bin-animation/`, target: '_blank' },
          {
            text: 'bin-keyframe-animation',
            link: `${linkBase}/bin-keyframe-animation/`,
            target: '_blank'
          }
        ]
      },
      {
        text: '技术博客',
        items: [
          {
            text: 'HTML/CSS',
            link: 'https://juejin.cn/post/6844904018230116360',
            target: '_blank'
          },
          {
            text: 'Es5',
            link: 'https://juejin.cn/post/6844904018251087885',
            target: '_blank'
          },
          {
            text: 'Es6',
            link: 'https://juejin.cn/post/6844904018318196743',
            target: '_blank'
          },
          {
            text: 'Vue2',
            link: 'https://juejin.cn/post/6844904018339168270',
            target: '_blank'
          },
          {
            text: '掘金文章',
            link: 'https://juejin.cn/user/4230576475747928/posts',
            target: '_blank'
          }
        ]
      }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/wangbin3162.github.io' }],
    footer: {
      copyright: 'MIT Licensed | Copyright © 2023-present bin-ui-design'
    }
  }
})
