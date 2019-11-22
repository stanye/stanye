---
title: 同步git本地分支和远程分支
date: 2019-07-29 10:28:32
categories: IT技巧
type: post
blog: true
tags: 
  - git
  - git branch
---

git branch的时候看到一大堆分支，感觉想全部干掉.
<!-- more -->

## 查看分支
  
  ```git
  // all
  git branch -a
  // local
  git branch
  // remote
  git branch -r
  ```

## 查看本地分支和追踪情况

  ```git
  git remote show origin
  ```

  出现`stale (use 'git remote prune' to remove)`

## 删除远程上的

  ```git
  git remote prune origin
  ```

## 删除本地的

  ```git
  // 正常操作 强制删除用-D
  git branch -d lalala
  ```