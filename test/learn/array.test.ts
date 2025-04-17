import { test, expect } from "bun:test";

// Test: Array push and pop
test("array push and pop", () => {
  const arr = [1, 2, 3];
  arr.push(4);
  expect(arr).toEqual([1, 2, 3, 4]);
  const popped = arr.pop();
  expect(popped).toBe(4);
  expect(arr).toEqual([1, 2, 3]);
});

// Test: Array map
test("array map doubles values", () => {
  const arr = [1, 2, 3];
  const doubled = arr.map((x) => x * 2);
  expect(doubled).toEqual([2, 4, 6]);
});

// Test: Array filter
test("array filter even numbers", () => {
  const arr = [1, 2, 3, 4, 5];
  const evens = arr.filter((x) => x % 2 === 0);
  expect(evens).toEqual([2, 4]);
});

// Test: Array reduce
test("array reduce sums values", () => {
  const arr = [1, 2, 3, 4];
  const sum = arr.reduce((acc, val) => acc + val, 0);
  expect(sum).toBe(10);
});

// Test: Typed array basic usage
test("typed array Uint8Array", () => {
  const typed = new Uint8Array([10, 20, 30]);
  expect(typed.length).toBe(3);
  expect(Array.from(typed)).toEqual([10, 20, 30]);
});
