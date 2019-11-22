---

title: regex in my program
date: 2016-07-15 11:41:43
categories: BackEnd
type: post
blog: true
tags: 
    - regex
---
用到的一些正则记录：
<!-- more -->

1. 匹配>< `>[\s]+<`
2. 匹配反斜杠(匹配一个反斜杠要用四个反斜杠)

   ```js
   \\\\
   ```

    1. 字符串里面表示斜杠就需要两个斜杠`\\`
    2. 正则表达式里的斜杠需要转意，是用`\\`标示。
    3. 第一个斜杠是转义符，第二个斜杠是斜杠本身，第三个斜杠是转义符，第四个斜杠是斜杠本身

3. 密码校验

```java
public static final String PASSWORD_PATTERN = "^(?![a-zA-z]+$)(?!\\d+$)(?![!\"#$%&#$%&amp;'()*+,-./:;&#$%&amp;'()*+,-./:;&lt;=&#$%&amp;'()*+,-./:;&lt;=&gt;?@\\[\\]^_`{|}~]+$)[a-zA-Z\\d!\"#$%&#$%&amp;'()*+,-./:;&#$%&amp;'()*+,-./:;&lt;=&#$%&amp;'()*+,-./:;&lt;=&gt;?@\\[\\]^_`{|}~]{6,16}$";
```

4. input标签验证

    ```html
    // 只能输入英文
    <input type="text" onkeyup="value=value.replace(/[^a-zA-Z]/g,'')" />
    // 无法粘贴
    <input type="text" onkeydown="fncKeyStop(event)" onpaste="return false" />
    // 屏蔽右键
    <input type="text" oncontextmenu="return false" />
    // 只能输入数字
    <input type="text" onkeyup="this.value=this.value.replace(/\D/g,'')" />
    // 只能输入数字，小数点：
    <input type="text" onkeyup="value=value.replace(/[^\d\.]/g,'')"> />
    // 只能输入数字，小数点，下划线：
    <input type="text" onkeyup="value=value.replace(/[^\d\._]/g,'')" />
    // 只能输入汉字：
    <input type="text" 
    onkeyup="value=value.replace(/[^\u4E00-\u9FA5]/g,'')" 
    onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\u4E00-\u9FA5]/g,''))">
    // 禁止输入法输入：
    <input type="text" style="ime-mode: disabled">
    ```