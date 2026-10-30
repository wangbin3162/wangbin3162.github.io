# bin-form-maker 表单设计器 · 项目经验

## 项目概况

基于 Vue3 + JSON Schema 的可视化表单设计器，支持拖拽搭建与运行时动态渲染。

## 项目背景

中后台表单需求高频重复，字段、校验、联动长期硬编码，成本高、复用差。目标是让配置人员可视化产出表单，运行时按 Schema 动态渲染并支持脚本扩展。

## 技术栈

- 框架：Vue3、Vue Router、Vite5
- UI：bin-ui-design、vuedraggable、bin-editor-next、highlight.js
- 核心：JSON Schema、import.meta.glob、AsyncFunction、axios、dayjs
- 工程化：ESLint、Prettier、Vite manualChunks 分包

## 我的角色

前端负责人，负责整个前端系统构建。

## 负责内容

- 搭建“组件面板—画布—属性配置”三栏架构，用 vuedraggable 实现控件与布局容器递归拖拽。
- 设计 JSON Schema 与配置合并机制（deepMerge、唯一 key/model），支持 schema 导入导出与回放。
- 实现递归渲染引擎（RenderForm/RenderNest），按 type 动态挂载组件，用 import.meta.glob 自动注册 12 类控件。
- 研发校验体系，内置必填、正则、条件必填、日期区间等 20+ 规则生成器，支持脚本校验。
- 设计脚本扩展与全局事件引擎，注入 formModel/ctrlCfgs/fetchData/util，将可视化联动编译为可执行脚本。

## 优势与价值

- 设计器与渲染器分离、Schema 与组件解耦，新增控件仅需一份配置文件即可接入。
- 可视化事件自动编译为脚本，兼顾易用性与灵活性，可调用异步接口完成动态校验。
- 表单由编码转为配置，交付周期缩短【待补充：提效比例】，可复用于多条业务线【待补充：接入数量】。
- JSON 模板可持久化复用，统一表单结构与校验规范。

## 简历亮点

- 主导 JSON Schema 可视化表单设计器，拆分设计器与渲染器双引擎，打通拖拽搭建到动态渲染闭环。
- 抽象组件配置协议与自动注册机制，import.meta.glob 接入 12 类控件，扩展成本收敛为单一配置文件。
- 构建 20+ 校验规则生成器与脚本校验链路，覆盖条件必填、日期区间等场景，满足动态校验需求。
- 设计 AsyncFunction 脚本引擎，将可视化联动配置转为可执行脚本，兼顾低代码与高级定制。
