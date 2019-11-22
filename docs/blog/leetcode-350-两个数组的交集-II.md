---
layout: page
title: leetcode - 350. 两个数组的交集 II
date: 2018-06-06 11:41:43
categories: FrontEnd
type: post
blog: true
tags: 
    - leetcode
    - algorithm
---

给定两个数组，写一个方法来计算它们的交集。
<!-- more -->
例如:

    给定 nums1 = [1, 2, 2, 1], nums2 = [2, 2], 返回 [2, 2].

注意：

    - 输出结果中每个元素出现的次数，应与元素在两个数组中出现的次数一致。
    - 我们可以不考虑输出结果的顺序。

跟进:

    - 如果给定的数组已经排好序呢？你将如何优化你的算法？
    - 如果 nums1 的大小比 nums2 小很多，哪种方法更优？
    - 如果nums2的元素存储在磁盘上，内存是有限的，你不能一次加载所有的元素到内存中，你该怎么办？

我的答案：

``` javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    var arr = [];
    var List = [];
    for (var i = 0; i < nums1.length; i++) {
        List.push(nums1[i]);
    }

    for (var i = 0; i < nums2.length; i++) {
        var cNum = nums2[i];
        var cIndex = List.indexOf(cNum);
        if (cIndex != -1) {
            delete List[cIndex];
            arr.push(cNum);
        }
    }
    return arr;
};
```

给出的耗时最短解

``` javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const map={};
    const res=[];
    nums1.forEach(function (v) {
        map[v]?map[v]++:map[v]=1;
    });

    nums2.forEach(function (v) {
        if(map[v]){
            res.push(v);
            map[v]--;
        }
    });
    return res;
};
```