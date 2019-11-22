---
title: 学习TS的一些知识点总结2
date: 2018-11-23 16:56:26
type: post
blog: true
tags:
  - javascript
  - typescript
categories: FrontEnd
---

接上一篇，学习TS对JS的一些概念的补充，ES6一些设计的趋向于
<!-- more -->
Java和PHP，有一定的亲和力

## 类Class

- 定义事物抽象特点，包含属性和方法
- `constructor` 构造函数, `new` 的时候自动调用
- `extends` 继承
- `super` 调用父类的构造函数和方法
- 实例属性ES7支持在 `constructor` 外也可以定义

## 对象Object

## 面向对象OOP(Object Oriented Programming)

### 封装Encapsulation

### 继承Inheritance

### 多态Polymorphism

## 存取器(getter & setter)

    ```js
    class Mobile {
      constructor(mobile) {
        this.mobile = mobile;
      }

      get mobile() {
        return 'iPhone6s';
      }

      set mobile(name) {
        console.log('setter: ' + name);
      }
    }

    let a = new Mobile('P10'); // setter: P10
    a.mobile = 'P10 pro'; // setter: P10 pro
    console.log(a.mobile); // iPhone6s
    ```

  > 想起了之前学vue中双向绑定的原理是什么(靠Object.defineProperty() get set方法)

## 修饰符(Modifiers)

- `static` 修饰静态变量(ES7)和方法(ES6)
- `TS` 访问修饰符(Access Modifiers): `public` 、`protected` 、 `private`

## 抽象类(Abstract Class)

- 抽象类不允许被实例化
- 抽象方法必须在子类实现

## 接口(Interfaces)

- 描述对象的形象(Sharp)
- 提取公共实现(implements)
- 接口可以继承接口

    ```ts
      interface Company {
        alert();
      }

      interface System extends Company {
        isOpenSource();
      }
    ```

- 接口可以继承类

    ```ts
      interface Size {
        x: number;
        y: number;
      }

      interface System extends Size {
        os: string
      }
    ```

## 实现(implements)

- 公共特性提取成接口（interfaces），用 `implements` 关键字来实现
- 一个类可以有多个implements

    ```ts
    class Mobile implements System, Price, Company {}
    ```