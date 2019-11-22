---

title: 使用using关键字对连接进行简化
date: 2017-04-29 14:39:10
categories: BackEnd
type: post
blog: true
tags: 
    - mysql
    - using
---

USING进行简化：
   1、查询必须是等连接的
   2、等连接中的列必须是同名
<!-- more -->
```sql
select aname, bname  
from a inner join b  
using(category)  
```

在使用using是需要注意以下几个问题
   1、在select子句中只能指定该列名，不能使用表名或别名
   2、在using子句中也只能单独使用列名
对于多与两个表的连接
```sql
select c.c_name, p.p_name , f.f_name
from ctable c, ptable p, ftable f
where c.user_id = f.user_id
and p.p_id = f.p_id  
and p.type_id = f.type_id;  
```

使用using对上面的sql语句进行重写

```sql
select c.c_name, p.p_name, f.type  
from ctable c inner join ftable f  
using(user_id)  
inner join ptable p  
using(p_id)  
inner join ftable f  
using(type_id);  
```