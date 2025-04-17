import { test, expect } from "bun:test";

// Object 是一种基础数据类型，是几乎所有复杂数据结构的基石

test("access object fields", () => {
  const obj = { a: 1 };
  expect(obj.a).toEqual(obj["a"]);
});

test("merge objects", () => {
  const target = { a: 1 };
  const source = { b: 2 };
  // Object.assign(target, source); // { a: 1, b: 2 }
  // below is modern object spread operator
  // const merged = { ...target, ...source }; // { a: 1, b: 2 }
  expect(Object.assign(target, source)).toEqual({ ...target, ...source });

  // console.log(Object.keys(obj)); // ["a", "b"]
  // console.log(Object.values(obj)); // [1, 2]
  // console.log(Object.entries(obj)); // [["a", 1], ["b", 2]]

  // const obj = {};
  // Object.defineProperty(obj, "key", {
  //   value: "value",
  //   writable: true,
  //   enumerable: true,
  //   configurable: true,
  // });
  // console.log(obj.key); // "value"
});

// 关键点：
// 默认情况：通过对象字面量（例如 { a: 1, b: 2 }）创建的属性默认都是可枚举的。
// 不可枚举：当你使用 Object.defineProperty() 定义属性时，可以将 enumerable 选项设置为 false，从而使该属性在 for...in 循环或 Object.keys() 时不显示。
// 用途：设置属性是否可枚举，可以控制对象在迭代时暴露哪些属性，有助于隐藏实现细节或敏感数据。
test("keys and values", () => {
  const obj = {
    a: 1,
    f1: () => 1,
  };
  expect(Object.keys(obj)).toEqual(["a", "f1"]);
  expect(Object.entries(obj)).toEqual([
    ["a", 1],
    ["f1", obj.f1],
  ]);

  const obj2 = {
    a: 1,
    b: "bb",
  };
  expect(Object.keys(obj2)).toEqual(["a", "b"]);
  expect(Object.values(obj2)).toEqual([1, "bb"]);
  expect(Object.entries(obj2)).toEqual([
    ["a", 1],
    ["b", "bb"],
  ]);
});

test("getter and setter", () => {
  const obj = {
    _name: "Alice",
    get name() {
      return this._name;
    },
    set name(newName) {
      this._name = newName;
    },
  };
  // console.log(obj.name); // "Alice"
  expect(obj.name).toEqual("Alice");
  obj.name = "Bob";
  // console.log(obj.name); // "Bob"
  expect(obj.name).toEqual("Bob");
});

// 浅拷贝：
// const shallowCopy = Object.assign({}, obj);
// const shallowCopy2 = { ...obj };
// 深拷贝：
// const deepCopy = JSON.parse(JSON.stringify(obj));

test("root prototype", () => {
  // 所有对象的原型最终都会指向 Object.prototype，它是原型链的终点。
  const obj = {};
  expect(Object.getPrototypeOf(obj) === Object.prototype).toBeTrue();
  const obj2 = { a: 1 };
  expect(Object.getPrototypeOf(obj) === Object.prototype).toBeTrue();

  // const proto = { greet: () => console.log("Hello!") };
  // const obj = Object.create(proto);
  // obj.name = "John";
  // obj.greet(); // "Hello!"
});
