---
title: 升级macOS Catalina后问题汇总及解决办法
date: 2019-11-18 14:11:26
categories: IT技巧
type: post
blog: true
tags:
    - MacOS 
    - Catalina
---

## Xcode打不开
    问题描述：系统升级之后发现xcode打不开，提示`An unknown error occurred. See the install log for more details`
    解决方案：在Application里右键`Xcode`，在Contents/Resources/Packages里删除`MobileDevice.pkg`和`MobileDeviceDevelopment.pkg`
    原因：这两个包过期不守信
    邪道：将系统时间改为`2019年10月1日`也能解决问题
<!-- more -->