module.exports = {
  title: '前端技术文档',
  description: '前端技术文档',
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', {rel: 'icon', href: '/logo.png'}], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  dest: './dist',
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    nav: [
      {
        text: '开源库',
        items: [
          {text: 'bin-ui', link: 'https://wangbin3162.github.io/docs/bin-ui/'},
          {text: 'bin-animation', link: 'https://wangbin3162.github.io/docs/bin-animation/'},
          {text: 'bin-keyframe-animation', link: 'https://wangbin3162.github.io/docs/bin-keyframe-animation/'},
          {text: 'vue-admin', link: 'https://wangbin3162.github.io/vue-admin-doc/'},
          {text: '第三方库构建', link: '/web-doc/bin/pack'}
        ]
      },
      {
        text: '前端文档',
        items: [
          {text: 'ES5', link: '/web-doc/es5/'},
          {text: 'ES6', link: '/web-doc/es6/'},
          {text: 'Vue', link: '/web-doc/vue/'},
          {text: 'Html & CSS', link: '/web-doc/html/'}
        ]
      },
      {
        text: '工具帮助',
        items: [
          {
            text: '工具',
            items: [
              {text: 'Axios', link: '/web-doc/tools/axios'},
              {text: 'Flow', link: '/web-doc/tools/flow'}
            ]
          },
          {
            text: '帮助',
            items: [
              {text: 'Tinymce', link: '/web-doc/helper/tinymce'},
              {text: 'Server', link: '/web-doc/helper/server'}
            ]
          }
        ]
      },
      {
        text: '外链书签',
        items: [
          {
            text: '核心插件',
            items: [
              {text: 'VueAPI', link: 'https://cn.vuejs.org/v2/api/'},
              {text: 'Devtools', link: 'https://github.com/vuejs/vue-devtools'},
              {text: 'VueCli', link: 'https://cli.vuejs.org/zh/'},
              {text: 'VueLoader', link: 'https://vue-loader.vuejs.org/zh/'},
              {text: 'VueRouter', link: 'https://router.vuejs.org/zh/'}
            ]
          },
          {
            text: 'UI框架',
            items: [
              {text: 'D2Admin', link: 'https://doc.d2admin.fairyever.com/zh/'},
              {text: 'element-ui', link: 'http://element-cn.eleme.io/#/zh-CN/component/installation'},
              {text: 'React', link: 'http://react.yubolun.com/'}
            ]
          },
          {
            text: '第三方库',
            items: [
              {text: 'VUE精选', link: 'http://vue.awesometiny.com/'},
              {text: 'better-scroll', link: 'https://ustbhuangyi.github.io/better-scroll/doc/zh-hans/'},
              {text: 'Three.js', link: 'http://techbrood.com/threejs/docs/'},
              {text: 'echarts', link: 'https://echarts.baidu.com/'},
            ]
          },
          {
            text: '常用工具',
            items: [
              {text: 'jsAPI', link: 'http://www.runoob.com/js/js-tutorial.html'},
              {text: '飞冰', link: 'https://alibaba.github.io/ice/docs/iceworks'},
              {text: '阿里图标库', link: 'http://www.iconfont.cn/'},
              {text: '字体制作', link: 'https://icomoon.io/app/#/select'}
            ]
          }
        ]
      },
      {text: '名片页', link: 'https://wangbin3162.github.io/bin-home/'},
      {text: 'GitHub', link: 'https://github.com/wangbin3162/bin'}
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
            '/web-doc/vue/vuepress'
          ]
        }
      ],
      // vue侧边栏
      '/web-doc/admin/': [
        {
          title: 'wcm 后台管理系统文档',
          collapsable: false,
          children: [
            ['/web-doc/admin/', '介绍']
          ]
        }
      ]
    }
  }
}

