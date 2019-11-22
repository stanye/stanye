---
title: jQuery判断页面滚动到底/到顶
date: 2016-09-30 15:12:19
type: post
blog: true
tags: 
  - jquery
  - javascript
categories: FrontEnd
---

## 概念

```javascript
// 垂直滚动条
$(document).scrollTop()
// 水平滚动条
$(document).scrollLeft()
// 页面高度
$(document).height()
// 浏览器窗口高度
$(window).height()
```
<!-- more -->

## 实现

```javascript
// 到顶
$(document).scrollTop() == 0
// 到底
$(document).scrollTop() >= $(document).height() - $(window).height()
```