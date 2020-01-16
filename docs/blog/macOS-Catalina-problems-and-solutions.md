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

## Flutter

![idevicew_id](https://user-images.githubusercontent.com/7895581/66450545-9159a300-ea1e-11e9-8976-acbc5524ffb7.png)
When you're developing on Catalina, you can fix it by

    ``` bash
    // idevice_id
    sudo xattr -d com.apple.quarantine /PATH_TO_YOUR_FLUTTER_HOME/bin/cache/artifacts/libimobiledevice/idevice_id
    // ideviceinfo
    sudo xattr -d com.apple.quarantine /PATH_TO_YOUR_FLUTTER_HOME/bin/cache/artifacts/libimobiledevice/ideviceinfo
    // iproxy
    sudo xattr -d com.apple.quarantine /PATH_TO_YOUR_FLUTTER_HOME/bin/cache/artifacts/usbmuxd/iproxy
    ```

## Alfred 搜索时会出现两个应用程序

原因: 10.15 升级后, 会把原来的一些关键系统文件移动到单独的 Volumes.
解决办法: 在 Alfred 键入 reload.
