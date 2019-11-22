---
title: mysql-simple-usage
date: 2017-04-28 14:16:57
categories: BackEnd
tags:
  - mysql
---

## 连接mysql

  ```bath
     mysql -h{server host address} -u{username} －p{password}
  ```
<!-- more -->

## 修改密码

  ```bath
    mysqladmin -u{username} -p{oldpassword} password{newpassword}
  ```

## 增加新用户

  已经进入mysql
  ```mysql
    grant select on {dbname}.* to {username}@{host} identified by "{password}"
  ```
  但是为了防止host远程可以连接，一般只开放host配置到localhost，即先登录到服务器，再连接本机mysql

## 常用命令

  ```mysql
    // 显示数据库
    show databases;

    // 显示表
    use {某个database};
    show tables;

    // 显示某个表结构
    desc {表名};

    // 建库
    create database {dbname};

    // 建表
    create table {tablename} ({`id`....,`name`...});

    // 删库
    drop database {dbname};

    // 删表
    drop table {tablename};

    // 增删改查等不做赘述

    // 增加字段
    alter table dbname add column {字段名}

    // 修改字段
    alter table dbname change {字段名} {新字段名}

    // 删除字段
    alter table dbname drop column {字段名}

  ```

## 导出数据

  ```mysql
    mysqldump {dbname} > jiaoben.mysql
  ```