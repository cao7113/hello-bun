import { test, expect } from "bun:test";
// https://www.typescriptlang.org/docs/handbook/2/basic-types.html

test("string methods", () => {
  expect("abc".toUpperCase()).toEqual("ABC");
});

test("blank default", () => {
  // 空值合并操作符（??）只会针对 null 或 undefined 返回右侧的默认值，而逻辑或（||）还会将其他 falsy 值（如 false, 0, ''）视为无效并返回默认值。

  const defaultIfNull = null ?? 1;
  expect(defaultIfNull).toEqual(1);

  const defaultIfUndefined = undefined ?? 1;
  expect(defaultIfUndefined).toEqual(1);

  const defaultIfFalse = false ?? 1;
  expect(defaultIfFalse).toBeFalse();

  const falseWithDefault = false || 1;
  expect(falseWithDefault).toEqual(1);
});

// 可选链操作符 是 ES2020（ES11）的新特性
test("可选链操作符 Optional Chaining Operator", () => {
  const obj = { a: { b: 2 } };
  expect(obj?.a?.b).toEqual(2);
  expect(obj?.a?.b?.c).toBeUndefined();

  // const arr = [1, 2, 3];
  // console.log(arr?.[1]); // 2
  // console.log(arr?.[10]); // undefined

  // const obj = {
  //   greet: () => "Hello",
  // };
  // console.log(obj?.greet?.()); // "Hello"
  // const empty = null;
  // console.log(empty?.greet?.()); // undefined
});

test("destruct", () => {
  const constants = { pi: 3.14 };
  // 对象展开语法 ...
  // 将对象 constants 的内容合并到另一个对象 circle 中。
  const circle = { radius: 5, ...constants };
  function area({ radius, pi }: { radius: number; pi: number }) {
    return pi * radius * radius;
  }
  expect(area(circle)).toEqual(78.5);

  // function readButtonInput(...args: [string, number, ...boolean[]]) {
  //   const [name, version, ...input] = args;
  //   // ...
  // }
  // function readButtonInput(name: string, version: number, ...input: boolean[]) {
  //   // ...
  // }
});
