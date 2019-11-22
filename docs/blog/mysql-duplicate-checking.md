---
title: mysql查重
date: 2017-05-03 14:30:20
categories: BackEnd
type: post
blog: true
tags: 
    - mysql
---

mysql查重：
<!-- more -->
## 单字段
```sql
select * from member where mobile in (select mobile from member group by mobile  having count(mobile) > 1)
```
## 单字段查重删除
```sql
delete from member where mobile in (select mobile from member group by mobile   having count(mobile) > 1) and rowid not in (select min(rowid) from member group by mobile having count(mobile)>1)
```
## 多字段
```sql
select * from member a where (a.mobile,a.email) in (select mobile,email from member group by mobile,email having count(*) > 1)
```
## 多字段查重删除
```sql
delete from member a where (a.mobile,a.email) in (select mobile,email from member group by mobile,email having count(*) > 1) and rowid not in (select min(rowid) from member group by mobile,email having count(*)>1)
```