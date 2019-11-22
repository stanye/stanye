---

title: css两行截取
date: 2017-04-03 16:30:22
categories: FrontEnd
type: post
blog: true
tags: 
    - css
---

css两行截取解决办法：
<!-- more -->

```css
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
```