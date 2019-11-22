---
title: 学习TS的一些知识点总结
date: 2018-11-12 14:14:26
type: post
blog: true
tags:
  - javascript
  - typescript
categories: FrontEnd
---

学习TS中, 才发现js基础太差了, 学习整理ing(持续更新...)
<!-- more -->

## 数据类型

### 原始数据类型(Primitive data types)

- Number
  - ES6 可以用二进制表示法`前缀0b（或0B）`例如`0b1010`
  - ES6 可以用八进制表示法`0o（或0O）`例如`0o744`
  > 用Number方法转十进制
- String
- Boolean
  > boolean 是 JavaScript 中的基本类型，而 Boolean 是 JavaScript 中的构造函数
- Null
- Undefined
  > 与 void 的区别是，undefined 和 null 是所有类型的子类型。
- Symbol (ES6新增) 
  - [MDN文档](https://developer.mozilla.org/zh-CN/docs/Glossary/Symbol)

- 空值(Void) `TS中才有`
  - TS中用`void`表示没有任何返回值的函数

  ```javascript
    function test(): void {
        console.log('no return');
    }
  ```

### 对象类型(Object types)

## 函数声明(函数声明和函数表达式)

### Function Declaration

    ```ts
    function test(a: string, b: string): string {
      return `${a} is ${b}`
    }

    // 上面用解构的写法如下:

    function test({ a = 'default', b }: { a: string; b: string; }): string {
      return `${a} is ${b}`
    }
    ```

### Function Expression

    ```ts
    var test: (a: string, b: string) => string = function (a: string, b: string): string {
      return `${a} is ${b}`
    }
    ```

  > ES6箭头函数和TS的箭头函数会混淆

### 接口的方式声明

    ```ts
      interface StringConcatFunc {
         (a: string, b: string): string
      }

      let test: StringConcatFunc;
        test = function (a: string, b: string): string {
          return `${a} is ${b}`;
        }
    ```

- 可选参数必须放在必选参数后面 `a: string, b?: string`

- 或者设置默认值和ES6类似 `b?: string = 'default', a: string`
    > 此时会报错Parameter cannot have question mark and initializer.

    需要修改成`b: string = 'default', a: string`

- 支持重载，先精确定义方法，再在最后写实现

## 导入/导出

### export

- 整体导出

  ```js
  module.exports = aaa;
  ```

- 单个导出

  ```js
  exports.aaa = aaa;
  ```

### import

- 整体导入

  ```ts
  import * as aaa from 'aaa';
  ```

### 官方推荐

    ```ts
    // import
    import aaa = require('aaa');
    // export
    export = aaa;
    ```

## 任意值(Any)

- 允许赋值为任意类型
- 未指定其类型会被识别为任意值类型

## 类型推论(Type Inference)

## 联合类型（Union Types)

    ```typescript
      let a: number | string;
    ```

  > 只能访问所有类型里共有的属性或方法

## Interfaces接口, 对行为的抽象, 用classes定义implements(实现)

- 对类的行为进行抽象
- 对对象的形状进行描述

  ```typescript
  interface Mobile {
    name: string,
    system: string
  }

  let myPhone: Mobile = {
    name: 'iphone6s',
    system: 'iOS11.2'
  }
  ```

  > 有点像写react的propType, 变量的形状和接口的形状一定要一致

- 可选属性

  ```ts
  interface Mobile {
    name: string,
    system?: string
  }

  let myPhone: Mobile = {
    name: 'iphone6s'
  }
  ```

  > 不报错
- 任意属性

  ```ts
  interface Mobile {
    name: string,
    system?: string,
    [propName: string]: any
  }

  let myPhone: Mobile = {
    name: 'iphone6s',
    price: 5388
  }
  ```

- 只读readonly

  ```ts
  interface Mobile {
    readonly company: string,
    name: string,
    system?: string,
    [propName: string]: any
  }

  let myPhone: Mobile = {
    name: 'iphone6s',
    price: 5388,
    company: 'apple'
  }
  myPhone.company = 'nokia'; // error
   ```

## 数组类型

- type + 方括号

  ```ts
  let arr: string[] = ['1', '2', '3']
  ```

- 泛型 (Array Generic)

  ```typescript
  let arr: Array<string> = ['1', '2', '3']
  ```

- 接口

  ```ts
  interface StringArray {
    [index: number]: string
  }

  let arr: StringArray = ['1', '2', '3'];
  ```

- any[] 表示任意数组

- 类数组 Array-like Object

  ```ts
  function test() {
    let args: IArguments = arguments;
  }
  ```

  > IArguments就是内置数组

- 元组Tuple(吐槽记成了元祖, 元祖高达)
  
  > 与数组类似, 数组内有相同元素, 元组有不同类型

    ```ts
      let test: [string, number] = ['1', 2];
    ```

## 类型断言Type Assertion

- `<类型>`值

  ```ts
    function test (a: string | number) {
      console.log((<string>a).length);
    }
  ```

- 值 as 类型
  > react必须用`值 as 类型`

## 泛型Generics

> 定义函数、接口、类的时候不指定类型，使用的时候再指定

    ```ts
    function createArray<T>(length: number, value: T): Array<T> {
      let result: T[] = [];
      for (let i = 0; i < length; i++) {
        result[i] = value;
      }
      return result;
    }

    function test<T, U>(a: [T, U]): [U, T] {
      return [a[1], a[0]];
    }
    ​
    ```
    `<T>`任意类型

### 泛型约束

  ```ts
  interface LengthWise {
    length: number
  }

  function countArray<T extends LengthWise>(args: T): T {
    console.log('argsLength: ', args.length);
    return args;
  }
  ```

### 泛型接口

## 内置对象

- ES标准
  - `Boolean`
  - `Error`
  - `Date`
  - `Regexp`
  - [global object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)
  - [typescript实现](https://github.com/Microsoft/TypeScript/tree/master/src/lib)
- DOM和BOM
  - `Document`
  - `HTMLElement`
  - `Event`
  - `NodeList`
  - [typescript实现](https://github.com/Microsoft/TypeScript/tree/master/src/lib)

## 声明

### 声明文件

  > 放一个单独的文件`example.d.ts`

### 声明的使用方式

    ```ts
      // 声明全局变量
      declare var a: (b: string) => any;
      declare const b;
      declare let c;

      // 声明全局方法 支持重载
      declare function test (): any {}

      // 声明全局类
      declare class Mobile {
        name: string;
        constructor(name: string);
      }

      let myPhone = new Mobile('iPhone6s');

      // 声明全局枚举
      declare enum Systems {
        iOS,
        Android,
        WindowsPhone,
        Symbian
      }

      console.log(Systems["iOS"] === 0); // true
      console.log(Systems[0] === "iOS"); // true

      // 声明全局对象 被ES6淘汰
      declare namespace Example {
        function test...
      }

      // 声明全局类型
      interface test {}

      // 声明全局类型
      type System = string;
      type SystemVersion = () => string;

        // `类型别名`常用于联合类型
        type SystemOrVersion = System | SystemVersion;
        function getSystem(n: SystemOrVersion): System {
          if (typeof n === 'string') {
              return n;
          } else {
              return n();
          }
        }

        // 声明`字符串字面量`类型
        type EventNames = 'click' | 'touch' | 'scroll';
        function handleEvent(ele: Element, event: EventNames) {
            // do something
        }

      // 扩展全局变量
      declare global {
        interface String {
          sayYes(): string
        }
      }

      // 扩展模块 先import再declare
      import * as aaa from 'aaa';

      declare module 'aaa' {
        export function lalala(): aaa.toArray();
      }
      ```

- 第三方声明文件, 发布到`@types`
  > 用@types下载 http://microsoft.github.io/TypeSearch/

    ```sh
    npm i @types/react --save
    ```

- `package.json`中`types`字段或者`index.d.ts`
- 创建types目录, `tsconfig.json` 中的 `paths` 和 `baseUrl` 字段。

  ```json
    {
      "compilerOptions": {
        "module": "commonjs",
        "baseUrl": "./",
        "paths": {
            "*": ["types/*"]
        }
      }
    }
    ````

### 声明合并

1. 函数合并(重载)
2. 接口合并

## overload 重载(方法名一样，参数不一样)

- js不支持重载
- 可以自己根据参数进行条件判断进行重载
- 闭包实现重载
  - 参考[https://www.cnblogs.com/yugege/p/5539020.html](https://www.cnblogs.com/yugege/p/5539020.html)
- ES6带来了Proxy和Reflect可以实现重载

## overwrite 重写

## override 覆盖

## 参考文档

1. [https://www.tslang.cn/docs/home.html](https://www.tslang.cn/docs/home.html)
2. [https://ts.xcatliu.com](https://ts.xcatliu.com)