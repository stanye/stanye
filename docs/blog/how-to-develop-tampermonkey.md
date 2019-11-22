---
title: 如何开发油猴脚本来block掘金用户
date: 2019-05-14 23:32:51
categories: IT技巧
type: post
blog: true
tags:
  - tampermonkey
  - jQuery
  - juejin.im
---

> 随着掘金用户不断增加，或多或少遇到"钢筋"用户。秉着眼不见为净的原则，在官方没有出屏蔽功能的情况下，利用油猴实现block用户。

## 使用

1. 浏览器安装[Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)扩展
2. 访问脚本网站[greasyfork.org](https://greasyfork.org/zh-CN/scripts/383029-juejin-gangjin-block)安装本扩展
3. 点击页面上脚本扩展的`block`按钮
4. [https://github.com/stanye/UserScripts](https://github.com/stanye/UserScripts) 欢迎提issue和PR

<!-- more -->

## 实现方法

> 根据用户id用`jQuery`remove相关DOM
```js
$(`.username[href="/user/${id}"]`).parents('.item').remove();
```

### Tampermonkey中使用jQuery

```
// @require      https://code.jquery.com/jquery-3.3.1.min.js
```

### 只针对掘金站点

```
// @include      /^https?:\/\/(\w+\.)?juejin\.im\//
```

### 用户id

> 以我的为例 https://juejin.im/user/58f56b4b0ce463006bc084eb
`58f56b4b0ce463006bc084eb`就是id

### 存储和读取blockList


![](https://user-gold-cdn.xitu.io/2019/5/15/16ab9112c6ba6f23?w=1234&h=874&f=png&s=202863)
使用`localStorage`操作, 不做赘述

### 在页面中加按钮
![dropdown-menu](https://user-gold-cdn.xitu.io/2019/5/15/16ab751cc7adb0f6?w=428&h=228&f=png&s=20765)

![action-box](https://user-gold-cdn.xitu.io/2019/5/15/16ab90f9321dfd97?w=482&h=381&f=png&s=17999)

```js
const actionBox = $('.user-info-block .action-box');
if (actionBox.has('.big-block-btn').length === 0) {
    actionBox.append(`<button ${scope} class="follow-btn btn big-block-btn" style="color: red;">Block</button>`);
}
```

### scope样式问题

掘金用了vue的scope，用jQuery新增的内容想要套用原来的样式需要获取到scope生成的hash

![](https://user-gold-cdn.xitu.io/2019/5/15/16ab916e6a259310?w=358&h=150&f=png&s=25415)
```js
const scope = $('.user-info-block .action-box')[0].attributes.item(0).nodeName;
```

### 给按钮增加点击事件

```js
$('#juejin').on('click', '.block-btn', block);
```

### jQuery获取dom早于vue请求数据并渲染

```js
// 分页
$(window).on('scroll', () => {
    startClear();
});
// 第一次
setTimeout(startClear, 1000);
```
> 暂时没好想法,先`setTimeout`和`scroll`

## 发布

### 利用github的Webhooks同步发布到greasyfork

1. [初始化import脚本](https://greasyfork.org/en/import)

![初始化import脚本](https://user-gold-cdn.xitu.io/2019/5/15/16ab9188f8539c4a?w=1552&h=676&f=png&s=185967)
2. [开启webhook并应用](https://greasyfork.org/en/users/webhook-info)

![开启webhook并应用](https://user-gold-cdn.xitu.io/2019/5/15/16ab9197d3331b25?w=1888&h=730&f=png&s=150873)
> 按提示在github仓库的`settings` -> `webhooks`创建hook, 每次仓库更新就会同步更新到greasyfork

## 小结

> 本意只是脑子一闪而过的idea，并付诸实现。

> 良好的社区气氛还是需要大家共同努力的。

### TODO

1. 覆盖掘金全站的block脚本
2. 针对某条回复的block
3. blockList管理
4. 代码不够优雅，需要去掉硬编码