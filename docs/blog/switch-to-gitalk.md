---
title: 记录博客切换成gitalk的Error/no Issues问题
date: 2019-05-13 18:05:38
categories: IT技巧
type: post
blog: true
tags: 
    - gitalk
    - hexo-indigo-theme
    - hexo
---

常见问题不做累述，记录几个配置心得
<!-- more -->

## 太长不看版

> 我的主域名是`www.stanye.com`, 我的博客域名是`www.stanye.com/blog/`, 虽然是给博客申请gitalk, 但是OAuth申请的时候填的的都是`https://www.stanye.com/`(对应没域名的`stanye.github.io`)

## 前言

我的博客当前配置:

1. 使用[hexo](https://hexo.io/)搭建博客
2. 使用的主题是[hexo-theme-indigo](https://github.com/yscoder/hexo-theme-indigo)
3. 使用的`valine`评论, 想要切换到[gitalk](https://github.com/gitalk/gitalk)
4. 使用了`github pages` / 使用了自己的`域名` / blog仓库`不是`github pages`主仓库`

## 关于gitalk

Gitalk 是一个基于 Github Issue 和 Preact 开发的评论插件。使用 Github 帐号登录，界面干净整洁，最喜欢的一点是支持 MarkDown语法

主要特性：

- 使用 Github 登录
- 支持多语言 [en, zh-CN, zh-TW, es-ES, fr]
- 支持个人或组织
- 无干扰模式（设置 distractionFreeMode 为 true 开启）
- 快捷键提交评论 （cmd|ctrl + enter）
- 支持MarkDown语法

## 创建OAuth Application

用github账号创建了一个账号应用, 用户授权登录gitalk, [点击申请](https://github.com/settings/applications/new)

> 以我的域名`stanye.com`为例

![图片](https://i.loli.net/2019/05/13/5cd94943e02c979364.png)

> 我的主域名是`stanye.com`, 我的博客域名是`stanye.com/blog/`, 虽然是给博客申请gitalk, 但是这地方填写的都是`https://stanye.com/`

## 配置

因为indigo已经支持gitalk(不支持请更新到最新代码), 需要配置`_config.yml`

> 以我的github`github.com/stanye/blog`为例

    ```yml
      gitalk:
        // github用户名
        owner: stanye
        // 仓库名
        repo: blog
        // 上一步OAuth Application生成的
        client_id: b7ecea36c7957fdadfb6
        client_secret: 95dddf9298936c42c983f727c2f40c118d30a147
    ```