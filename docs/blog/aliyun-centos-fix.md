---
title: aliyun-centos-fix
date: 2019-04-26 16:22:09
categories: BackEnd
type: post
blog: true
tags: 
    - centOS
    - aliyun

---

这几天体验了下安骑士, 发现裸奔有些警告, 做了一些修复.
<!-- more -->

## 禁止root直接登录

1. 创建一个账号www
2. 修改`/etc/ssh/sshd_config`, `PermitRootLogin`改成`no`

## 默认登录端口检测

修改`/etc/ssh/sshd_config`, 去掉`Port 22`注释#，并修改22为其它值

## 设置用户密码

1. 修改`/etc/security/pwquality.conf`
2. 去掉`minlen`注释，设置最小密码长度10
3. 去掉`dcredit`注释，设置数字位数为负数建议-1(最少包含1位数字)
4. 去掉`ucredit`注释，设置大写字母位数为负数-1(最少包含1位大写字母)
5. 去掉`lcredit`注释，设置小写字母位数为负数-1(最少包含1位小写字母)
6. 去掉`ocredit`注释，设置特殊字符位数为负数-1(最少包含1位特殊字符)

## 密码时间

1. 修改`/etc/login.defs`
2. 密码失效时间, 365天
3. 最小间隔时间, 7天