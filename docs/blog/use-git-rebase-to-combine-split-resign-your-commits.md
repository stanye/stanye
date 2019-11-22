---
title: 使用git rebase对commits进行（合并/拆分/修改作者信息）
date: 2019-04-04 17:55:32
categories: IT技巧
type: post
blog: true
tags: 
  - git
  - git rebase
---

这几天做开源项目，项目负责人对commits要求很高，故总结了合并/拆分commits以及修改提交信息等相关.
<!-- more -->

## **1. 对多个commits合并**
  
  首先查看历史信息
  ```git
  git log --oneline
  ```
  ![](https://ws4.sinaimg.cn/large/006tNc79gy1g1qsfqgbdqj30sm04amyb.jpg)
  
  想合并前两条
  ```git
  git rebase -i Head~2
  // 或者
  git rebase -i 33bda27 // 前一条
  ```
  ![](https://ws4.sinaimg.cn/large/006tNc79gy1g1qshl2y4zj30w40cwtb9.jpg)
  
  将第二条的`pick`改成`squash`
  ![](https://ws2.sinaimg.cn/large/006tNc79gy1g1qsm45qlmj30oe080gn1.jpg)
  
  保存, 修改提交信息, 再保存，查看`git log --oneline`, 确认修改完成
  ![](https://ws4.sinaimg.cn/large/006tNc79gy1g1qsrwrseij30n0042gme.jpg)

  使用`git push`提交（视情况加`-f`force）

## **2. 对单个commits拆分**

  以合并的结果做拆分演示
  ![](https://ws4.sinaimg.cn/large/006tNc79gy1g1qsrwrseij30n0042gme.jpg)
  
  想拆分第一条
  ``` git
  git rebase -i Head~1
  // 或者
  git rebase -i 33bda27 // 前一条
  ```
  ![](https://ws1.sinaimg.cn/large/006tNc79gy1g1qswmccq5j30qq06ygms.jpg)
  
  将第一条的`pick`改成`edit`, 后保存并退出
  ![](https://ws2.sinaimg.cn/large/006tNc79gy1g1qsx3nnh5j30o6086dh3.jpg)

  发现此时属于rebase阶段
  ![](https://ws1.sinaimg.cn/large/006tNc79gy1g1qt1h5nv2j30xa07cq46.jpg)

  ```git
  git reset HEAD^ // 拉取之后的提交到版本库的文件到暂存区, 改操作不影响工作区
  ```
  ![](https://ws1.sinaimg.cn/large/006tNc79gy1g1qt3ut291j30vw0awwgz.jpg)

  使用`git add `和`git commit`分文件进行提交, 生成不同的commits

  提交完成后使用`git rebase --continue`, 完成rebase.

  使用`git push`提交（视情况加`-f`force）

## **3. 更改作者信息**

上述rebase步骤中加入
```git 
git commit --amend --author "aaa <bbb@cc.com>" // 要修改的作者名字和邮箱
```

## **4. 如何rebase第一条（root）**

上述rebase起始步骤中加入
```git 
git rebase -i --root// 要修改的作者名字和邮箱
```

PS：如果想修改root的提交信息呢
```git 
git checkout <sha1-of-root> // checkout到第一条

git commit --amend --author "aaa <bbb@cc.com>" // 要修改的作者名字和邮箱
// OR
git commit --amend --reset-author

git rebase --onto HEAD HEAD master
```

## **5. one more thing**

`git commit`加`-s`参数可以加上Signed-off-by信息