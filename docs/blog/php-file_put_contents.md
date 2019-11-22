---
layout: page
title: php file_put_contents 函数
date: 2017-03-28 9:21:11
categories: BackEnd
type: post
blog: true
tags: 
    - php
---

file_put_contents()功能函数（集成了fopen、fwrite、fclose) 将一个字符串写入文件.
<!-- more -->
```php
int file_put_contents ( string filename, string data [, int flags [, resource context]] ) 
```
和依次调用 fopen()，fwrite() 以及 fclose() 功能一样。 
参数 data 可以是数组，这就相当于 file_put_contents($filename, join('', $array))

1. filename 要被写入数据的文件名。 
2. data 要写入的数据。类型可以是 string，array 或者是 stream 资源（如上面所说的那样）。 
3. flags 可以是 FILE_USE_INCLUDE_PATH，FILE_APPEND 和／或 LOCK_EX（获得一个独占锁定），然而使用 FILE_USE_INCLUDE_PATH 时要特别谨慎。 
4. context 一个 context 资源。