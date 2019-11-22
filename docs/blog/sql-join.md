---
title: sql note
date: 2017-03-27 18:30:22
categories: BackEnd
type: post
blog: true
tags: 
    - mysql
    - sql
---

## left-join/right join/inner join
<!-- more -->
1. left join(左联接) 返回包括左表中的所有记录和右表中联结字段相等的记录.right join(右联接) 返回包括右表中的所有记录和左表中联结字段相等的记录. inner join(等值联接) 只返回两个表中联结字段相等的行.
2. left join是以A表的记录为基础的,A可以看成左表,B可以看成右表,left join是以左表为准的.左表(A)的记录将会全部表示出来,而右表(B)只会显示符合搜索条件的记录.B表记录不足的地方均为NULL.LEFT JOIN操作用于在任何的 FROM 子句中，组合来源表的记录。使用 LEFT JOIN 运算来创建一个左边外部联接。左边外部联接将包含了从第一个（左边）开始的两个表中的全部记录，即使在第二个（右边）表中并没有相符值的记录
3. right join和left join的结果刚好相反,这次是以右表(B)为基础的,A表不足的地方用NULL填充.
4. inner join并不以谁为基础,它只显示符合条件的记录

## limit

1. 取出第一条记录。

    ```sql
    select * from tablename limit 0,1
    ```

2. 第二条记录

    ```sql
    select * from tablename limit 1,1
    ```

3. 从第11条到31条（共计20条）

    ```sql
    select * from tablename limit 10,20
    ```