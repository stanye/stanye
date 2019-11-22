---
title: 何为低代码平台
date: 2019-10-09 20:42:55
categories: 产品设计
type: post
blog: true
tags: 
    - PM
---

what is low code platform ？
<!-- more -->

## 前言

  从去年年底开始，公司提出了一个构想，通过拖拽各种组件的方式，快速生成页面，满足普遍性的需求，同时缩短开发的人力成本。
  于是从年初开始，我一直在做一个内部的“低代码”的平台, 代号叫`“lego”`.

## 什么是“低代码”

  > 低代码开发平台，是指那些无需编码或通过少量代码就可以快速生成应用程序的工具，其一方面可以降低企业应用开发人力成本，另一方面可以将原有数月甚至数年的开发时间成倍缩短，从而帮助企业实现降本增效、灵活迭代的价值。
  本段出自[36kr](https://36kr.com/p/5237729)

  我的解释：有一群专业的人做了一个很`cooooool`的`《我的世界》`，让不会写代码的人也能做出别人羡慕的`《别人的世界》`

## Lego

### 前身

![培训宝-移动学习配置](https://i.loli.net/2019/10/24/EliFIgN8BQd5PXO.png)

我在的上家公司（没准马上是EXEX家），需要做一个给用户自定义移动端主页的功能。
一阵开发之后，前端用jQuery实现组件选择、配置，提交保存给后端。后端我用PHP分门别类，将每个数据，每个类型存在不同表里面。移动端用户进入页面，读取配置，用Vue按配置的顺序渲染页面。
至于配置的时候实时预览呢？iframe套移动端页面 + iframe.reload()

技术栈：jQuery + PHP + Mysql + Vue

### Demo

年初我在当前公司也提出了这个构想。老大说让试试看，但是仅限于前端部分，让我可以脱离后端来完成（可行性试验阶段，不需要完整开发）。

![页面配置](https://i.loli.net/2019/10/24/APtjsFJ2Brhln5K.png)
![页面预览](https://i.loli.net/2019/10/24/b5FKPlhGRd67SX1.png)
算是实现了一个页面配置，一个页面展示。那时候公司业务正如火如荼，这个demo让大家萌生了很多概念，觉得非常cooooool~~

技术栈：React + AntD + localStorage + ~~koa~~（后废弃，发现完整实现前后端有点费工时）

### Lego

#### JSON配置文件

首先我们定义了JSON配置文件，类似json schema，老大称之为Lego DSL（Lego领域特定语言）。

* 一切配置的最终目标是生成这份JSON.
* 一切渲染是以这份JSON为基础.
* 一切组件和行为库要满足JSON的数据格式与规范.
> 这是lego的血

#### 核心渲染引擎Lego/core

`@lego/core`就是一个引擎库, 外部import lego/core以后，通过react-router的render，加上传入配置，最终渲染出页面。

  ```js
  ...
  import {Lego} from '@lego/core';
  ...
  <Route path="/page" render={() => <Lego legoNamespace="components" legoId="components" />} />
  ```
> 这是lego的心

#### 组件库Lego/component

通过对`Ant Design`二次封装，配置出了满足lego/core要求的组件库。
> 可以显示隐藏、可以监听数据变化
> 这是lego的身体

#### 组件库Lego/behavior

有了样子（component）还不够，还要有行为。这个页面进来要干什么，这个组件要干什么，某个值发生变化的时候怎么影响另一个值？
> 这是lego的魂

有了以上几个部件，到五月份的时候，通过手写一段合乎我们规范的JSON文件，已经可以生成一个页面。
我们内部做了分享，定下来接下来的GUI计划。

技术栈：Dva、Lodash、Ant Design

### Lego-Canvas

Lego的配置平台

#### Canvas

画布，也就是所谓的实时预览。最开始的iframe + iframe.reload, 后来通过dva（redux状态管理）做到了动态无缝加载（类似Hmr）。

#### ComponentTree

组件树。展示了当前页面所有组件的嵌套。基于Ant Design Tree组件。

#### ComponentConfig

组件配置。前期整理的Component库，每个配置项都通过Ant Design Form实现表单配置。
行为配置？由RYZ同学通过D3,把一个个非常复杂的逻辑用圈和线连接的方式，给画了出来，有点像流程图的感觉。

![Lego-canvas](https://i.loli.net/2019/10/24/k1qhRHu2KFMZ3AS.png)

我们也实现了`组件之间的复杂联动`, `禁用启用`, `自定义组件`

## 总结

做这个项目耗费了差不多三个季度，然尔期间公司业务转GIS、Bim、G3d，我做这个项目最需要的场景，已经不复存在了。

### 我脑补中的“竞品”

+ [云凤蝶](https://www.yunfengdie.com/)
+ [飞冰](https://ice.work/)
+ [Lugia](http://lugia.tech/#/)
+ [UForm](https://uformjs.org)
+ [Gen](https://github.com/daycool/gen)
+ [pipeline](https://github.com/page-pipepline/pipeline-editor)

### 部分参考资料

+ https://github.com/CntChen/cntchen.github.io/issues/15
+ https://yq.aliyun.com/articles/112472?utm_content=m_24509
+ https://juejin.im/pin/5d4966b751882564daa2f60d

### To be continued