(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{186:function(s,n,a){"use strict";a.r(n);var t=a(0),e=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"node-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-server","aria-hidden":"true"}},[s._v("#")]),s._v(" node server")]),s._v(" "),a("h2",{attrs:{id:"experss搭建server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#experss搭建server","aria-hidden":"true"}},[s._v("#")]),s._v(" experss搭建server")]),s._v(" "),a("p",[s._v("1.全局安装express-generator")]),s._v(" "),a("blockquote",[a("p",[s._v("npm install -g express-generator  (查看版本express --vertion)")])]),s._v(" "),a("p",[s._v("2.生成一个server包")]),s._v(" "),a("blockquote",[a("p",[s._v("express server(生成的包名)")])]),s._v(" "),a("p",[s._v("3.安装依赖")]),s._v(" "),a("blockquote",[a("p",[s._v("npm install (在server目录下)")])]),s._v(" "),a("p",[s._v("4.启动和调试")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("-node \tbin/www   (www最好换成server的名称 package.json内部也需要修改)\n-webstorm配置\n    标题栏Run --\x3econfigurations添加一个nodejs\n    修改name 点选javascript file选择需要启动的server.js 点击确定\n    启动调试 \n-pm2\n    全局安装pm2 npm install pm2 -g \n    启动 pm2 start (server/bin/server.js)\n    pm2 list查看当前运行的项目\n    pm2 stop (/bin/server.js)停止\n    pm2 delete (/bin/server.js)删除项目\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("5.编写server")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1.www中修改监听端口3001")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 2.app.js中添加路由如")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" seller "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./routes/seller'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/api/seller'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" seller"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 3.编写对应路由并返回数据")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" appData "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'../data.json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" goods "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" appData"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("goods"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 这里获取本地json数据,网络请求可使用axios请求. */")]),s._v("\n    router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("json")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            errno"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" goods\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 4.在前端项目配置文件config/index.js中配置代理端口")]),s._v("\n    dev"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        proxyTable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/api/seller'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://localhost:3001'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 5.先启动server服务器,node server/bin/www")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//   再启动本地服务器npm run dev")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//   即访问对应接口会转代理server服务器接口")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 6.启动服务成功,打开localhost:8080即可看到页面")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])]),a("p",[s._v("6.上传服务器到阿里云")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("1.server / app.js 添加静态页面资源引用如\n    app.use(express.static(path.join(__dirname, '/dist')));\n2.终端或者ftp上传到服务器的某个空间(workspace/elm/server)\n    注意:上传时,将server目录下除了node_modules文件夹之外的文件上传,再用xshell 进入对应目录 npm install\n3.测试server启动情况\n    node bin/www启动\n    通过域名/服务器ip:端口号/api/goods(接口名称)访问看是否有返回数据\n    注意:需要通过阿里云安全组配置可用端口范围,通过设置监听3000-4000端口,测试通过\n    后使用pm2 start进行启动\n4.mac链接阿里云\n    ssh -t root@139.224.116.148 -p 22\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("7.打包项目文件npm run build生成dist文件夹")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("1.直接扔到server文件目录下通过端口号访问,如dist文件夹更换,则需要把第六步的静态引用目录修改\n2. index.js文件中productionSourceMap: false ,不进行调试映射\n3.build中的assetsPublicPath:'./'引用路径设置\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"阿里云配置解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#阿里云配置解析","aria-hidden":"true"}},[s._v("#")]),s._v(" 阿里云配置解析")]),s._v(" "),a("p",[s._v("1.购买阿里云服务器,购买并备案域名")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("1.阿里云ip :  106.14.201.32\n2.域名:wangbin666.com\n3.连接命令工具:putty/xshell 上传文件工具:winScp/FileZilla \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"安装node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装node","aria-hidden":"true"}},[s._v("#")]),s._v(" 安装node")]),s._v(" "),a("p",[s._v("step 0 连接阿里云")]),s._v(" "),a("blockquote",[a("p",[s._v("putty/xshell 连接root")])]),s._v(" "),a("blockquote",[a("p",[s._v("ssh -t root@xxxx.xx.xx.xx -p 22 (mac)")])]),s._v(" "),a("p",[s._v("step 1 把yum更新到最新版本")]),s._v(" "),a("blockquote",[a("p",[s._v("yum -y update")])]),s._v(" "),a("p",[s._v("step 2 对开发工具升级安装")]),s._v(" "),a("blockquote",[a("p",[s._v('yum -y groupinstall "Development Tools"')])]),s._v(" "),a("p",[s._v("step 3 下载安装 node.js 安装包")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("1.进入到/usr/src目录，用于存放安装包\n    cd /usr/src\n2.下载安装包\n    wget http://nodejs.org/dist/v8.9.0/node-v8.9.0.tar.gz\n3.解压\n    tar zxf node-v8.9.0.tar.gz\n4.进入解压后的目录，执行预编译处理\n    cd node-v8.9.0\n    ./configure\n5.开始编译node.js源代码(这一步需要等很久)\n    make\n6.编译完后进行安装，默认安装/usr/local/bin/文件夹下\n    make install\n7.查看node版本是否生效\n    node -v\n8.配置使用淘宝npm镜像\n    npm config set registry https://registry.npm.taobao.org\n    验证是否成功: npm config get registry\n9.安装nodejs常用库\n    npm install -g webpack express-generator\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("p",[s._v("step 4 安装pm2")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("1.全局安装pm2\n    npm install pm2 -g\n2.设置环境变量\n    vim 命令打开文件 /etc/profile\n    vim /etc/profile\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"安装nginx服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装nginx服务","aria-hidden":"true"}},[s._v("#")]),s._v(" 安装nginx服务")]),s._v(" "),a("p",[s._v("1.添加CentOS 7 Nginx yum资源库")]),s._v(" "),a("blockquote",[a("p",[s._v("rpm -Uvh http://nginx.org/packages/centos/7/noarch/RPMS/nginx-release-centos-7-0.el7.ngx.noarch.rpm")])]),s._v(" "),a("p",[s._v("2.安装nginx")]),s._v(" "),a("blockquote",[a("p",[s._v("yum install -y nginx")])]),s._v(" "),a("p",[s._v("3.启动Nginx")]),s._v(" "),a("blockquote",[a("p",[s._v("systemctl start nginx.service")])]),s._v(" "),a("p",[s._v("4.ip访问"),a("br"),s._v("\n(注:如果ip访问不了，查看防火墙设置，增加80端口)")]),s._v(" "),a("blockquote",[a("p",[s._v("firewall-cmd --zone=public --add-port=80/tcp --permanent")])]),s._v(" "),a("p",[s._v("更新防火墙配置：firewall-cmd --reload")]),s._v(" "),a("p",[s._v("5.CentOS 7 开机启动Nginx")]),s._v(" "),a("blockquote",[a("p",[s._v("systemctl enable nginx.service")])]),s._v(" "),a("h5",{attrs:{id:"nginx配置信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx配置信息","aria-hidden":"true"}},[s._v("#")]),s._v(" Nginx配置信息")]),s._v(" "),a("p",[s._v("1.网站文件存放默认目录"),a("br"),s._v("\n/usr/share/nginx/html")]),s._v(" "),a("p",[s._v("2.网站默认站点配置"),a("br"),s._v("\n/etc/nginx/conf.d/default.conf")]),s._v(" "),a("p",[s._v("3.自定义Nginx站点配置文件存放目录"),a("br"),s._v("\n/etc/nginx/conf.d/")]),s._v(" "),a("p",[s._v("4.Nginx全局配置"),a("br"),s._v("\n/etc/nginx/nginx.conf")]),s._v(" "),a("p",[s._v("step 1 自定义默认访问目录")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("1.修改网站文件默认存放目录为 \n    /root/home  \n    并将1中默认存放目录中文件拷贝进来\n2.修改2中的默认站点配置\n    location / {\n        root   /home\n        index  index.html index.htm;\n    }\n     location = /50x.html {\n        root   /home;\n    }\n3.重启nginx服务\n    sudo nginx -s reload\n4.其他常用命令\n    whereis nginx:查看nginx安装目录\n    quit : 正常关闭服务器\n    stop : 强制关闭服务器\n    reload : 重新加载配置文件\n    reopen : 重新打开日志文件\n    ps aux|grep nginx:查询nginx进程\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("p",[s._v("step2 配置nginx反向代理端口")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("//待定,还没爬坑成功\n//代理接口成功,但是静态文件访问路径有问题\n    #通过访问service二级目录来访问后台\n    location /mall/ {\n        proxy_redirect off; \n    \tproxy_set_header Host $http_host;\n    \tproxy_set_header X-NginX-Proxy true;\n    \tproxy_set_header X-Real-IP $remote_addr;\n    \tproxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n    \tproxy_pass      http://127.0.0.1:3002/;\n    }\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])])])}],!1,null,null,null);e.options.__file="server.md";n.default=e.exports}}]);