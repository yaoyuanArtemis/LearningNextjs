# 浏览器 & V8

最后修改时间: 2025-05-08

### V8 内存

<img src="../../../images/KKeMbgQ3ZoX56lxSTlfcnmaunf1.png" alt="image" style="max-width:80%;height:auto;display:block;margin:0 auto;" loading="lazy" /> <!-- 图片未成功捕获 -->

- code space：储存及时编译后的代码

- new space：64MB 垃圾回收重点

- old space：1400MB 垃圾回收重点

- node 整个内存：1.4GB/2GB

所有的解释器（V8）都包含一个调用栈和一个堆

### 内存泄漏

<img src="../../../images/UbCTba2Ohox5OSxRv53crlgZn0e.png" alt="image" style="max-width:80%;height:auto;display:block;margin:0 auto;" loading="lazy" /> <!-- 图片未成功捕获 -->

有些内存无法被垃圾回收器回收掉，这部分内存就叫做内存泄漏

### 垃圾回收器机制

- 标记清除（目前主流）具体概念可以 MDN

- 引用计数

让浏览器知道哪些内存无法触达，垃圾回收器就会自动触发执行给回收掉；若有些内存能触达，但是实际上不会再用了，就需要手动处理，让这些内存无法触达

```JavaScript
let obj = {
  users : "lf"
}
obj = null
```

### 浏览器架构

<img src="../../../images/SszsbMqY7oK7WPxgYGfcf8fDnfh.png" alt="image" style="max-width:80%;height:auto;display:block;margin:0 auto;" loading="lazy" /> <!-- 图片未成功捕获 -->

### 浏览器进程

JS 是单线程，浏览器是多进程和多线程，这二者并不冲突

- 浏览器进程

  - 地址栏、书签、前进、后退、网络请求和文件访问
  - UI 线程
  - 标签页的创建和销毁
  - 网络线程
  - 存储线程

- 渲染进程(也叫浏览器内核)

  - GUI 渲染线程 渲染 HTML、重绘（颜色变化）、重排（HTML 布局变化）
  - js 引擎线程
    - 执行 JS
    - 与 GUI 渲染线程互斥
  - 定时器触发线程
  - 事件触发线程
  - 异步 http 请求线程
  - worker 线程
    - 也位于渲染进程内
    - 一些复杂计算可以交给 worker 线程，避免影响主线程渲染
    - 不能操作 DOM
    - 与 JS 线程通过 postMessage 通信
  - 合成器线程
  - 光栅线程

- 插件进程

- 工具进程

- GPU 进程

### 浏览器详解博客

深入了解现代网络浏览

### JS 引擎和 JS 运行时

<img src="../../../images/Uo9zblboIo6xGXxfVOVcAivKncf.png" alt="image" style="max-width:80%;height:auto;display:block;margin:0 auto;" loading="lazy" /> <!-- 图片未成功捕获 -->

js 引擎：编译、解析、优化、执行

<img src="../../../images/CdyjbxYkvoU0X6xNbQWcC9opnzg.png" alt="image" style="max-width:80%;height:auto;display:block;margin:0 auto;" loading="lazy" /> <!-- 图片未成功捕获 -->

### JS 引擎结构

所有的 JS 引擎包含一个调用栈和一个堆

- 调用栈 — 程序执行的内存

- 堆 — 存储对象的地方

### 堆与栈

AST 抽象语法树之后 hashMap 会缓存所有字符串

- 堆：其它类型、字符串、大整数、小数

- 栈：小的整数存在栈中

### V8 及时编译

<img src="../../../images/FMmNbNcNGoAcjZxCVzMcNs5ynEe.png" alt="image" style="max-width:80%;height:auto;display:block;margin:0 auto;" loading="lazy" /> <!-- 图片未成功捕获 -->

- 解析器 转换成 AST 语法树

- 解释器 AST 到字节码&执行

- 编译器 及时优化功能体现 — 优化 Hot Function 代码，缓存为机器码

### 运行时

运行时 = JS 引擎 + 事件处理 + 网络请求 + 回调队列 + 事件循环

<img src="../../../images/IaDqbO82DoWWBSxrLe7cgD4an26.png" alt="image" style="max-width:80%;height:auto;display:block;margin:0 auto;" loading="lazy" /> <!-- 图片未成功捕获 -->

### 企业级 js 运行时

阿里：aliNode 基于 nodejs，扩展了性能监控、安全提醒、故障排除、性能优化

### 企业级包管理器

tnpm 腾讯

### 渲染进程

渲染进程

- 主线程解析 HTML Html -> DOM

- 预加载扫描器并行请求 CSS 和图片

- JS 资源会阻止解析 Html，使用 async/defer 异步加载资源

- 主线程解析 CSS

- 得到渲染树（包括了 XY 坐标） 通过 DOM 和计算样式

  - display:none 不在布局树中
  - visibility：hidden 在布局树
  - 伪类在布局树

- 绘制 考虑 z-index

- 合成

### 渲染流程

1. 构建 DOM 树。html 内容转 DOM 树

1. 样式计算。css 内容转换为 styleSheets 对象，属性值标准化 rem 转 px，不显示的 DOM 节点去掉，设置为 display:none 的节点会存在 DOM 树里。将三种 CSS 文件样式属性值标准化。计算出每个元素的最终样式

1. 布局阶段。有了 DOM 树和 DOM 样式，计算出可见元素的几何位置。chrome 创建布局树和布局树节点的几何位置。一般默认流式布局方式，除了这种布局方式，还有定位布局和浮动布局

1. 分层。有些节点比较特殊，比如有立体效果。因此还需要一个图层树

1. 图层说明 https://pcaaron.github.io/pages/fe/chrome/drawing.html#%E5%88%86%E5%B1%82

1. 绘制。对每个图层得到绘制指令，最终产出一个绘制列表

1. 分块。图层分为很多图块。会优先生成视口附近的图块

1. 光栅化和合成。将图块 -> 位图。GPU 参与珊格化

<img src="../../../images/E6XSbAfDiooXK0xuihCcmbI6ntb.png" alt="image" style="max-width:80%;height:auto;display:block;margin:0 auto;" loading="lazy" /> <!-- 图片未成功捕获 -->

### 输入 Url 过程

1. 浏览器进程 组装协议；

1. 浏览器进程 将 url 协议 给网络进程；

1. 网络进程将在本地缓存检查是否缓存请求的资源，如有，则返回给浏览器进程；

1. 如没有，网络进程发送 Http 请求给 Web 服务器

- 进行 DNS 解析，获取服务器 IP 地址
- 利用 IP 地址和服务器建立 TCP 连接
- 构建请求头
- 发送请求头
- 服务器响应后，网络进程接收响应头和响应信息

1. 网络进程解析响应

- 检查状态码，如果是 301 或者 302，需要重定向，从 Location 读取地址，如果是 304 的话，从缓存中拿资源。重新进行第 3 步
- 如果是 200，检查 content-type，如果是字节流类型，则提交给下载进程；如果是 html，则通知浏览器进程，准备渲染

1. 渲染进程。浏览器进程检查当前 url 和之前已经打开的渲染进程 url 是否相同，如果相同则复用原来进程；不同，则开启新的渲染进程
