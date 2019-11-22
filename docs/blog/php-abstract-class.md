---
title: php抽象类
date: 2017-03-27 14:56:20
categories: BackEnd
type: post
blog: true
tags: 
    - php
    - abstract class
---

php抽象类:

1. PHP5支持抽象类和抽象方法。
2. 抽象类不能被实例化，必须先继承再实例化。
<!-- more -->
3. 继承抽象类, 子类必须全部实现抽象类中的方法, 而且public、private、protected只能高不能低

    ```php
    abstract class AbstractClass
    {
        // 强制要求子类定义这些方法
        abstract protected function getValue();
        abstract protected function prefixValue($prefix);
        // 普通方法（非抽象方法）
        public function printOut() {
            print $this->getValue;
        }
    }

    class ConcreteClass1 extends AbstractClass
    {
        protected function getValue() {
            return "ConcreteClass1";
        }

        public function prefixValue($prefix) {
            return "{$prefix}ConcreteClass1";
        }
    }

    class ConcreteClass2 extends AbstractClass
    {
        public function getValue() {
            return "ConcreteClass2";
        }

        public function prefixValue($prefix) {
            return "{$prefix}ConcreteClass1";
        }
    }

    $class1 = new ConcreteClass1;
    $class1->printOut();
    echo $class1->prefixValue('FOO_') ."\n";

    $class2 = new ConcreteClass2;
    $class2->printOut();
    echo $class2->prefixValue('FOO_') ."\n";
    ```

    以上例程会输出：
    ConcreteClass1
    FOO_ConcreteClass1
    ConcreteClass2
    FOO_ConcreteClass2
    抽象类的子类中的普通方法执行方式和其他类相同