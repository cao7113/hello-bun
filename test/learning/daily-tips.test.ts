import { test, expect } from "bun:test";
// https://mp.weixin.qq.com/s/seAiN526gVGcOhvSKgW59g

test("daily tips", () => {
  expect(true ? 1 : 0).toEqual(1);

  // a !== null && a !== undefined ? a : 'default';
  const user = null;
  expect(user ?? "default").toEqual("default");

  // @ts-ignore
  expect(user?.address?.street ?? "default").toEqual("default");

  // function unique(arr) {
  //   return arr.filter((item, index) => arr.indexOf(item) === index);
  // }
  // const unique = (arr) => [...new Set(arr)];

  // const merged = Object.assign({}, obj1, obj2);
  // const merged = { ...obj1, ...obj2 };

  // if (condition) {
  //   doSomething();
  // }
  // condition && doSomething();

  // function greet(name) {
  //     name = name || 'Guest';
  //     console.log(`Hello ${name}`);
  // }
  // const greet = (name = 'Guest') => console.log(`Hello ${name}`);

  const arr = [1, 2, 3];
  const [a0, a1] = arr;
  expect(a0).toBe(1);
  expect(a1).toBe(2);

  const x = 1,
    y = 2;
  expect({ x, y }).toEqual({ x: 1, y: 2 });

  expect([1, 2].map((x) => x ** 2)).toEqual([1, 4]);

  let a = 1,
    b = 2;
  [a, b] = [b, a];
  expect(a).toBe(2);

  // // 动态对象属性
  // // 传统写法
  // const obj = {};
  // obj[dynamic + 'name'] = value;

  // // 简写方式
  // const obj = {
  //     [`${dynamic}name`]: value
  // };
});
