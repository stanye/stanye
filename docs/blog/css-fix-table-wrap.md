---
layout: page
title: table文字溢出控制
date: 2017-04-03 12:30:22
categories: FrontEnd
type: post
blog: true
tags: 
    - css
    - table
---

table换行解决办法：
<!-- more -->

```css
table {
    width:100px;
    table-layout:fixed;
}
td {
    width:100%;
    word-break:keep-all;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
}
```