---
title: mac更新系统引发apache403问题
date: 2019-07-19 15:18:32
categories: IT技巧
type: post
blog: true
tags:
    - MacOS 
    - apache
    - Mojave
---

今天无意中发现apache服务启动不起来，一直报403的错误。
<!-- more -->

## apache 403

百度几个方案，都无法解决，最终在[Mac OS下开启自带的apache服务](https://www.cnblogs.com/sqlsec/p/macapache.html)文章里，解决：
>因为Mac版本升级导致了apache策略发生变更了，所以我们修改后还是会出现403无权访问的情况。
>解决方法:备份原有的httpd.conf配置文件,把同级目录下的httpd.conf.pre-update 重命名为httpd.conf
其他配置照搬之前的（网站文档目录及端口ServerName的配置）

## 重启遇到的两个问题

### AH00557: httpd: apr_sockaddr_info_get() failed for...

### AH00558: httpd: Could not reliably determine...

When restart the httpd.

Try:

```bash
sudo /usr/sbin/apachectl restart
```

Don't use:

```bash
sudo apachectl restart
```

### 为什么会出现类似的问题呢

因为你电脑装了两个不同版本的Apache

### 如果还有问题?

修改`/etc/apache2/httpd.conf` 
将`#ServerName www.example.com:80`的注释去掉
可以换成自己定义的域名
