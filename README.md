# 彬的编程实验室

基于 Astro 搭建的个人技术站点，包含首页、博客、关于我、开源作品等页面。

## 项目定位

- 站点名称：`彬的编程实验室`
- 英文名称：`Bin's Coding Lab`
- 技术栈：`Astro + Markdown/MDX + Astro Content Collections`
- 产物类型：静态站点
- 当前构建输出目录：`dist/`

## 目录结构

```text
src/
  assets/                # 站点图片、开源项目截图、图标等素材
  components/            # 公共组件
  content/
    blog/                # 博客 Markdown / MDX 内容
  data/                  # 页面展示数据
  layouts/               # 文章布局
  pages/                 # 路由页面
  styles/                # 全局样式

static/                  # 旧资料、简历、清单类原始文件
dist/                    # 构建产物
guides/                  # 开发与部署说明文档
```

## 本地开发

安装依赖：

```bash
npm install
```

启动开发环境：

```bash
npm run dev
```

常用命令：

```bash
npm run dev      # 本地开发
npm run build    # 构建静态产物到 dist/
npm run preview  # 本地预览构建结果
```

## 博客内容如何开发

博客内容统一放在：

```text
src/content/blog/
```

支持两种格式：

- `*.md`
- `*.mdx`

前置要求：

- 每篇文章都要带 frontmatter
- frontmatter 结构受 [src/content.config.ts](/Users/wangbin/workspace/my-projects/wangbin3162.github.io/src/content.config.ts) 约束

最小 frontmatter 示例：

```md
---
title: '文章标题'
description: '文章摘要'
pubDate: '2026-06-07'
heroImage: '../../assets/your-image.jpg'
---
```

可选字段：

- `updatedDate`
- `heroImage`

详细写法、命名建议、配图方式、发布前检查，见：

- [博客开发说明](</Users/wangbin/workspace/my-projects/wangbin3162.github.io/guides/博客开发说明.md>)

## 打包与部署

当前工程执行：

```bash
npm run build
```

会生成静态产物到：

```text
dist/
```

部署时以 `dist/` 为准，不再依赖旧版 `docs/` 目录。

完整部署流程、发布检查清单、常见问题处理，见：

- [部署说明](</Users/wangbin/workspace/my-projects/wangbin3162.github.io/guides/部署说明.md>)

## 当前约束

- 页面素材优先放 `src/assets/`
- 博客正文统一走 `src/content/blog/`
- 页面展示数据优先拆到 `src/data/`
- 不要再新增对 `docs/` 目录的运行时依赖

## 相关文档

- [博客开发说明](</Users/wangbin/workspace/my-projects/wangbin3162.github.io/guides/博客开发说明.md>)
- [部署说明](</Users/wangbin/workspace/my-projects/wangbin3162.github.io/guides/部署说明.md>)
