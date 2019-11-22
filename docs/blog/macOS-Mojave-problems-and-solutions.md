---
title: 升级macOS Mojave后问题汇总及解决办法
date: 2018-10-23 14:11:26
categories: IT技巧
type: post
blog: true
tags: 
    - Mojave
    - MacOS
---

## 搜狗
    问题描述：系统升级之后发现断断续续一直鼠标在转圈
    解决方案：搜狗升级到`4.8`之后解决问题
<!-- more -->
## zsh
    问题描述：升级后使用iTerm出现乱码，原生terminal没问题
    解决方案：iTerms2 -> Preferences -> Advanced -> 搜索LC_CTYPE -> value值设置`zh_CN.UTF-8`

## VSCode
    问题描述：字体变细
    解决方案：命令行输入`defaults write -g CGFontRenderingFontSmoothingDisabled -bool NO`

## Wechat和Tim
    问题描述：输入框焦点容易丢失，必须手动点击程序
    解决方案：升级最新版Wechat和Tim

## Git丢失
    问题描述：更新后git没了
    解决方案：命令行输入`xcode-select –install`

## Hexo
    问题描述：写这篇文字的时候，居然发现生成的页面英文的地方被转成日文
    解决方案：_config.yml文件language设置`zh-Hans`