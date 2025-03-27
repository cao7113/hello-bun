// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain

// 一句话： prototype 是函数的一个属性，指向一个对象，这个对象是用作共享属性和方法的原型。
// prototype 是 JavaScript 中对象继承的核心机制。每个对象都有一个内部链接到另一个对象（即原型），通过原型链实现继承。
// 在 JavaScript 中，prototype 是一种机制，用于实现对象的继承。它本质上是每个函数（尤其是构造函数）都有的一个特殊属性，指向一个对象。这个对象包含可以被通过该构造函数创建的实例对象共享的方法和属性。

// 原型对象: 每个函数（包括构造函数）都有一个 prototype 属性，指向一个对象。
// 实例的原型: 使用 Object.getPrototypeOf(obj) 或 obj.__proto__ 查看对象的原型。
// 方法查找: 如果一个对象本身没有某个属性或方法，JavaScript 会沿着原型链向上查找。

// __proto__ 是什么？
// 定义：__proto__ 是每个对象都具有的隐藏属性（不是标准的一部分，但大多数环境都支持）。
// 指向原型链：它指向创建该对象的构造函数的 prototype。
// 作用：通过 __proto__ 可以实现属性查找的原型链。

// 类和 Prototype 的关系
// 类本质上是构造函数的语法糖，class 定义的每个方法实际上被添加到 prototype 上。
// 通过 extends 实现继承时，子类会继承父类的 prototype 方法和静态方法。

// class Animal {
//   speak() {}
// }
// // 等价于
// function Animal() {}
// Animal.prototype.speak = function () {};

// prototype	函数的一个属性，指向一个对象，用于定义共享的属性和方法。
// __proto__	每个对象的隐藏属性，指向构造函数的 prototype，用于实现属性查找的原型链。
// 原型链	对象通过 __proto__ 一层层向上查找属性，直到 null（Object.prototype.__proto__ === null）。

import { test, expect } from "bun:test";

test("old inheritance based constructor and prototype", () => {
  // function Animal(name) {
  //   this.name = name;
  // }
  // Animal.prototype.speak = function () {
  //   console.log(`${this.name} makes a noise.`);
  // };

  // function Dog(name) {
  //   Animal.call(this, name);
  // }
  // Dog.prototype = Object.create(Animal.prototype);
  // Dog.prototype.constructor = Dog;

  // const dog = new Dog("Rex");
  // dog.speak(); // Rex makes a noise.

  // vs

  class Animal {
    name: string;
    constructor(name) {
      this.name = name;
    }

    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }

  class Dog extends Animal {
    speak() {
      console.log(`${this.name} barks.`);
    }
  }

  const dog = new Dog("Rex");
  dog.speak(); // Rex barks.
});

function getAllPrototypes(obj) {
  const prototypes = [];
  let current = Object.getPrototypeOf(obj); // 获取当前对象的原型

  while (current) {
    prototypes.push(current); // 将当前原型加入数组
    current = Object.getPrototypeOf(current); // 继续获取上一级原型
  }

  return prototypes;
}

test("test prototypes", () => {
  expect(getAllPrototypes({})).toEqual([Object.prototype]);
  expect(getAllPrototypes([])).toEqual([Array.prototype, Object.prototype]);

  expect(getAllPrototypes(() => {})).toEqual([
    Function.prototype,
    Object.prototype,
  ]);
});

test("demo", () => {
  function Person(name) {
    this.name = name;
  }
  Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
  };

  const john = new Person("John");
  john.greet(); // "Hello, my name is John"
});
