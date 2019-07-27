---
sidebar: auto
---

# node server

## experss搭建server
1.全局安装express-generator
> npm install -g express-generator  (查看版本express --vertion)

2.生成一个server包
> express server(生成的包名)

3.安装依赖
> npm install (在server目录下)

4.启动和调试

```
-node 	bin/www   (www最好换成server的名称 package.json内部也需要修改)
-webstorm配置
    标题栏Run -->configurations添加一个nodejs
    修改name 点选javascript file选择需要启动的server.js 点击确定
    启动调试 
-pm2
    全局安装pm2 npm install pm2 -g 
    启动 pm2 start (server/bin/server.js)
    pm2 list查看当前运行的项目
    pm2 stop (/bin/server.js)停止
    pm2 delete (/bin/server.js)删除项目
```
   
5.编写server

```js
// 1.www中修改监听端口3001
// 2.app.js中添加路由如
    var seller = require('./routes/seller');
    app.use('/api/seller', seller);
// 3.编写对应路由并返回数据
    var appData = require('../data.json');
    var goods = appData.goods;
    /* 这里获取本地json数据,网络请求可使用axios请求. */
    router.get('/', function(req, res, next) {
        res.json({
            errno: 0,
            data: goods
        });
    });
// 4.在前端项目配置文件config/index.js中配置代理端口
    dev:{
        proxyTable: {
            '/api/seller': {target: 'http://localhost:3001'}
        },
    }
// 5.先启动server服务器,node server/bin/www
//   再启动本地服务器npm run dev
//   即访问对应接口会转代理server服务器接口
// 6.启动服务成功,打开localhost:8080即可看到页面
```

6.上传服务器到阿里云

```
1.server / app.js 添加静态页面资源引用如
    app.use(express.static(path.join(__dirname, '/dist')));
2.终端或者ftp上传到服务器的某个空间(workspace/elm/server)
    注意:上传时,将server目录下除了node_modules文件夹之外的文件上传,再用xshell 进入对应目录 npm install
3.测试server启动情况
    node bin/www启动
    通过域名/服务器ip:端口号/api/goods(接口名称)访问看是否有返回数据
    注意:需要通过阿里云安全组配置可用端口范围,通过设置监听3000-4000端口,测试通过
    后使用pm2 start进行启动
4.mac链接阿里云
    ssh -t root@139.224.116.148 -p 22
```

7.打包项目文件npm run build生成dist文件夹

```
1.直接扔到server文件目录下通过端口号访问,如dist文件夹更换,则需要把第六步的静态引用目录修改
2. index.js文件中productionSourceMap: false ,不进行调试映射
3.build中的assetsPublicPath:'./'引用路径设置
```


## 阿里云配置解析
1.购买阿里云服务器,购买并备案域名

```
1.阿里云ip :  106.14.201.32
2.域名:wangbin666.com
3.连接命令工具:putty/xshell 上传文件工具:winScp/FileZilla 
```

### 安装node
step 0 连接阿里云

> putty/xshell 连接root

> ssh -t root@xxxx.xx.xx.xx -p 22 (mac)

step 1 把yum更新到最新版本

> yum -y update

step 2 对开发工具升级安装

> yum -y groupinstall "Development Tools"

step 3 下载安装 node.js 安装包


```
1.进入到/usr/src目录，用于存放安装包
    cd /usr/src
2.下载安装包
    wget http://nodejs.org/dist/v8.9.0/node-v8.9.0.tar.gz
3.解压
    tar zxf node-v8.9.0.tar.gz
4.进入解压后的目录，执行预编译处理
    cd node-v8.9.0
    ./configure
5.开始编译node.js源代码(这一步需要等很久)
    make
6.编译完后进行安装，默认安装/usr/local/bin/文件夹下
    make install
7.查看node版本是否生效
    node -v
8.配置使用淘宝npm镜像
    npm config set registry https://registry.npm.taobao.org
    验证是否成功: npm config get registry
9.安装nodejs常用库
    npm install -g webpack express-generator
```
step 4 安装pm2


```
1.全局安装pm2
    npm install pm2 -g
2.设置环境变量
    vim 命令打开文件 /etc/profile
    vim /etc/profile
```

### 安装nginx服务
1.添加CentOS 7 Nginx yum资源库

> rpm -Uvh http://nginx.org/packages/centos/7/noarch/RPMS/nginx-release-centos-7-0.el7.ngx.noarch.rpm

2.安装nginx

> yum install -y nginx

3.启动Nginx

> systemctl start nginx.service

4.ip访问  
(注:如果ip访问不了，查看防火墙设置，增加80端口)
> firewall-cmd --zone=public --add-port=80/tcp --permanent

更新防火墙配置：firewall-cmd --reload

5.CentOS 7 开机启动Nginx

> systemctl enable nginx.service

##### Nginx配置信息

1.网站文件存放默认目录  
/usr/share/nginx/html 

2.网站默认站点配置  
/etc/nginx/conf.d/default.conf

3.自定义Nginx站点配置文件存放目录  
/etc/nginx/conf.d/

4.Nginx全局配置  
/etc/nginx/nginx.conf

step 1 自定义默认访问目录
```
1.修改网站文件默认存放目录为 
    /root/home  
    并将1中默认存放目录中文件拷贝进来
2.修改2中的默认站点配置
    location / {
        root   /home
        index  index.html index.htm;
    }
     location = /50x.html {
        root   /home;
    }
3.重启nginx服务
    sudo nginx -s reload
4.其他常用命令
    whereis nginx:查看nginx安装目录
    quit : 正常关闭服务器
    stop : 强制关闭服务器
    reload : 重新加载配置文件
    reopen : 重新打开日志文件
    ps aux|grep nginx:查询nginx进程
```
step2 配置nginx反向代理端口

```
//待定,还没爬坑成功
//代理接口成功,但是静态文件访问路径有问题
    #通过访问service二级目录来访问后台
    location /mall/ {
        proxy_redirect off; 
    	proxy_set_header Host $http_host;
    	proxy_set_header X-NginX-Proxy true;
    	proxy_set_header X-Real-IP $remote_addr;
    	proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    	proxy_pass      http://127.0.0.1:3002/;
    }
```
