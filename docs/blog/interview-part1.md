---
title: 面试知识点整理
date: 2019-06-18 13:03:25
tags:
  - interview
  - javascript
categories: 
  - FrontEnd
---

## CSS

### BFC是啥

BFC是block format context, 块级格式化上下文

作用: 为了让内部元素和外部隔离

触发条件(什么情况下创建BFC):
1. 根元素 `<html>`
2. 浮动元素 `float`不是`none`
3. 绝对定位 `position`是`absolute` OR `fixed`
4. `overflow`不是`visible`
5. 弹性布局`display: flex`
6. 网格布局`display: grid`
7. `display: flow-root`

应用: 
1. 阻止margin重叠
2. 清除浮动
3. 自适应两栏布局

### 浮动原理及清除浮动

原理: `float`将元素从文档流中脱离（`position:absolute`也是脱离文档流）

清除:
1. 
```html

<div style="clear: both"></div>
```

```css
.parent:after {
  clear: both;
  content: ' '
}
```

### 垂直居中布局

1.

```css
.box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

2.


```css
.box {
  position: absolute;
  top: 50%;
  width: 100px;
  left: 50%;
  margin-left: -50px;
}
```

3.

```css
.box {
  display: flex;
  align-items: center;
  justify-content: center;
}
```

4.

```css
.box {
  position: absolute;
  width: 100px;
  height: 50px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
```

### 修改元素定宽

1. `max-width: 300px`
2. `width: 300px !important`
3. `scale()`缩放

### 懒加载Lazyload

getBoundingClientRect()

### opacity: 0 | visibility: hidden | display: none 区别

opacity: 0 透明度0, 影响下级, 可以点击, 占空间
visibility: hidden 隐藏，不影响下级(下级设置可见), 占空间, 本元素重绘
display: none 不显示, 影响下级, 渲染不占空间, 不可点击, 造成文档回流

### 回流和重绘

### 多行省略

1.
单行
```css
.box {
  overflow: hidden;
  text-overflow: ellipsis;
  /* 单行 */
  white-space: nowrap;
  /* 多行 */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
```

2. string截取
str.slice()
str.substring()

### 盒模型

box-sizing: border-box(IE盒模型) | content-box(标准盒模型)

## Vue

### MVVM

### vue-transition

## React

### 虚拟DOM(virtual Dom)

虚拟DOM是真实DOM的内存表示，UI的表示形式存在内存里，与实际DOM同步。

### class组件和function组件区别

class组件：
  使用必须在声明后
  无状态组件和状态组件
  有`this`内部属性
  内部为严格模式
  内部属性不可枚举
function组件：
  无`state`,
  无生命周期, 
  没有`this`

### React Hook

### `<Link>`和`<a>`的区别

`<Link>`
利用diff算法，局部更新，减少了DOM的性能消耗，静态跳转
`<a>`
重新渲染，
`router`
动态跳转

### 合成事件和原生事件的区别

合成事件是最终绑定在document上，简化了DOM操作和内存开销
有自己的SyntheticEvent
冒泡阶段中的事件触发，中断的话只能用preventDefault
stopPropagation 不能中断

### 异常捕获

1. react ComponentDidCatch
2. window.onerror
3. try catch

## JavaScript

### [1, 2, 3].map(parseInt) || [1, 2, 3].filter(parseInt)

```js
[1, 2, 3].map(parseInt);
parseInt(1, 0) // 1
parseInt(2, 1) // NaN
parseInt(3, 2) // NaN

// [1, NaN, NaN]
```

```js
[1, 2, 3].filter(parseInt);
parseInt(1, 0) // 1
parseInt(2, 1) // NaN ==> false
parseInt(3, 2) // NaN ==> false

// [1]
```

### 防抖和节流

#### 防抖

```js
function debounce(fn, delay) {
  let timer = null;

  return function(...args) {
    var context = this;
    if (timer) clearTimeout(timer);

    setTimeout(function() {
      fn.apply(context, args);
    }, delay)
  }
}

```

#### 节流
```js
function throttle(fn, delay) {
  let timer = null;

  return function(..args) {
    let context = this;

    if (!timer) {
      timer = setTimeout(function() {
        fn.apply(context, args);
        timer = null;
      }, delay);
    }
  }
}
```

### Set | Map | WeakSet | WeakMap

Set 集合 值唯一
```js
Set.length === 0 
Set.prototype.add
Set.prototype.clear
Set.prototype.delete
Set.prototype.entries
Set.prototype.forEach
Set.prototype.has
Set.prototype.value
```

WeakSet 只能放对象引用，不能放值, 不可枚举，弱引用
```js
WeakSet.prototype.add
WeakSet.prototype.clear
WeakSet.prototype.delete
WeakSet.prototype.has
```

Map 字典, 初始化可以放二元数组, 键名可以任意值（Object只能放`string`和`Symbol`）
```js
Map.prototype.size
Map.prototype.clear
Map.prototype.delete
Map.prototype.entries
Map.prototype.forEach
Map.prototype.get
Map.prototype.set
```

WeakMap 键名必须是对象，弱引用，不可枚举，故时间复杂度低
```js
WeakMap.prototype.has
WeakMap.prototype.get
WeakMap.prototype.set
WeakMap.prototype.delete
```

### 数组去重

const arr = [1, 2, 1, 4, 3];

1. 
```js
const newArr = Array.from(new Set(arr))
```

2.
```js
const newArr = [...new Set(arr)]
```

3.
```js
let newArr = [];
let map = new Map();
for (let i = 0; i < arr.length; i++) {
  if (map.has(arr[i])) {
    map.set(arr[i], true);
  }
  else {
    map.set(arr[i], false);
    newArr.push(arr[i]);
  }
}
```

4.
```js
const newArr = [];
for (let i = 0; i < arr.length; i++) {
  !newArr.includes(arr[i]) && newArr.push(arr[i])
}
```

### for...of || for...in

### 隐式转换

坑好大，待完善

ToPrivar

### 严格模式

### 原型prototype

### 柯里化

柯里化：暂存，等到参数长度为0的时候执行

### 判断类型的几个方法

```js
var a;
// typeof

typeof null // "object"
typeof []   // "object"

// instanceof 判断构造函数的原型是否在对象的原型链上
var a = [];
a instanceof Array // true
// Object.prototype.toSting法对于自定义的构造函数仍然无效
Object.prototype.toSting.call
Reflect.apply(Object.prototype.toSting, null , []);

Array.isArray()
nodeType === 1 元素
```

### 数据类型

原始类型
`Number` `String` `Null` `Undefined` `Boolean` `Symbol` `BigInt`
Number 最大2^53
BigInt 大于2^53  111111111n 后缀`n`表示bigint
引用类型
`object`

#### null和undefined区别

null 描述空值，对象的值未设定, 空指针， typeof null === 'object'
undefined 预定义的全局变量，表示未定义, typeof undefined === 'undefined'

### 模块化

+ IIFE(立即执行函数)

  ```js
    (function() {

    })()
  ```

+ AMD

  ```js
  define('./index.js', function() {

  })
  ```

+ CMD
+ CommonJS
+ ES6 Modules

### 如何编写可复用组件

#### 组件构成

props
events
slots

#### 组件间通信

#### 无关业务

命名不能包含业务，最好有自己独立的命名空间
只负责UI和交互，内部只处理数据，不获取数据
不要从内部操作$parent
尽量减少对外部的依赖（不要过分拆分一个功能）
数据扁平化，不要依赖一个对象什么的
不要太复杂，越简单越容易复用

### 正则表达式

#### 表达式

`\` 转义
`^` 起始 当在[]集合中出现表示非
`$` 结尾
`*` 匹配前一个表达式0次或多次 `{0, }`
`+` 匹配前一个表达式1次或多次 `{1, }`
`?` 匹配前一个表达式0次或1次 `{0, 1}`
`.` 匹配除换行符之外的任何单个字符
`(x)` 捕获括号
`(?:x)` 非捕获括号
`x|y` 匹配x或y
先行断言 `x(?=y)`
后行断言 `(?<=y)x`
`{n}` 匹配前面字符出现n次
`[xyz]` 字符集
`[^xyz]` 反向字符集
`\b` 匹配一个词的边界
`\d` 匹配一个数字 `[0-9]`
`\D` 匹配一个非数字 `[^0-9]`
`\s` 匹配一个空白
`\S` 匹配一个非空白
`\w` 匹配一个单字字符（字母、数字或者下划线）`[A-Za-z0-9_]`
`\W` 匹配一个非单字字符`[^A-Za-z0-9_]`
`\n` 返回捕获的第n个

#### 方法

`exec` `match` `test` `matchAll` `replace` `split`

#### 标志

`g` 全局
`i` 不区分大小写
`s` 多行

### 浮点数运算

0.1 + 0.2 === 0.3 // false

0.1 + 0.2 // 0.30000000000000004

相加会先转二进制，浮点数转二进制无穷。由于64位双精度浮点数的小数部分最多支持53位二进制位

```js
var a = 0.1, b = 0.2;
var res = (a * 10 + b * 10) / 10;
```

toFixed()

### cookie | localStorage | sessionStorage

cookie 4kb 
安全性：Cookie被截获（抓包）、泄露（解析后）、XSS（利用script获取cookie）、csrf(跨站访问)
1. HTTPS
2. JWT（signature）
3. 过滤脚本

### inline-block间隙

原理：inline-block是把元素放一行，但是由于有换行符，导致中间有空隙
1. font-size：0
2. 两个子元素一行
3. float，要清除浮动

### new到底是什么

new是一个运算符，调用构造函数Function来创建函数，创建对象实例

### Cat 继承 Animal
```js
function Cat() {

}
function Animal() {
  
}

// 1 改写Cat为class

// 2 构造函数绑定
function Cat() {
  let args = Array.prototype.slice.call(arguments);
  Animal.apply(this, args);
}

// 3
Cat.prototype = Animal.prototype;
Cat.prototype.constructor = Cat;
```

### this指向

1. 默认调用（插件当前调用环境）
2. 隐式调用（谁调用指向谁）
3. 显示绑定 call apply bind
4. new绑定 this指向new出来的对象
5. 箭头函数的this（查找函数所处的作用域）

### 优化

1. 合并循环中的DOM操作
2. 合并样式操作
3. 先脱离文档流，操作完成再放回去
4. 事件委托，每个元素的事件绑定放到父节点上
5. 减少资源大小html、css、js、图片压缩
6. 减少请求次数（1.图片合并 2.公共库合并 3. 不同页面单独合并）
7. 合理使用缓存（CDN、http缓存）
8. 模块按需加载
9. 资源懒加载
10. 资源预加载
11. CommonsChunkPlugin webpack4移除。splitChunks
12. 动态导入 import
13. tree shaking 也就是uglifyjs
14. 多域名增加请求次数
15. js放在底部
16. 减少回流（重排）和重绘
17. defer async

### Promise

#### async/await

```js
async function () {
  await fn();
}

// [return value] = await expression;

// expression: 一个promise对象或者任意返回值
// return value 返回处理结果，如果不是Promise对象，返回该值本身
```

`await` 表达式会暂停当前 async function 的执行，等待 Promise 处理完成。
`await` 是一个让出线程的标志, 后面的函数会先执行一次;
看后面函数的返回值，如果返回不是promise，则继续执行async函数后面的代码，哪怕外面已经有任务队列在排队;
否则将返回的promise，放入microtask队列, 然后等待promise任务队列执行完之后，再执行await后面的代码

### XMLHttpRequest

```js
var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://developer.mozilla.org/', true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onreadyStateChange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
     console.log(xhr.responseText);
  }
}
xhr.send();
```

### 跨域

浏览器同源（protocol、host、port）

#### jsonp

请求中定义一段callback函数，将函数名传递过去，后端返回json数据，用函数包裹

安全问题

## Webpack

### entry

单页面入口
多页面入口

### output

输出
也可以分多个

### Loader

处理源文件
不同格式转换成识别的css和js

`babel-loader`
`css-loader` 处理css文件中的url()
`style-loader` 将.css代码插入html里`<style>`
`stylus-loader`
`less-loader` 处理less文件
`postCss` 预处理css文件

### Plugins

#### HTMLWebpackPlugin

根据html模板生成目标文件

#### HMR

开发环境动态更新

#### 压缩，优化，缓存，分离css和js

ExtractTextWebpackPlugin 提取文件s

### babel

#### @babel/preset-env

预设设置环境，加载core-js

#### babel-runtime 和 babel-polyfill

7.4以前 polyfill就是runtime + corejs
7.4以后 core-js代替了polyfill

babel/runtime 
1. 生成不污染全局和内置对象原型的代码
2. 帮助函数移出冗余函数

### 取消异步请求

1. XHR xhr.abort()
2. jQuery.ajax ajax.abort()
3. axios axios.cancelToken.source()
4. fetch AbortController

## 设计模式

### 发布-订阅模式（Sub-Pub）

1. 创建一个对象，作缓存列表
2. on方法订阅，将callback函数加入列表
3. emit方法发布，根据arguments里第一个参数当做key，根据key值去执行缓存列表函数
4. remove根据key值取消订阅

> node里的EventEmitter就是一个典型的观察-订阅模式

### 观察者模式（Observer)

当对象存在1对多关系时，使用观察者模式

观察者模式有两个角色，一个是`Subject`, 一个是`Observer` 

#### 现代浏览器自带的观察者

1. `IntersectionObserver` 交叉观察者
   1. 观察一个元素在视窗是否可见
   2. 懒加载(getBoundingClientRect() 返回元素的大小及其相对于可视窗口的位置,Scroll 和 Resize 事件, `getBoundingClientRect`会引起页面回流)
   3. 视频在可见区域自动播放
   4. `observe` `disconnect`
2. `MutationObserver` 变动观察者
   1. 异步触发
3. `ResizeObserver` 视图观察者
4. `PerformanceObserver` 性能观察者

### 内存

js的内存空间分为栈`stack`, 堆`heap`, `池`。

V8引擎的内存上限：64位系统是1.4G, 32位系统是 700M

#### 栈

存放基本数据类型，自动分配内存空间
```js
var a = 10; // 栈
```

#### 堆

存放引用类型
```js
var b = {m: 10} // {m: 10}放在堆里 b放在内存
```

#### 池

放常量，与栈类似

#### 生命周期

1. 内存分配阶段，声明的时候自动分配
2. 内存使用阶段，读写
3. 内存回收，不用了就由辣鸡回收机制回收

#### 辣鸡回收机制

gc回收机制 garbage collection

1. 引用计数
   1. 计数器为0就被回收
   2. 计数器占空间
   3. 循环引用无法回收
2. 标记清除（无法到达的回收掉）

局部作用域在函数执行完成就被回收

### 作用域

#### const常量为什么能用object的操作

const定义的引用类型时，变量保存的是对象的指针，指针不变就可以修改对象