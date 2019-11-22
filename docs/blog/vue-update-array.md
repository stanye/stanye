---
layout: page
title: Vue更新数组状态方法
date: 2017-05-16 14:58:53
categories: FrontEnd
type: post
blog: true
tags: 
    - vue
    - array
---

直接修改数组检测不到变化：
<!-- more -->
```js
vm.Arr[index] = newItem;
vm.Arr.length = newLength;
```

由于JavaScript的限制，采用以下方法:

```js
// way 1
Vue.set(old.Arr, index, newItem);
// way 2
old.Arr.splice(index, 1, newItem);
```
