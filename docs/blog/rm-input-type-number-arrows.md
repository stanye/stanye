---
title: rm-input-type-number-arrows
date: 2017-06-05 15:18:18
type: post
blog: true
tags:
  - css
categories: FrontEnd
---

移除input type=number的箭头
<!-- more -->

## css

```css
// chrome
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
  margin: 0;
}

// firefox
input[type="number"] {
  -moz-appearance:textfield;
}
```

## 不用type=number

将`type="number"`改为`type="tel"`, 同样是数字键盘，但是没有箭头。