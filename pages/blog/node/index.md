# Node 服务

最后修改时间: 2025-05-12

- 数据库

- 日志

- 异常

- 权限

- 校验

- ...

<img src="../../../images/DCjbbR5uEoF55xxG1lQcngEqnyb.png" alt="../../../images" style="max-width:50%;height:auto;display:block;margin:0 auto;" loading="lazy" /> <!-- 图片未成功捕获 -->

### NodeJs 缺陷

- 由于天生单线程特性，面对 CPU 密集型任务，可能会导致性能瓶颈

从性能来看：Bun > Deno > Node

- Deno 和 Bun 天生支持 Typescript

- Deno 增加了权限模型，更安全

### Node 线程

- libuv 线程池

处理 IO 密集型

- worker_threads

处理计算密集型

Node.js 10.x 版本开始，引入了 worker_threads 模块，处理 CPU 密集型。

默认只有一个 JS 线程，但是可以创建多个 JS 线程辅助计算；使用 worker_threads 可以实现真正意义上的多线程并行计算

现代操作系统的线程调度器可以将不同的线程分配到不同的 CPU 核心上并行执行。

不直接共享内存，每个 threads 有自己的 v8 引擎；

但是可以通过 postMessage 传递数据，实际上就是普通的跨进程传递方式

js 的线程不和其他多线程语言一样，比如 go 语言线程之间天然共享内存。

### Node 的进程和线程

```JavaScript
// 进程
const cluster = require("cluster")
culster.fork() // 开启进程
// 线程
const {Worker} = require("worker_threads")
const worker1 = new Worker(地址)
```

### NodeJs 运行时

<img src="../../../images/ARqEbKgV7o4d9bxym1VcRgVFnpd.png" alt="../../../images" style="max-width:50%;height:auto;display:block;margin:0 auto;" loading="lazy" /> <!-- 图片未成功捕获 -->

<img src="../../../images/G3anbMRwvohTrAxmUJXcdiQzneh.png" alt="../../../images" style="max-width:50%;height:auto;display:block;margin:0 auto;" loading="lazy" /> <!-- 图片未成功捕获 -->

缺点：一旦某个计算过程崩溃，整个服务就崩溃

### BFF 架构

<img src="../../../images/NxyabUmjooWFYBxLJIUcvYdAnWe.png" alt="../../../images" style="max-width:50%;height:auto;display:block;margin:0 auto;" loading="lazy" /> <!-- 图片未成功捕获 -->

<img src="../../../images/WkfTbXC4do6FwLxvplHcBLJrnFe.png" alt="../../../images" style="max-width:50%;height:auto;display:block;margin:0 auto;" loading="lazy" /> <!-- 图片未成功捕获 -->

服务端和服务端之间没有并发限制

### 中间件的洋葱模型

Koa/MidwayJs 中的中间件使用洋葱模型；Express 则是队列模型

```JavaScript
// myKoa.js
const {createServer} from 'http'
class MyKoa{
  handlerList = []
  use(fn){
    this.handlerList.push(fn)
  }
  _excute(){
    if(this.handlerList.length === 0) return
    const firstHandler = this.handler.shift()
    firstHandler(ctx,()=>{
      return this._excute()
    })
  }
  listen(port,callback){
    createServer((req,res)=>{
      req.write()
      _excute()
      res.write()
    })
  }
}
const app = new MyKoa()
app.use((ctx,next)=>{
  // ...
  next()
  // ...
})
app.listen(8001,()=>{

})
```

### libuv

非阻塞 IO 和事件循环得益于 libuv

### 开启 Node 进程

- fork

```JavaScript
// index.js
const http = require("http")
const fork = require("child_process").fork
const server = http.createServer((req,res) =>{
  if(req.url === "/get-sum"){
    const childProcess = fork("./childProcess.js")
    childProcess.on("message",data=>{
      res.send(data)
    })
  }
})
server.listen(3000,()=>{
  console.info("localhost:3000")
})
// childProcess.js
function childFork(){
  let sum = 0
  for(let i = 0; i<10000;i++){
    sum += i
  }
}
 process.on("message",data=>{
    const sum = childFork()
    console.log("子进程id:",process.id)
    process.send(sum)
  })
```

- cluster

<img src="../../../images/A7Jjb4TFyoASS1xd6GNcGIVjnQb.png" alt="../../../images" style="max-width:50%;height:auto;display:block;margin:0 auto;" loading="lazy" /> <!-- 图片未成功捕获 -->

### JS-Bridge

JS 不能调用 native api，比如微信 api。使用 JS-Bridge 就可以调用了。

- URL scheme （补充异步方案）

- 注册全局 API （无法处理异步问题）

<img src="../../../images/UliabnlAHoYoklxcm9lcfzrQnZz.png" alt="../../../images" style="max-width:50%;height:auto;display:block;margin:0 auto;" loading="lazy" /> <!-- 图片未成功捕获 -->

### 非阻塞

Node 作为一种单运行进程环境，为什么却有高并发？

<img src="../../../images/BJp2buVMLoII10xcc2FcyDnynhP.png" alt="../../../images" style="max-width:50%;height:auto;display:block;margin:0 auto;" loading="lazy" /> <!-- 图片未成功捕获 -->

Node 单线程指的是只有一个线程处理 js 代码，但是会有其他线程处理 IO 操作

<img src="../../../images/JHmnbXGFfoC8cBxc2XFcqLJ4nnc.png" alt="../../../images" style="max-width:50%;height:auto;display:block;margin:0 auto;" loading="lazy" /> <!-- 图片未成功捕获 -->

如果写了死循环，调用栈无法清空

<img src="../../../images/H23ZbA9M6oippkxCK1Qcn6Tbncf.png" alt="../../../images" style="max-width:50%;height:auto;display:block;margin:0 auto;" loading="lazy" /> <!-- 图片未成功捕获 -->

高并发的秘诀就是，凭借异步模块 ⚠️ 和事件循环达到高并发，将耗时操作清除出调用栈，异步模块是多线程，事件循环发现耗时操作执行完成后，会把对应的回调函数放回调用栈

### 浏览器事件循环

由于 JS 代码是单线程，所以引入了事件循环方案解决出现的代码堵塞问题

JS 代码执行过程：同步执行完 => 进入事件循环 => 执行异步任务

异步任务又分为宏微任务和微任务，同步代码 => 微任务 => 宏任务 => 微任务 => 宏任务...

宏任务：请求接口、定时器、事件、setState...

微任务：Promise.then()

### NodeJs 事件循环

本质上还是各种类型的任务有自己的优先级

优先级：nextTick > 微任务 > Timer(setTimeout) > Poll(Http) > Check

<img src="../../../images/LlN7bBmQKowwPdxFZCBcpYCinIb.png" alt="../../../images" style="max-width:50%;height:auto;display:block;margin:0 auto;" loading="lazy" /> <!-- 图片未成功捕获 -->

Nodejs 事件循环，初始的时候会在 timer 队列，但是 3 个队列都为空的时候，会优先处于 Poll 队列执行 ⌛️

<img src="../../../images/C2SXbcCRro6N4px5tT5cCkk6nNd.png" alt="../../../images" style="max-width:50%;height:auto;display:block;margin:0 auto;" loading="lazy" /> <!-- 图片未成功捕获 -->

### 微任务队列所处的时机

<img src="../../../images/BRZCbO15MoS8sgxwYkEc9Wetnhh.png" alt="../../../images" style="max-width:50%;height:auto;display:block;margin:0 auto;" loading="lazy" /> <!-- 图片未成功捕获 -->

各种类型的函数都被分配在自己队列里

### CommonJS 和 ESmodule

- CJS 是值传递；ESM 是引用传递

- CJS 运行时加载；ESM 预编译

<img src="../../../images/RKIbbIhtOoGJ5NxelBhc0JDCn5f.png" alt="../../../images" style="max-width:50%;height:auto;display:block;margin:0 auto;" loading="lazy" /> <!-- 图片未成功捕获 -->

CommonJS 运行时加载

<img src="../../../images/PdMpbiN0SoGd6nx0DN4cSin2nih.png" alt="../../../images" style="max-width:50%;height:auto;display:block;margin:0 auto;" loading="lazy" /> <!-- 图片未成功捕获 -->

### stream 流模式

这是一个底层模块，平时几乎不会单独使用这个模块，但是也需要了解一下

- 缓冲模式

与流模式对应的就是缓冲模式，也叫传统模式

数据从磁盘全部加载到内存后，CPU 进行全部数据的处理

- 流模式

流模式则是数据从磁盘部分加载到内存中，CPU 就会进行处理，加载一点处理一点，将资源切分成小块。优点：占用的内存更小；调用端可以更快得到响应 总的来说就是高效

- 可读流

- 可写流

- 双工流

<img src="../../../images/Ug8kbdBGqoUHjZxM8ohcXvJgnMc.png" alt="../../../images" style="max-width:50%;height:auto;display:block;margin:0 auto;" loading="lazy" /> <!-- 图片未成功捕获 -->

流之间的交互上，引用了 pipe 管道的概念

一般情况下，流对象只处理字符串和 buffer，并不是直接处理 js 对象。流更常见于处理原始数据，比如字符串或者二进制，如果遇到处理 js 对象的场景，通常需要把 js 对象序列化和反序列化处理

```JavaScript
// 需求：存储来自前端的一张图片到本地
const http = require("http")
const fs = require("fs")
// req 本质就是readable
const server = http.createServer((req,res) => {
    // 创建可写流
    const w = fs.createWriteStream("./x.jpg")
    req.on("data", (chunk) => {
        w.write(chunk)
    })
    req.on("end", () => {
        w.end()
        res.end("图片保存完成")
    })
    req.on("error", (err) => {
        console.log(err)
        res.end("图片保存失败")
    })
    // req.pipe(w)
    // req.end("图片保存成功")
    // pipeline是pipe的进阶版，当管道以及异常比较多的时候，非常方便高效
})
server.listen(3000)
```

### pipe 管道

连接可读流到可写流，数据自动流入，不用重写\_read 和\_write 方法\

### 转换流

<img src="../../../images/KCuTb92edoHolIxCXaccJfzInOQ.png" alt="../../../images" style="max-width:50%;height:auto;display:block;margin:0 auto;" loading="lazy" /> <!-- 图片未成功捕获 -->

### Nestjs 生命周期

<img src="../../../images/Wq67bDTyOohbxPxRuenche0Cnwc.png" alt="../../../images" style="max-width:50%;height:auto;display:block;margin:0 auto;" loading="lazy" /> <!-- 图片未成功捕获 -->

<img src="../../../images/L43VbaYxVoEWVtx1T2wcDwt1n0b.png" alt="../../../images" style="max-width:50%;height:auto;display:block;margin:0 auto;" loading="lazy" /> <!-- 图片未成功捕获 -->

### DTO&DAO

<img src="../../../images/UcQfbNz6koj5dOxvoZ7cj8zKnPX.png" alt="../../../images" style="max-width:50%;height:auto;display:block;margin:0 auto;" loading="lazy" /> <!-- 图片未成功捕获 -->

### 多环境配置

- dotenv

解析.env 文件里的属性&&所有属性挂载到 process.env 下

- config

### 数据校验

Nodejs 常使用数据校验库 Joi

```JavaScript
Joi.string().valid([3306,3307])
Joi.string().domain()
Joi.string().url()
```

### ORM&TypeORM

作用：使用 JS 代替 SQL 语句

### 实例化和依赖注入

- 整个应用程序运行期间都可以使用，选择 new 实例化；确保资源合理使用，更好管理创建和销毁，选择依赖注入，比如数据库连接对象就可以自动创建、销毁

- 依赖注入需要对象解析依赖和实例化，性能开销大；实例化性能开销小

### 切面编程&依赖注入

<img src="../../../images/QtvLbYwbWoU4GaxaNMWcF5MHn6g.png" alt="../../../images" style="max-width:50%;height:auto;display:block;margin:0 auto;" loading="lazy" /> <!-- 图片未成功捕获 -->

<img src="../../../images/XO77b89JUo6WGZxQ7HgclbuDnVb.png" alt="../../../images" style="max-width:50%;height:auto;display:block;margin:0 auto;" loading="lazy" /> <!-- 图片未成功捕获 -->

### 日志模块

pino

winston

<img src="../../../images/nest_log.png" alt="../../../images" style="max-width:50%;height:auto;display:block;margin:0 auto;" loading="lazy" /> <!-- 图片未成功捕获 -->

### 服务监控

CPU：

- CPU load： 采样时间内，正在处理&等待处理的进程数之和

- CPU Usage： 采样时间内，CPU 利用率

CPU Load 低，CPU Usage 高：如果 CPU 执行的任务数很少，则 CPU Load 会低，这些任务都是 CPU 密集型，那么利用率就会高。

CPU Load 高，CPU Usage 低：如果 CPU 执行的任务数很多，则 CPU Load 会高，但是在任务执行过程中 CPU 经常空闲（比如等待 IO），那么利用率就会低。

<img src="../../../images/CPU.png" alt="../../../images" style="max-width:50%;height:auto;display:block;margin:0 auto;" loading="lazy" /> <!-- 图片未成功捕获 -->

内存：

- RSS： 系统分配多少内存给当前进程 包括所有堆栈内存

- V8 Heap：JS 代码执行占用内存

  - Heap Total：系统分配的堆内存总量
  - Heap Used：实际使用的堆内存
  - 当 Heap Used 接近 Heap Total 会触发垃圾回收机制

- External：Buffer 占用的内存，Buffer 是大量二进制数据

<img src="../../../images/Memory.png" alt="../../../images" style="max-width:50%;height:auto;display:block;margin:0 auto;" loading="lazy" /> <!-- 图片未成功捕获 -->

Libuv：可以反映出 Node.js 的稳定性

- Libuv handler：IO 对象（tcp, udp, fs, timer 等对象）的数量；libuv handles 较高通常意味着当前请求量较大或者有 tcp 连接等未被正确释放

<img src="../../../images/UV.png" alt="../../../images" style="max-width:50%;height:auto;display:block;margin:0 auto;" loading="lazy" /> <!-- 图片未成功捕获 -->

- Libuv Latency 通过计算 setTimeout 出现的延迟

<img src="../../../images/UV_Latency.png" alt="../../../images" style="max-width:50%;height:auto;display:block;margin:0 auto;" loading="lazy" /> <!-- 图片未成功捕获 -->

setTimeout() 来设置 timer ，并记录回调函数被调用时所消耗的时间和预计消耗的时间之间的差值作为 latency

latency 数值较高通常意味着当前应用的 eventloop 过于繁忙

- 服务运行稳定性

服务运行时出现的异常、日志、延迟

- 状态码

- 错误日志

- PM2 日志

- QPS

### 监控 Node 内存泄漏

- 使用 process.MemoryUsage 进行初步检测

```JavaScript
setInterval(()=>{
  const memory = process.MemoryUsage()
    console.log(
RSS: ${memoryUsage.rss} bytes
);
    console.log(
Heap Total: ${memoryUsage.heapTotal} bytes
);
    console.log(
Heap Used: ${memoryUsage.heapUsed} bytes
);
    console.log(
External: ${memoryUsage.external} bytes
);
},5000)
```

如果发现 RSS 或 heapUsed 快速增长则可能存在内存泄漏

- 使用 heapDump 生成堆快照

通过对比不同时间点的堆内存快照 heapSnapShot

```JavaScript
npm install heapDump
const heapDump = require("heapDump")
// 在某个时间点生成堆快照
setTimeout(() => {
    heapdump.writeSnapshot('./heapdump-' + Date.now() + '.heapsnapshot');
}, 10000);
```

- Chrome Devtools 分析堆快照

1. 将生成的堆快照文件导入到 Chrome DevTools 的 Memory 面板中进行分析。具体步骤如下：
1. 打开 Chrome 浏览器，访问 chrome://inspect。
1. 点击 “Open dedicated DevTools for Node” 打开 Node.js 的调试面板。
1. 在 DevTools 中切换到 Memory 面板
1. 点击 “Load” 按钮，选择之前生成的堆快照文件进行加载。
1. 使用 DevTools 提供的分析工具，如 “Comparison” 模式，对比不同时间点的堆快照，找出哪些对象的数量在不断增加。

1. 也可以启动的时候使用--inspect 模式，然后结合 DevTools 查看内存情况

核心还是生成 heapSnapShot 然后在 Devtools 里查看

- 使用 cilnic 进行性能分析

```Bash
npm install clinic
clinic heapprofiler -- node your-app.js
```

会生成一份堆内存分析报告

### Node 内存大小

默认 Node 内存大小是 2GB，但是我们也可以手动设置 Node 大小 node --max-old-space-size=4096 ./test.js

### Node 应用注意 ⚠️

- 局部变量

程序执行结束且没有引用的时候就会消失，为了避免内存爆掉，尽量多使用局部变量

- 全局变量

一直会存活到程序执行结束

### 采集服务监控指标

开发 Agent 服务在目标服务器上运行，发送数据给监控系统，实现数据的采集。比如可以发送 stats 命令获取服务器的统计信息，然后可以挑选一些重要的监控指标发给监控系统

这个过程中，可以使用消息队列来削峰填谷

### PM2 进程管理工具

- 可以后台运行 Node 应用

- 自动重启 Node 应用

### Node 工程化工具 项目脚手架

Node 可以在 立项-开发调试-测试-构建-部署 等环节都可以参与

```JSON
{
  "name": "test-project",
  "version": "1.0.0",
  "description": "A Vue.js project",
  "main": "src/main.js",
  "private": true,
  "type":"module",  node支持esm
  "bin":"index.js",
  "scripts": {
    "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
  "dependencies": {
    "vue": "^2.5.2"
  },
  "devDependencies": {
    "autoprefixer": "^7.1.2",
    "babel-core": "^6.22.1",
    "babel-eslint": "^8.2.1",
    "babel-helper-vue-jsx-merge-props": "^2.0.3",
    "babel-jest": "^21.0.2",
  },
  "engines": {
    "node": ">= 6.0.0",
    "npm": ">= 3.0.0"
  },
  "browserslist": ["> 1%", "last 2 versions", "not ie <= 8"]
}
```

```JavaScript
#!/usr/bin/env node // 需要告诉环境
const require = require("commander") // webpack -v
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const download = require('download-git-repo'); // 从git下载文件夹到本地
const chalk = require("chalk") // 上色
const ora = require("ora") // 下载转圈
const progress = require("progress") // 下载进度条
const command = require("command") // process.argv[]
import { Command } from "commander"
const program = new Command();
program.option("-a [num]", "this is a", (num) => {
console.log("u use -a and input " + num);
})
program.version("1.0.0");
program.command("init <name>").action((name) => {
console.log(name);
})
program.parse(process.argv);
// 定义交互式问题
const questions = [
    {
        type: "checkbox",
        message: "选择功能",
        // 键名
        name: "projectFeature",
        choices: [
            "babel",
            "webpack",
            "router"
        ]
    },
    {
        type: "input",
        message: "请输入项目名称",
        name: "projectName"
    },
    {
        type: "list",
        message: "选择项目类型",
        name: "projectType",
        choices: [
            "react",
            "vue"
        ]
    },
    {
        type: "confirm",
        message: "是否生成",
        // 键名
        name: "render"
    }
];
inquirer.prompt(questions).then((res) => {
    let _target = 'facebook/react';
    let _outputDir = path.resolve(process.cwd(), res.projectName);
    if (res.projectType === "vue") {
        _target = 'vuejs/vue';
    }
    try {
        fs.mkdirSync(_outputDir);
        download("github:" + _target, _outputDir, {}, function (err) {
            if (err) {
                console.error("下载失败:", err);
            } else {
                console.log("下载成功");
            }
        });
    } catch (error) {
        console.error("创建目录时出错:", error);
    }
});
```

### Node 工程化工具 构建插件

```JavaScript
class myplugin {
    constructor(config) {
        this.config = config
    }
    apply(compiler) {
        //监听webpack的某个生命周期 emit打包完成 done打包结束 20duo
        compiler.hooks.emit.tap("myplugin", (compilation) => {
            console.log(compilation.assets['app2.421c.bundle.js'].source())
        })
        compiler.hooks.done.tap("myplugin", () => { // 已经生成了dist文件夹
        })
    }
}
module.exports = myplugin
//js加入一些的东西
//js-》插入一些东西
```

### Node 工程化 小工具开发

略
