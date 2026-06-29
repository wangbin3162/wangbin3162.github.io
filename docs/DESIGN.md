# 设计系统 — wangbin3162 新版站点

> 参考站点：[theshift.tokyo](https://theshift.tokyo/en/)（Awwwards SOTD）
> 目标：将其极简黑底、大胆排版、滚动驱动的交互风格迁移到个人站点

---

## 1. 配色方案

### 1.1 主色板

| 角色 | 变量名 | HEX | 用途 |
|------|--------|-----|------|
| 主背景 | `--bg-primary` | `#000000` | 页面底色 |
| 辅背景 | `--bg-secondary` | `#0a0a0a` | 略带灰度的黑，用于卡片/区块 |
| 强调色 | `--accent` | `#D14836` | 链接、编号、hover 状态 |
| 强调色亮 | `--accent-light` | `rgba(209,72,54,0.12)` | pill 背景、弱化强调 |
| 主文字 | `--text-primary` | `#ffffff` | 标题、正文 |
| 次文字 | `--text-secondary` | `rgba(255,255,255,0.6)` | 描述、辅助信息 |
| 弱文字 | `--text-muted` | `rgba(255,255,255,0.35)` | 日期、标签、编号括号 |
| 边框 | `--border` | `rgba(255,255,255,0.08)` | 分隔线、卡片边框 |

### 1.2 功能色

| 角色 | 变量名 | HEX |
|------|--------|-----|
| 成功 | `--color-success` | `#22c55e` |
| 警告 | `--color-warning` | `#eab308` |
| 错误 | `--color-danger` | `#ef4444` |
| 信息 | `--color-info` | `#3b82f6` |

### 1.3 开源项目卡片的特殊强调色

为区别项目类型，卡片标签使用功能性渐变：

| 类别 | 背景渐变 | 文字色 |
|------|----------|--------|
| 组件库 | `rgba(209,72,54,0.1)` → `rgba(209,72,54,0.05)` | `#D14836` |
| 可视化 | `rgba(59,130,246,0.1)` → `rgba(59,130,246,0.05)` | `#3b82f6` |
| 工具类 | `rgba(234,179,8,0.1)` → `rgba(234,179,8,0.05)` | `#eab308` |

### 1.4 渐变

| 名称 | 值 | 用途 |
|------|----|------|
| accent-gradient | `linear-gradient(135deg, #D14836, #ff6b4a)` | Hero 标题、按钮 |
| text-fade | `linear-gradient(180deg, #fff 0%, rgba(255,255,255,0.6) 100%)` | 大段文字渐隐 |

---

## 2. 字体系统

### 2.1 字体栈

```css
--font-display: 'Space Grotesk', 'Outfit', sans-serif;
--font-body: 'Noto Sans SC', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;
```

- **Space Grotesk**：几何风格无衬线体，用于标题、编号、英文部分
- **Noto Sans SC**：中文正文
- **JetBrains Mono**：技术标签、代码片段

> 字体加载：Google Fonts CDN，使用 `font-display: swap` 避免阻塞渲染。

### 2.2 字号阶梯

| 级别 | 变量名 | 尺寸 | 用途 |
|------|--------|------|------|
| hero-xl | `--text-hero-xl` | `clamp(48px, 8vw, 96px)` | 首页 Hero 大标题 |
| hero-lg | `--text-hero-lg` | `clamp(32px, 5vw, 64px)` | 区块标题 |
| h1 | `--text-h1` | `clamp(28px, 4vw, 48px)` | 页面主标题 |
| h2 | `--text-h2` | `clamp(24px, 3vw, 36px)` | 区块二级标题 |
| h3 | `--text-h3` | `20px` | 卡片标题 |
| body | `--text-body` | `16px` | 正文 |
| small | `--text-small` | `14px` | 描述、辅助信息 |
| caption | `--text-caption` | `12px` | 日期、编号括号 |

### 2.3 letter-spacing 规范

theshift.tokyo 的标志性排版特征是夸张的字母间距。我们的规范：

| 场景 | letter-spacing | 示例 |
|------|----------------|------|
| 区块大标题（英文） | `0.3em ~ 0.5em` | "A B O U T" → 每个字母之间有空格 |
| 编号括号 | `0.2em` | `( 01 )` |
| 导航链接 | `0.08em` | Home / Project / About |
| 标签/小字 | `0.05em` | Vue3 / TypeScript |

> 中文标题不使用 letter-spacing 扩展（中文字间距已足够），仅在英文标题和编号中应用。

### 2.4 行高

| 场景 | line-height |
|------|-------------|
| Hero 大标题 | `1.05` |
| 普通标题 | `1.2` |
| 正文 | `1.6` |
| 小字/描述 | `1.5` |

---

## 3. 间距系统

采用 **8px 基准网格**，所有间距为 8 的倍数：

| 变量名 | 值 | 用途 |
|--------|----|------|
| `--space-xs` | `8px` | 内部元素间距 |
| `--space-sm` | `16px` | 卡片内部 padding |
| `--space-md` | `24px` | 区块内间距 |
| `--space-lg` | `48px` | 区块间间距 |
| `--space-xl` | `72px` | 大区块分隔 |
| `--space-2xl` | `120px` | 页面级分隔 |
| `--container-max` | `1200px` | 最大内容宽度 |
| `--nav-height` | `72px` | 顶部导航高度 |

---

## 4. 圆角与边框

| 变量名 | 值 | 用途 |
|--------|----|------|
| `--radius-sm` | `4px` | 小按钮、标签 |
| `--radius-md` | `8px` | 卡片 |
| `--radius-lg` | `12px` | 大卡片、区块 |
| `--radius-full` | `999px` | pill 形标签 |
| `--border-width` | `0.5px` | 分隔线（极细） |

> theshift.tokyo 几乎不使用圆角（方正硬朗），但我们保留小圆角以适应中文排版习惯。

---

## 5. 阴影系统

极简风格下阴影极度克制：

| 变量名 | 值 | 用途 |
|--------|----|------|
| `--shadow-none` | `none` | 默认状态 |
| `--shadow-subtle` | `0 2px 8px rgba(0,0,0,0.3)` | hover 状态微浮 |
| `--shadow-card` | `0 8px 32px rgba(0,0,0,0.5)` | 模态框/浮层 |

> 黑底上阴影本身就很难体现，更多依赖 opacity 和 border 变化来区分层级。

---

## 6. 动效规范

### 6.1 缓动函数

| 名称 | 值 | 用途 |
|------|----|------|
| `--ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | 元素出场（弹性） |
| `--ease-in-out` | `cubic-bezier(0.4, 0, 0.2, 1)` | 通用过渡 |
| `--ease-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | 弹跳效果 |

### 6.2 时长规范

| 类型 | 时长 | 用途 |
|------|------|------|
| 微交互 | `150ms ~ 200ms` | hover、focus |
| 通用过渡 | `300ms ~ 500ms` | 展开/折叠、卡片位移 |
| 动画序列 | `600ms ~ 1200ms` | 文字揭示、区块进场 |
| 大场景 | `1500ms ~ 2000ms` | 页面过渡、Hero 动画 |

### 6.3 核心动效列表

| 效果名 | 实现方式 | 说明 |
|--------|----------|------|
| 文字揭示 | GSAP SplitText + ScrollTrigger | 字符逐个淡入+位移，从下方滑出 |
| 区块进场 | GSAP ScrollTrigger `fromTo` | `opacity:0 + translateY(60px)` → 正常 |
| 项目轮播 | CSS marquee + JS 悬停暂停 | 首页 5 个项目水平无限滚动 |
| 项目列表循环 | CSS `translateY(-50%)` + 元素复制 | `/project` 页垂直循环滚动 |
| 页面过渡 | Barba.js + GSAP 过渡层 | 遮罩淡入 → 内容滑出 → 新内容滑入 |
| 粒子背景 | Canvas 2D requestAnimationFrame | 100~200 个粒子，随机运动+连线 |
| 折叠展开 | Vue `v-show` + GSAP `height:auto` | Collaborator 详情展开 |
| hover 图片浮现 | CSS `opacity + translateY` | 项目列表 hover 时浮现缩略图 |
| 平滑滚动 | Lenis + ScrollTrigger scrollerProxy | 全站平滑滚动 |

---

## 7. 响应式断点

| 断点名 | 值 | 设备 |
|--------|----|------|
| `sm` | `640px` | 手机竖屏 |
| `md` | `768px` | 手机横屏/小平板 |
| `lg` | `1024px` | 平板/小笔记本 |
| `xl` | `1280px` | 标准桌面 |
| `2xl` | `1536px` | 大屏桌面 |

### 7.1 移动端降级策略

| 效果 | 桌面端 | 移动端 |
|------|--------|--------|
| 粒子背景 | Canvas 2D 全屏 | 简化版（30 粒子）或静态渐变 |
| 平滑滚动 | Lenis | 关闭（系统原生滚动） |
| 项目轮播 | 无限 marquee | Swiper 触摸滑动 |
| hover 图片浮现 | 鼠标悬停 | 长按/无（改为卡片式展示） |
| 页面过渡 | Barba.js 全动画 | 简化淡入淡出 |
| 水平/对角滚动 | GSAP pinning | 关闭 |

---

## 8. 排版风格 — theshift.tokyo 标志性元素

### 8.1 编号列表格式

项目编号格式为 `( 01 )`，括号内有空格：

```html
<span class="project-number">( 01 )</span>
<span class="project-year">2024</span>
<h2 class="project-title">项目名称</h2>
```

样式：
```css
.project-number {
  font-family: var(--font-mono);
  font-size: var(--text-caption);
  letter-spacing: 0.2em;
  color: var(--text-muted);
}
.project-year {
  font-family: var(--font-display);
  font-size: var(--text-small);
  color: var(--accent);
}
.project-title {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  color: var(--text-primary);
  letter-spacing: 0.02em;
}
```

### 8.2 标题字母间距排版

英文区块标题用空格分隔字母：

```
A B O U T
P R O J E C T
E X P E R I E N C E
```

CSS：
```css
.section-title-spread {
  font-family: var(--font-display);
  font-size: clamp(24px, 3vw, 48px);
  font-weight: 500;
  letter-spacing: 0.35em;
  color: var(--text-primary);
}
```

### 8.3 项目名称断行

theshift.tokyo 的项目名被刻意断行，形成排版节奏：

```html
<h2>
  <span>bin-ui</span><br>
  <span>design</span>
</h2>
```

### 8.4 导航极简风格

导航栏：透明背景、白色文字、左侧 logo + 右侧三到四个链接，无背景色变化。

```css
.nav-link {
  font-family: var(--font-display);
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.08em;
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.2s;
}
.nav-link:hover {
  color: var(--text-primary);
}
```

---

## 9. 组件视觉规范

### 9.1 项目卡片（/project 页 hover）

```
┌─────────────────────────────────────┐
│ ( 01 )   2024                       │
│                                       │
│ bin-ui                 ← 悬停浮现图片 │
│ design                                │
│                                       │
│ Vue3 · TypeScript                     │
└─────────────────────────────────────┘
```

- 默认状态：编号+年份+项目名+技术标签，纯文字
- hover 状态：右侧浮现项目缩略图，标题变强调色
- 行间 `border-bottom: 0.5px solid var(--border)` 分隔

### 9.2 开源项目详情卡片（/project/[slug]）

```
┌─────────────────────────────────────┐
│ bin-ui-design                        │
│                                       │
│ YEAR        2024                      │
│ CATEGORY    组件库                     │
│ STARS       135                       │
│ LINK        GitHub / Demo             │
│                                       │
│ 描述文字...                            │
│                                       │
│ Vue3 · TypeScript · Vite              │
└─────────────────────────────────────┘
```

### 9.3 团队成员（/about 页）

核心成员：名字+角色+简介，直接展示
合作者：名字+角色，有 OPEN/CLOSE 按钮展开详情

```
┌─ 核心成员 ─────────────────────────┐
│ 王彬                                 │
│ 前端开发者 · 开源爱好者               │
│                                       │
│ 简介...                               │
└─────────────────────────────────────┘

┌─ 合作者 ───────────────────────────┐
│ XX                                    │
│ 角色                                  │
│                          [OPEN]       │
└─────────────────────────────────────┘
  → 点击展开后显示完整简介和合作项目
```

---

## 10. 页面过渡视觉规范

### 10.1 Barba.js 过渡层

过渡层为全屏遮罩，背景色 `#000000`：

1. **离开动画**：当前内容 `opacity 0 → 1` 淡出（300ms）
2. **遮罩进场**：黑底遮罩从底部滑入覆盖全屏（600ms, ease-out）
3. **进入动画**：遮罩从顶部滑出，新内容从下方位移进场（600ms, ease-spring）
4. **总时长**：约 1200ms

### 10.2 首次加载动画

页面首次加载时：
1. 黑屏 → 粒子背景渐显（800ms）
2. Hero 标题字符逐个揭示（1200ms, stagger 50ms）
3. slogan 和统计数据淡入（600ms）

---

## 11. 性能约束

| 约束 | 值 |
|------|----|
| 粒子数量（桌面） | ≤ 200 |
| 粒子数量（移动） | ≤ 30 或关闭 |
| 首屏加载 | ≤ 2s（LCP） |
| JS bundle | ≤ 150KB (gzipped) |
| GSAP 动画帧率 | ≥ 60fps |
| 图片格式 | WebP 优先，PNG fallback |
| 图片懒加载 | 所有非首屏图片 `loading="lazy"` |
