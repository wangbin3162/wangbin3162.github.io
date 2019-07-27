module.exports = {
  title: '个人主页',
  description: '王彬的前端技术积累',
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  dest: './dist',
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    nav: [
      { text: '指南', link: '/web-doc/guide/' },
      {
        text: '开源库',
        items: [
          { text: 'bin-ui', link: 'https://github.com/wangbin3162/bin-ui/' },
          { text: 'bin-admin', link: 'https://github.com/wangbin3162/bin-admin' },
          { text: 'bin-data', link: 'https://github.com/wangbin3162/bin-data/' },
          { text: 'bin-animation', link: 'https://github.com/wangbin3162/bin-animation/' },
          { text: 'bin-keyframe-animation', link: 'https://github.com/wangbin3162/bin-keyframe-animation/' },
          { text: 'vue-admin', link: 'https://wangbin3162.github.io/vue-admin-doc/' },
          { text: 'bin-static-web', link: 'https://github.com/wangbin3162/bin-static-web/' }
        ]
      },
      {
        text: '前端文档',
        items: [
          { text: 'ES5', link: '/web-doc/es5/' },
          { text: 'ES6', link: '/web-doc/es6/' },
          { text: 'Vue', link: '/web-doc/vue/' },
          { text: 'Html & CSS', link: '/web-doc/html/' }
        ]
      },
      {
        text: '工具帮助',
        items: [
          { text: 'Axios', link: '/web-doc/helper/axios' },
          { text: 'Flow', link: '/web-doc/helper/flow' },
          { text: 'Tinymce', link: '/web-doc/helper/tinymce' },
          { text: 'Server', link: '/web-doc/helper/server' }
        ]
      },
      { text: 'GitHub', link: 'https://github.com/wangbin3162/' }
    ],
    sidebar: {
      // 第一组侧边栏
      '/web-doc/guide/': [
        {
          title: '快速指南',
          collapsable: false,
          children: [
            ['/web-doc/guide/', '介绍']
          ]
        },
      ],
      // html css侧边栏
      '/web-doc/html/': [
        {
          title: 'html-css',
          collapsable: false,
          children: [
            ['/web-doc/html/', '介绍'],
            '/web-doc/html/html',
            '/web-doc/html/flex'
          ]
        }
      ],
      // es5侧边栏
      '/web-doc/es5/': [
        {
          title: 'javascript',
          collapsable: false,
          children: [
            ['/web-doc/es5/', '介绍'],
            '/web-doc/es5/base',
            '/web-doc/es5/prototype',
            '/web-doc/es5/advanced',
            '/web-doc/es5/async',
            '/web-doc/es5/environment'
          ]
        }
      ],
      // es6侧边栏
      '/web-doc/es6/': [
        {
          title: 'ECMAScript6',
          collapsable: false,
          children: [
            ['/web-doc/es6/', '介绍'],
            '/web-doc/es6/base',
            '/web-doc/es6/advanced'
          ]
        }
      ],
      // vue侧边栏
      '/web-doc/vue/': [
        {
          title: 'vue 技术栈',
          collapsable: false,
          children: [
            ['/web-doc/vue/', '介绍'],
            '/web-doc/vue/initialize',
            '/web-doc/vue/api',
            '/web-doc/vue/vuex',
            '/web-doc/vue/vuepress',
            '/web-doc/vue/pack'
          ]
        }
      ]
    }
  }
}

