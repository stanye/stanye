---

title: php&引用
date: 2017-04-29 19:10:39
categories: BackEnd
type: post
blog: true
tags: 
    - php
---

php的引用--在变量或者函数、对象等前面加上&符号,允许两个变量来指向同一个内容
<!-- more -->
```php
$a = "111";
$b = &$a;
echo $a; // 这里输出:111
echo $b; // 这里输出:111
$b="222";
echo $a; // 这里$a的值变为222 所以输出222 echo $b;//这里输出222
```
￼

```php
function demo(&$a){
    $a = $a + 1;
}
$b = 100;
echo $b; // 100
demo($b);  //$b的内存地址
echo $b; // 101
```

```php
function &test(){
    static $b=0;//申明一个静态变量
    $b=$b+1;
    echo $b;
    return $b;
}
```