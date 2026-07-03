# 彬的编程实验室

个人技术站点，基于 Astro 搭建。当前已精简为仅保留首页入口，作为一个干净的初始工程。

## 项目定位

- 站点名称：`彬的编程实验室`
- 英文名称：`Bin's Coding Lab`
- 技术栈：`Astro 6 + TypeScript + Tailwind CSS`
- 产物类型：静态站点
- 当前构建输出目录：`dist/`

## 目录结构

```text
src/
  assets/                # 站点图片、开源项目截图、图标等素材
  components/            # 公共组件（BaseHead.astro）
  data/                  # 页面展示数据
  pages/                 # 路由页面

public/                  # 直接复制到 dist/ 的静态文件
dist/                    # 构建产物
static/                  # 旧版静态站点与简历文档（不参与 Astro 构建）
docs/                    # 部署说明等参考文档
```

## 本地开发

安装依赖：

```bash
pnpm install
```

启动开发环境：

```bash
pnpm run dev
```

常用命令：

```bash
pnpm run dev      # 本地开发
pnpm run build    # 构建静态产物到 dist/
pnpm run preview  # 本地预览构建结果
```

## 打包与部署

```bash
pnpm run build
```

构建产物输出到 `dist/`，部署时以 `dist/` 为准。

详细流程见 [docs/部署说明.md](./docs/部署说明.md)。

## 当前约束

- 页面素材优先放 `src/assets/`
- 页面展示数据优先拆到 `src/data/`
- 不再支持 Markdown / MDX / Content Collections / RSS
- 不要再新增对 `docs/` 或 `static/` 目录的运行时依赖

## License

[MIT](./LICENSE)
