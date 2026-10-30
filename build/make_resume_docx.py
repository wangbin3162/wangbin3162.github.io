# -*- coding: utf-8 -*-
"""Generate the word resume from the latest index.html content."""
import os

from docx import Document
from docx.enum.section import WD_SECTION
from docx.enum.table import WD_ALIGN_VERTICAL, WD_TABLE_ALIGNMENT
from docx.enum.text import WD_ALIGN_PARAGRAPH, WD_TAB_ALIGNMENT
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.shared import Cm, Pt, RGBColor

# ---------- palette ----------
INK = "15191D"
BODY = "2A3036"
GRAY = "5E666E"
MUTED = "8B949C"
LINE = "DCE3DE"
ACCENT = "1C6B48"
SOFT = "F2F7F3"

EA = "微软雅黑"
LAT = "Arial"
CONTENT_W = 17.4  # cm

BASE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(os.path.dirname(BASE), "王彬-个人简历.docx")
AVATAR = os.path.join(BASE, "avatar_circle.png")


# ---------- low level helpers ----------
def font(run, size=9, bold=False, color=INK, italic=False, ea=EA, lat=LAT):
    run.font.size = Pt(size)
    run.font.bold = bold
    run.font.italic = italic
    run.font.color.rgb = RGBColor.from_string(color)
    run.font.name = lat
    rPr = run._element.get_or_add_rPr()
    rFonts = rPr.find(qn("w:rFonts"))
    if rFonts is None:
        rFonts = OxmlElement("w:rFonts")
        rPr.insert(0, rFonts)
    rFonts.set(qn("w:ascii"), lat)
    rFonts.set(qn("w:hAnsi"), lat)
    rFonts.set(qn("w:eastAsia"), ea)
    return run


def fmt(p, before=0, after=0, line=None, align=None, left=0.0, hanging=0.0,
        keep_next=False, keep_lines=True):
    pf = p.paragraph_format
    pf.space_before = Pt(before)
    pf.space_after = Pt(after)
    if line is not None:
        pf.line_spacing = line
    if align is not None:
        p.alignment = align
    if left:
        pf.left_indent = Cm(left)
    if hanging:
        pf.first_line_indent = Cm(-hanging)
    pf.keep_with_next = keep_next
    pf.keep_together = keep_lines
    pf.widow_control = True
    return p


def _insert_pPr_child(pPr, el, successors):
    for child in pPr:
        if child.tag in successors:
            child.addprevious(el)
            return
    pPr.append(el)


_PBDR_SUCCESSORS = {
    qn("w:" + tag) for tag in (
        "shd", "tabs", "suppressAutoHyphens", "kinsoku", "wordWrap",
        "overflowPunct", "topLinePunct", "autoSpaceDE", "autoSpaceDN",
        "bidi", "adjustRightInd", "snapToGrid", "spacing", "ind",
        "contextualSpacing", "mirrorIndents", "suppressOverlap", "jc",
        "textDirection", "textAlignment", "textboxTightWrap", "outlineLvl",
        "divId", "cnfStyle", "rPr", "sectPr", "pPrChange",
    )
}


def bottom_border(p, color=LINE, sz=6, space=4):
    pPr = p._p.get_or_add_pPr()
    pBdr = OxmlElement("w:pBdr")
    bottom = OxmlElement("w:bottom")
    bottom.set(qn("w:val"), "single")
    bottom.set(qn("w:sz"), str(sz))
    bottom.set(qn("w:space"), str(space))
    bottom.set(qn("w:color"), color)
    pBdr.append(bottom)
    _insert_pPr_child(pPr, pBdr, _PBDR_SUCCESSORS)


def shade_paragraph(p, fill):
    pPr = p._p.get_or_add_pPr()
    shd = OxmlElement("w:shd")
    shd.set(qn("w:val"), "clear")
    shd.set(qn("w:color"), "auto")
    shd.set(qn("w:fill"), fill)
    _insert_pPr_child(
        pPr, shd,
        {qn("w:" + tag) for tag in (
            "tabs", "suppressAutoHyphens", "kinsoku", "wordWrap", "overflowPunct",
            "topLinePunct", "autoSpaceDE", "autoSpaceDN", "bidi", "adjustRightInd",
            "snapToGrid", "spacing", "ind", "contextualSpacing", "mirrorIndents",
            "suppressOverlap", "jc", "textDirection", "textAlignment",
            "textboxTightWrap", "outlineLvl", "divId", "cnfStyle", "rPr", "sectPr",
            "pPrChange",
        )},
    )


def letter_spacing(run, points):
    rPr = run._element.get_or_add_rPr()
    sp = OxmlElement("w:spacing")
    sp.set(qn("w:val"), str(int(round(points * 20))))
    for child in rPr:
        if child.tag in (qn("w:w"), qn("w:kern"), qn("w:position"), qn("w:sz"),
                         qn("w:szCs"), qn("w:highlight"), qn("w:u")):
            child.addprevious(sp)
            return
    rPr.append(sp)


def _drop(tblPr, tags):
    for tag in tags:
        for el in tblPr.findall(qn(tag)):
            tblPr.remove(el)


def setup_table(table, widths, margins=(0, 0, 0, 0), shade=None):
    """Build tblPr children in schema order: no style, no outer borders."""
    table.autofit = False
    table.alignment = WD_TABLE_ALIGNMENT.LEFT
    tblPr = table._tbl.tblPr
    _drop(tblPr, ["w:tblStyle", "w:tblW", "w:jc", "w:tblBorders",
                  "w:shd", "w:tblLayout", "w:tblLook"])

    def add(tag, **attrs):
        e = OxmlElement(tag)
        for k, v in attrs.items():
            e.set(qn("w:" + k), str(v))
        tblPr.append(e)
        return e

    add("w:tblW", type="dxa", w=int(round(sum(widths) * 567)))

    b = OxmlElement("w:tblBorders")
    for edge in ("top", "left", "bottom", "right", "insideH", "insideV"):
        el = OxmlElement("w:" + edge)
        el.set(qn("w:val"), "none")
        el.set(qn("w:sz"), "0")
        el.set(qn("w:space"), "0")
        el.set(qn("w:color"), "auto")
        b.append(el)
    tblPr.append(b)

    if shade:
        s = OxmlElement("w:shd")
        s.set(qn("w:val"), "clear")
        s.set(qn("w:color"), "auto")
        s.set(qn("w:fill"), shade)
        tblPr.append(s)

    add("w:tblLayout", type="fixed")

    for row in table.rows:
        trPr = row._tr.get_or_add_trPr()
        cs = OxmlElement("w:cantSplit")
        trPr.append(cs)
        for i, w in enumerate(widths):
            row.cells[i].width = Cm(w)
    grid = table._tbl.tblGrid
    for i, gc in enumerate(grid.findall(qn("w:gridCol"))):
        if i < len(widths):
            gc.set(qn("w:w"), str(int(round(widths[i] * 567))))


def cell_margins(cell, top=0, bottom=0, left=0, right=0):
    tcPr = cell._tc.get_or_add_tcPr()
    for old in tcPr.findall(qn("w:tcMar")):
        tcPr.remove(old)
    tcMar = OxmlElement("w:tcMar")
    for name, value in (("top", top), ("left", left), ("bottom", bottom), ("right", right)):
        el = OxmlElement("w:" + name)
        el.set(qn("w:w"), str(int(value)))
        el.set(qn("w:type"), "dxa")
        tcMar.append(el)
    successors = {qn("w:" + tag) for tag in (
        "textDirection", "tcFitText", "vAlign", "hideMark", "headers",
        "cellIns", "cellDel", "cellMerge", "tcPrChange",
    )}
    for child in tcPr:
        if child.tag in successors:
            child.addprevious(tcMar)
            return
    tcPr.append(tcMar)


def rich(p, text, size=9, color=BODY, bold_color=INK, bold=False):
    """Add text, turning **wrapped** segments into bold runs."""
    for i, seg in enumerate(text.split("**")):
        if not seg:
            continue
        font(p.add_run(seg), size=size, color=(bold_color if i % 2 else color),
             bold=(bold or i % 2))


def para(container, text="", **kw):
    p = container.add_paragraph()
    if text:
        font(p.add_run(text), **kw)
    return p


# ---------- document ----------
doc = Document()

normal = doc.styles["Normal"]
normal.font.name = LAT
normal.font.size = Pt(9)
normal.font.color.rgb = RGBColor.from_string(BODY)
normal.element.rPr.rFonts.set(qn("w:eastAsia"), EA)
normal.paragraph_format.space_before = Pt(0)
normal.paragraph_format.space_after = Pt(0)
normal.paragraph_format.line_spacing = 1.2

sec = doc.sections[0]
sec.page_width = Cm(21.0)
sec.page_height = Cm(29.7)
sec.top_margin = Cm(1.25)
sec.bottom_margin = Cm(1.15)
sec.left_margin = Cm(1.8)
sec.right_margin = Cm(1.8)
sec.header_distance = Cm(0.8)
sec.footer_distance = Cm(0.7)


# ---------- footer ----------
def add_field(p, instr, size=8, color=MUTED):
    r1 = p.add_run()
    begin = OxmlElement("w:fldChar")
    begin.set(qn("w:fldCharType"), "begin")
    r1._r.append(begin)
    font(r1, size=size, color=color)

    r2 = p.add_run()
    it = OxmlElement("w:instrText")
    it.set(qn("xml:space"), "preserve")
    it.text = instr
    r2._r.append(it)
    font(r2, size=size, color=color)

    r3 = p.add_run()
    sep = OxmlElement("w:fldChar")
    sep.set(qn("w:fldCharType"), "separate")
    r3._r.append(sep)
    font(r3, size=size, color=color)

    r4 = p.add_run("1")
    font(r4, size=size, color=color)

    r5 = p.add_run()
    end = OxmlElement("w:fldChar")
    end.set(qn("w:fldCharType"), "end")
    r5._r.append(end)
    font(r5, size=size, color=color)


fp = sec.footer.paragraphs[0]
fp.paragraph_format.tab_stops.add_tab_stop(Cm(CONTENT_W), WD_TAB_ALIGNMENT.RIGHT)
run = fp.add_run("王彬　·　个人简历")
font(run, size=7.8, color=MUTED)
run = fp.add_run("\t第 ")
font(run, size=7.8, color=MUTED)
add_field(fp, "PAGE")
run = fp.add_run(" 页 / 共 ")
font(run, size=7.8, color=MUTED)
add_field(fp, "NUMPAGES")
run = fp.add_run(" 页")
font(run, size=7.8, color=MUTED)


# ---------- header block ----------
head = doc.add_table(rows=1, cols=2)
setup_table(head, [14.1, 3.3])
head_left, head_right = head.rows[0].cells
cell_margins(head_left, 0, 0, 0, 30)
cell_margins(head_right, 0, 0, 10, 0)
head_left.vertical_alignment = WD_ALIGN_VERTICAL.TOP
head_right.vertical_alignment = WD_ALIGN_VERTICAL.TOP

p = head_left.paragraphs[0]
run = p.add_run("王彬")
font(run, size=28, bold=True, color=INK)
run = p.add_run("　/　Wang Bin")
font(run, size=10, color=MUTED)
letter_spacing(run, 0.8)
fmt(p, after=2, line=1.0)

p = head_left.add_paragraph()
run = p.add_run("部门负责人")
font(run, size=11, bold=True, color=INK)
run = p.add_run("　前端研发与管理 · 12 年经验")
font(run, size=8.8, color=GRAY)
fmt(p, after=5, line=1.05)

p = head_left.add_paragraph()
run = p.add_run(
    "12 年前端研发与团队管理经验，精通 Vue3 / TypeScript 与前端工程化，"
    "兼具 React 19 大型项目与 AI 工程化落地能力。主导企业级组件库、数据大屏、"
    "低代码、BI 与 AI Agent 平台从 0 到 1，维护 11 个开源项目，具备全端 + 全栈交付能力。"
)
font(run, size=8.9, color=GRAY)
fmt(p, after=5, line=1.32)

contact_rows = [
    [("电话", "17625160896"), ("邮箱", "316281400@qq.com")],
    [("GitHub", "github.com/wangbin3162"), ("掘金", "juejin.cn/user/4230576475747928")],
    [("个人网站", "wangbinai.top/personal"), ("现居", "江苏 · 徐州")],
]
for row in contact_rows:
    p = head_left.add_paragraph()
    fmt(p, after=0.6, line=1.1)
    for i, (label, value) in enumerate(row):
        if i:
            run = p.add_run("　｜　")
            font(run, size=7.6, color=LINE)
        run = p.add_run(label + " ")
        font(run, size=7.8, bold=True, color=MUTED)
        run = p.add_run(value)
        font(run, size=7.8, color=GRAY)

# avatar
p = head_right.paragraphs[0]
p.alignment = WD_ALIGN_PARAGRAPH.CENTER
fmt(p, before=1, after=0, line=1.0)
p.add_run().add_picture(AVATAR, width=Cm(2.9))

# thin divider
p = doc.add_paragraph()
fmt(p, before=6, after=8)
bottom_border(p, color="C9D2CC", sz=8, space=1)


# ---------- stats strip ----------
stats = [("12", "年前端经验"), ("10", "人技术团队"), ("11", "个开源项目"), ("60+", "组件封装")]
band = doc.add_table(rows=1, cols=4)
setup_table(band, [4.35, 4.35, 4.35, 4.35], shade=SOFT)
for i, (num, label) in enumerate(stats):
    cell = band.rows[0].cells[i]
    cell_margins(cell, 95, 80, 60, 60)
    p = cell.paragraphs[0]
    p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    run = p.add_run(num)
    font(run, size=14.5, bold=True, color=INK)
    fmt(p, after=0, line=1.0)
    p = cell.add_paragraph()
    p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    run = p.add_run(label)
    font(run, size=7.4, color=GRAY)
    fmt(p, after=0, line=1.0)

p = doc.add_paragraph()
fmt(p, before=0, after=0, line=1.0)
font(p.add_run(""), size=2)


# ---------- section helpers ----------
def section(num, title, en):
    p = doc.add_paragraph()
    fmt(p, before=11, after=6, keep_next=True, line=1.0)
    p.paragraph_format.tab_stops.add_tab_stop(Cm(CONTENT_W), WD_TAB_ALIGNMENT.RIGHT)
    run = p.add_run(num)
    font(run, size=8.5, bold=True, color=ACCENT)
    run = p.add_run("　" + title)
    font(run, size=13.5, bold=True, color=INK)
    run = p.add_run("\t" + en)
    font(run, size=7.2, bold=True, color=MUTED)
    letter_spacing(run, 1.3)
    bottom_border(p, color=LINE, sz=6, space=4)
    return p


def bullets(items, size=8.8, after=1.2, line=1.28):
    for it in items:
        p = doc.add_paragraph()
        fmt(p, after=after, left=0.52, hanging=0.52, line=line)
        run = p.add_run("▸ ")
        font(run, size=size - 0.6, color=ACCENT)
        rich(p, it, size=size, color=BODY)


def sub_label(p, text, size=8.8):
    run = p.add_run(text)
    font(run, size=size, bold=True, color=ACCENT)


# ================= 01 个人优势 =================
section("01", "个人优势", "STRENGTHS")

advantages = [
    ("01", "技术管理双栖",
     "从 0 到 1 搭建并带领 10 人技术团队（6 后端、2 前端、1 UI、1 运维），"
     "建立 GitFlow、Code Review 与自动化发布闭环，部门交付效率提升 **60%**，直报研发总监。"),
    ("02", "AI 工程化落地",
     "主导智能合同审查、Langflow Agent 编排、企业知识库、OCR 单据识别、智能语音纪要等 "
     "AI 产品从模型接入到生产闭环，覆盖 SSE 流式、RAG 与多 Agent 协作。"),
    ("03", "低代码与可视化",
     "主导大屏设计器与 **28 万行**级 BI 平台，以 Schema + 双模式渲染支撑 **40+** 大屏组件、"
     "**60+** 可视化组件；低代码引擎支撑 **30+** 系统，开发提效 **70%**。"),
    ("04", "全端 + 全栈架构",
     "覆盖 Web、小程序、H5、React Native、Electron 与 macOS 原生 Swift；兼具 "
     "Python / FastAPI / PostgreSQL 后端建模能力，可独立承担前后端一体项目。"),
]

grid = doc.add_table(rows=2, cols=2)
setup_table(grid, [8.7, 8.7])
for idx, (num, label, desc) in enumerate(advantages):
    cell = grid.rows[idx // 2].cells[idx % 2]
    cell.vertical_alignment = WD_ALIGN_VERTICAL.TOP
    cell_margins(cell, 50, 55, 0, 160 if idx % 2 == 0 else 0)
    p = cell.paragraphs[0]
    fmt(p, after=1.2, line=1.2)
    run = p.add_run(num + "　")
    font(run, size=7.6, bold=True, color=ACCENT)
    run = p.add_run(label)
    font(run, size=9.4, bold=True, color=INK)
    p = cell.add_paragraph()
    fmt(p, after=0, line=1.3)
    rich(p, desc, size=8.6, color=BODY)

# ================= 02 技能栈 =================
section("02", "技能栈", "SKILLS")

skills = [
    ("核心开发与框架",
     "TypeScript · JavaScript (ES6+) · Vue3 Composition API · Pinia / Vue Router · "
     "React 19 + Next.js · Zustand / TanStack Query · Element Plus / Ant Design · "
     "Tailwind CSS v4 · HTML5 / CSS3 / SCSS"),
    ("工程化与全栈",
     "Vite / Webpack / Rollup · Lerna / pnpm Monorepo · Node.js / Express · "
     "Python / FastAPI · SQLAlchemy / Tortoise-ORM · PostgreSQL / Redis · "
     "Docker / CI/CD · Casbin 权限管控"),
    ("数据可视化与 AI",
     "ECharts 5 / D3.js · Three.js / WebGL · UniverJS · Langflow 智能体编排 · "
     "SSE / WebSocket · DashScope / 百炼 · RAG 知识库 · Web Component 跨端嵌入"),
    ("跨端与工程质量",
     "微信小程序 / uni-app · React Native · Electron · Swift / SwiftUI (macOS) · "
     "Vitest / Jest · Playwright · pytest · GitFlow / Code Review · AI 编程 (Claude / Cursor)"),
]

skills_grid = doc.add_table(rows=2, cols=2)
setup_table(skills_grid, [8.7, 8.7])
for idx, (label, items) in enumerate(skills):
    cell = skills_grid.rows[idx // 2].cells[idx % 2]
    cell.vertical_alignment = WD_ALIGN_VERTICAL.TOP
    cell_margins(cell, 50, 55, 0, 160 if idx % 2 == 0 else 0)
    p = cell.paragraphs[0]
    fmt(p, after=1.2, line=1.15)
    run = p.add_run(label)
    font(run, size=8.8, bold=True, color=ACCENT)
    p = cell.add_paragraph()
    fmt(p, after=0, line=1.3)
    run = p.add_run(items)
    font(run, size=8.4, color=BODY)

# ================= 03 项目经历 =================
section("03", "项目经历", "PROJECT EXPERIENCE")

projects = [
    dict(
        code="P1", name="智能合同审查平台", role="项目负责人 / 前端负责人",
        tag="AI 智能体 · 核心",
        tech="Vue 3 · Tailwind v4 · Vue Flow · OnlyOffice · NDJSON · Redis · FastAPI · PostgreSQL",
        value="覆盖台账提取、合规审查、版本对比与规则资产库，单份合同审查从人工 2 小时缩短至 "
              "**30 秒内**，法务人效提升 **80%**；DOCX 单条采纳回写满足强合规审计。",
        hs=[
            "长文本漏审攻坚：规则按章节打分分发 + 章节并发精读，解决大合同超 LLM 上下文难题，审查完整度 **100%**。",
            "成果精确回写：实现 DOCX run 级文本替换与单条建议采纳 / 撤销，AI 意见可无损落回 Word。",
            "对话式台账：流式分步提取 **19 项**合同字段，双批并发 + 原文锚点回验（准确率 ≥90%）；段落级 + 词级双粒度比对自动产出风险报告。",
            "服务端工程：FastAPI 分层，统一大模型重试、分阶段超时与清洗，覆盖 **148 条** pytest 测试。",
        ],
    ),
    dict(
        code="P2", name="Langflow 企业级 AI Agent 开发平台", role="前端负责人",
        tag="AI 智能体 · 核心",
        tech="React 19 · TypeScript · Vite 7 · @xyflow/react · Zustand · TanStack Query · WebSocket",
        value="基于 Langflow 开源内核的企业级编排底座，业务人员拖拽节点即可搭建多 Agent 协同系统，"
              "智能体研发交付周期缩短 **70%**。",
        hs=[
            "基于 React Flow 打造拖拽式编排画布，支持节点吸附、拓扑连线校验、分组子图递归与运行状态毫秒级渲染。",
            "设计 Zustand 多 Store 架构（flowStore **1300+ 行**），联动 **150+** React Query Hooks；封装 UseRequestProcessor 规范 30+ 业务域接口。",
            "搭建 7 语言国际化与 **82 插槽**白标定制层，零代码分叉交付定制客户；建设 Jest + Playwright + Storybook 测试体系。",
        ],
    ),
    dict(
        code="P3", name="新小蝶 AI 智能体平台知识库", role="前端负责人",
        tag="AI 智能体 · 核心",
        tech="Vue 3 · Vite 7 · Pinia · Element Plus · SSE · Web Component",
        value="解决企业大模型接入分散、文档切片问答精度差的痛点，构建统一知识库与多端对话中枢，"
              "服务数十家大型政企客户。",
        hs=[
            "一套代码统一配置中心与 PC / Mobile / Embed 对话端，高质量支撑 **97+** 核心业务视图。",
            "基于 SSE 实现打字机流式对话，支持断点续传、手动中止、语音输入与原文切片溯源；虚拟滚动 + Worker 解析保障 60 FPS。",
            "自研配置驱动动态表单引擎，将对话面板封装为 **Web Component**，支持异构系统零成本嵌入。",
        ],
    ),
    dict(
        code="P4", name="智能单据识别（OCR）平台", role="前端负责人",
        tag="AI 智能体",
        tech="Vue 3 · Vite 7 · Pinia · bin-ui-design · form-create · Socket.io",
        value="将发票、医疗单据等非结构化影像转为高精度结构化数据，单张录入从 **3 分钟**降至 "
              "**5 秒内**，关键字段回填率 **98%+**。",
        hs=[
            "主导 Vue 3 + Vite 7 工程基座，统一请求、状态与路由守卫，实现角色 + 权限码细粒度递归鉴权。",
            "集成可视化表单设计器并自研旧 form_json 兼容层，支撑模板在线拖拽编排。",
            "设计多源上传链路（拖拽 / 拍照 / 扫码），落地原图字段框选核验与识别准确率监控；SVG 矢量层支持缩放、旋转矫正。",
        ],
    ),
    dict(
        code="P5", name="AI 财务差旅报销系统", role="项目负责人 / 前端负责人",
        tag="AI 智能体",
        tech="Vue 3 · TypeScript · Element Plus · Pinia · Casbin · DashScope · FastAPI",
        value="票据拍照即识别、差旅标准自动计算、申请即自动生单，财务初审工作量下降 **90%**。",
        hs=[
            "搭建模块化前端底座，沉淀 useTable 与通用表单体系，支撑 **84 视图 / 73 组件**。",
            "落地 Casbin 三级功能权限与四级行 / 列数据权限；主导五大核心流程，补助按城市等级与天数自动核算。",
            "对接 DashScope 票据识别完成批量填报；FastAPI 异步分层；状态机流程看板 + 不可变快照支持审批溯源与审计回滚。",
        ],
    ),
    dict(
        code="P6", name="听悟智能纪要（智能语音助手）", role="项目负责人 / 前端负责人",
        tag="AI 智能体",
        tech="React 18 · TypeScript · Lerna Monorepo · WebSocket · AudioContext",
        value="面向长会议、商务访谈与电话录音，毫秒级转写 + 说话人分离 + AI 思维导图，"
              "纪要产出效率提升 **85%**。",
        hs=[
            "设计五层 Monorepo 架构（**14 个子包**）分层解耦，支撑多端与多业务线协同。",
            "自研音频采集与重采样管线，WebSocket 心跳重连保障网络抖动下 **0 丢帧**。",
            "搭建文档撤销重做引擎，自研 Markdown / 思维导图联动组件并接入阿里云百炼；AudioWorklet + Worker 增量 Diff 提升响应。",
        ],
    ),
    dict(
        code="P7", name="企业级数据分析与 BI 平台", role="前端负责人",
        tag="数据与可视化",
        tech="Vue 3 · ECharts 5 · OLAP · @vue-flow · vxe-table · ExcelJS",
        value="从 0 到 1 打造 **28 万行**级 BI 分析套件，覆盖数据接入、多模 OLAP 建模、可视化画布与自助报表，"
              "业务自助交付占比 **80%**。",
        hs=[
            "主导前端架构，抽象「建模—搭建—分析—报告」全链路，交付 **70+** 核心模块。",
            "设计 JSON 驱动可视化搭建器与 **60+** 图表 / 控件体系，实现 Join / SQL / 文件 / API 四模建模。",
            "事件总线 + 脚本钩子打通跨组件联动；编辑锁与撤销重做保障协同；Canvas / SVG 混合渲染 + LTTB 降采样，首包体积精简 65%。",
        ],
    ),
    dict(
        code="P8", name="大屏可视化设计器（bin-datav-schema）", role="项目负责人 / 前端负责人",
        tag="数据与可视化",
        tech="Vue 3 · Three.js · ECharts 5 · GSAP · mitt",
        value="打破政企驾驶舱与监控大屏逐屏定制瓶颈，拖拽式 0 代码编排与毫秒级数据联动，"
              "交付周期缩减 **70%**。",
        hs=[
            "以 Schema + 双模式渲染支撑 **40 类 / 14 分类**组件编排，画布具备标尺、吸附、缩放、框选、组合与图层。",
            "设计 useDataCenter 统一数据装配层，收敛静态 / 模型 / 接口三类数据源，支持多维下钻与自动轮询。",
            "引入 mitt 事件总线与跨屏广播；自研 AI 智能解读面板（流式分析 + 语音播报）；Scale / Viewport 双引擎适配 4K 拼接屏。",
        ],
    ),
    dict(
        code="P9", name="报表设计平台（数据报表系统）", role="项目负责人 / 前端负责人",
        tag="数据与可视化",
        tech="Vue 3 · UniverJS · @visactor/vtable · ExcelJS · SSE",
        value="将传统 Excel 式报表迁移至 Web 在线设计、实时取数与协同填报，"
              "摆脱多版本邮件传输与数据混乱。",
        hs=[
            "主导 Vue 3 + UniverJS 架构，抽象单元格级原子配置模型，支撑复杂交叉多级表头。",
            "优化数据渲染管线：1000 行转换 **41ms → 20ms**，公式处理耗时降低 **83%**，合并处理降低 82%。",
            "从 0 到 1 搭建设计 / 预览 / 填报 / 财务合并四大模块，实现强校验填报闭环与 OAuth2 自动续期；稀疏矩阵 + 公式依赖拓扑排序。",
        ],
    ),
    dict(
        code="P10", name="政务月度服务简报自动化系统", role="前端负责人",
        tag="平台与综合",
        tech="Vue 3 · Vite 8 · bin-editor-next · iframe 沙箱 · html2canvas",
        value="面向省市多地政务项目，将人工数天的数据汇聚、排版与成册转为批量自动生成，"
              "报告产出从 **数天压缩至 10 分钟**。",
        hs=[
            "主导 Vue 3 + Vite 分层架构，封装 useTable 与多租户模板批量生成交互体系。",
            "基于 iframe 沙箱 + MutationObserver 实现在线所见即所得编辑、样式隔离与实时回写；打通模板—填充—批注—PDF—分享闭环。",
        ],
    ),
    dict(
        code="P11", name="Visual-DXP 数据交换平台", role="前端负责人",
        tag="平台与综合",
        tech="Vue 3 · Vite 3 · @vue-flow · ECharts · bin-ui-design",
        value="打通异构数据库、FTP、消息队列与 OpenAPI 的数据流转，以纯拖拽 ETL 编排替代脚本化运维。",
        hs=[
            "基于 @vue-flow 自研数据源节点、转换算子、依赖校验与拓扑排序，作业配置全面可视化。",
            "构建角色驱动动态路由与菜单鉴权，落地版本许可与安全沙箱；Kahn 算法前置拦截环形依赖。",
        ],
    ),
    dict(
        code="P12", name="云之家 AI 移动工作台 H5", role="前端负责人",
        tag="平台与综合",
        tech="Vue 3.5 · Vite 5 · Vant 4 · Web Crypto · localforage",
        value="深度嵌入金蝶云之家移动端，免密无感跳转，让全员随时通过手机记录语音日志与发起 AI 业务查询。",
        hs=[
            "主导 Vue 3 移动端轻量基座，组件按需导入，首屏包压缩后仅数十 KB。",
            "自研云之家免登插件（JSBridge + 状态持久化），实现打开即鉴权；AES-256-GCM + 双层 Base64 安全链路，弱网首屏 <1s。",
        ],
    ),
    dict(
        code="P13", name="企业级工程与政务重点项目群", role="前端负责人 / 技术负责人",
        tag="项目群",
        tech="低代码 · 数据治理 · 3D 大屏 · 人事考试 · 信用平台",
        value="历年主导的企业核心系统组合，覆盖数据资产血缘、政务考试高并发、企业信用大数据与全端交付。",
        hs=[
            "企业级低代码平台：拖拽设计 + 50+ 业务组件 + JSON Schema 生成代码，支撑 **30+** 系统上线。",
            "数据治理平台：D3.js / ECharts 全链路血缘拓扑，纳管全司 **80%** 核心数据。",
            "人事考试与信用系列：150+ 复杂表单，覆盖 **500 万+** 主体信用数据，获 **3 个省级**优秀信息化项目奖。",
        ],
    ),
]

for idx, pj in enumerate(projects):
    p = doc.add_paragraph()
    fmt(p, before=(6.2 if idx else 1), after=0.8, keep_next=True, line=1.05)
    run = p.add_run(pj["code"] + "　")
    font(run, size=8.2, bold=True, color=ACCENT)
    run = p.add_run(pj["name"])
    font(run, size=10.4, bold=True, color=INK)

    p = doc.add_paragraph()
    fmt(p, after=0.6, keep_next=True, line=1.2)
    run = p.add_run(pj["role"])
    font(run, size=7.9, bold=True, color=GRAY)
    run = p.add_run("　｜　")
    font(run, size=7.9, color=LINE)
    run = p.add_run(pj["tag"])
    font(run, size=7.6, bold=True, color=ACCENT)

    p = doc.add_paragraph()
    fmt(p, after=1.4, keep_next=True, line=1.24)
    run = p.add_run("技术　")
    font(run, size=7.6, bold=True, color=MUTED)
    run = p.add_run(pj["tech"])
    font(run, size=7.7, color=GRAY)

    p = doc.add_paragraph()
    fmt(p, after=1.5, left=0.02, line=1.3)
    run = p.add_run("价值　")
    font(run, size=7.8, bold=True, color=ACCENT)
    rich(p, pj["value"], size=8.5, color=BODY)

    bullets(pj["hs"])

# ================= 04 开源作品 =================
section("04", "开源作品", "OPEN SOURCE")
p = doc.add_paragraph()
fmt(p, after=4, line=1.35)
run = p.add_run("长期维护 11 个开源项目，覆盖企业级组件库、数据可视化、跨框架动效与 AI 工程工具。")
font(run, size=8.5, color=GRAY)

oss = [
    ("bin-editor-next", "194★", "Vue3 代码 / JSON 编辑器，语法高亮与折叠"),
    ("bin-ui-design", "135★", "Vue3 企业级 UI 组件库，60+ 组件"),
    ("bin-tree-org", "103★", "企业组织架构树，拖拽与自定义插槽"),
    ("bin-datav", "94★", "数据大屏组件库与 Schema 搭建平台"),
    ("bin-admin-pro", "71★", "中后台框架，权限 / 主题 / CRUD 开箱即用"),
    ("bin-charts-next", "24★", "Vue3 + ECharts 5 业务图表库"),
    ("bin-animation", "22★", "轻量 Vue CSS3 高性能进场动画库"),
    ("bin-grid-layout", "18★", "Vue3 拖拽网格布局，碰撞检测与响应式"),
    ("bin-form-maker", "7★", "JSON Schema 可视化表单设计器"),
    ("bin-excel-pro", "6★", "Univer 在线 Excel 报表与填报组件"),
    ("thinking-orbs", "—", "跨框架 AI 思考球动效库（Vue / React / WC）"),
    ("binvia", "—", "macOS 本地 AI 供应商聚合网关 · Swift 6.2"),
]

oss_table = doc.add_table(rows=6, cols=2)
setup_table(oss_table, [8.7, 8.7])
for idx, (name, star, desc) in enumerate(oss):
    cell = oss_table.rows[idx % 6].cells[idx // 6]
    cell.vertical_alignment = WD_ALIGN_VERTICAL.TOP
    cell_margins(cell, 35, 35, 0, 160 if idx // 6 == 0 else 0)
    p = cell.paragraphs[0]
    fmt(p, after=0.4, line=1.05)
    run = p.add_run(name)
    font(run, size=8.5, bold=True, color=INK)
    run = p.add_run("　" + star)
    font(run, size=7.2, bold=True, color=ACCENT)
    p = cell.add_paragraph()
    fmt(p, after=0, line=1.12)
    run = p.add_run(desc)
    font(run, size=7.9, color=GRAY)

p = doc.add_paragraph()
fmt(p, before=4, after=1.2, line=1.35)
run = p.add_run("AI 工具　")
font(run, size=8.4, bold=True, color=ACCENT)
run = p.add_run(
    "ai-news（AI 资讯聚合 · Python / Flask / DeepSeek）、AetherDock（Chrome MV3 AI 侧边栏）、"
    "agents-skills（AI 编程技能库）、bin-keyframe-animation（关键帧动画微内核）。"
)
font(run, size=8.3, color=BODY)

# ================= 05 工作经历 =================
section("05", "工作经历", "EXPERIENCE")
work = [
    ("徐州新蝶科技有限公司", "部门负责人", "2018.02 — 至今", [
        "负责前端团队与部门整体管理，带领 **10 人技术团队**（6 后端、2 前端、1 UI、1 运维），直接向研发总监汇报。",
        "建立技术选型、Code Review、GitFlow、CI/CD 与跨团队协作机制，部门综合交付效率提升 **60%**。",
        "主导企业级组件库、数据大屏、低代码、BI 平台及多类 AI 应用从 0 到 1 架构设计与落地。",
        "推动构建工具向 Vite 演进（提速 **70%**）、首屏加载优化 **50%**，全面引入 AI 辅助编程工作流。",
    ]),
    ("上海迪尔希科技有限公司", "Unity 开发工程师", "2015 — 2017", [
        "使用 Unity3D + C# 开展三维交互逻辑开发、渲染管线搭建与资源调度。",
        "负责渲染优化、内存管理与帧率提升等性能攻关，积累图形学与性能调优功底。",
    ]),
]
for name, role, period, points in work:
    p = doc.add_paragraph()
    fmt(p, before=4, after=1.5, keep_next=True, line=1.1)
    p.paragraph_format.tab_stops.add_tab_stop(Cm(CONTENT_W), WD_TAB_ALIGNMENT.RIGHT)
    run = p.add_run(name)
    font(run, size=10.3, bold=True, color=INK)
    run = p.add_run("　｜　" + role)
    font(run, size=8.8, color=GRAY)
    run = p.add_run("\t" + period)
    font(run, size=8.3, color=MUTED)
    bullets(points)

# ================= 06 教育背景 =================
section("06", "教育背景", "EDUCATION")
edu = [
    ("江苏科技大学", "计算机科学与技术 · 函授本科", "2013 — 2015"),
    ("南京交通职业技术学院", "城市轨道交通 · 专科", "2009 — 2012"),
]
for school, major, period in edu:
    p = doc.add_paragraph()
    fmt(p, after=2, line=1.15)
    p.paragraph_format.tab_stops.add_tab_stop(Cm(CONTENT_W), WD_TAB_ALIGNMENT.RIGHT)
    run = p.add_run(school)
    font(run, size=9.4, bold=True, color=INK)
    run = p.add_run("　　" + major)
    font(run, size=8.8, color=GRAY)
    run = p.add_run("\t" + period)
    font(run, size=8.3, color=MUTED)

p = doc.add_paragraph()
fmt(p, before=4, after=0, line=1.35)
run = p.add_run("分享与持续构建　")
font(run, size=8.4, bold=True, color=ACCENT)
run = p.add_run("组织内部 30+ 场前端与 AI 专题技术分享，在掘金等技术社区持续沉淀原创技术博客。")
font(run, size=8.3, color=BODY)

# core properties
cp = doc.core_properties
cp.title = "王彬 - 个人简历"
cp.author = "王彬"
cp.subject = "个人简历"
cp.keywords = "前端, Vue3, TypeScript, AI, 部门负责人"

# python-docx's default template writes <w:zoom w:val="bestFit"/> without percent
zoom = doc.settings.element.find(qn("w:zoom"))
if zoom is not None and zoom.get(qn("w:percent")) is None:
    zoom.set(qn("w:percent"), "100")

doc.save(OUT)
print("saved", OUT)
