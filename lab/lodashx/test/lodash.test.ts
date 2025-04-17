import { test, expect } from "bun:test";
import _ from "lodash";

test("default", () => {
  expect(_.defaults({ a: 1 }, { a: 3, b: 2 })).toEqual({ a: 1, b: 2 });

  expect(_.partition([1, 2, 3, 4], (n) => n % 2)).toEqual([
    [1, 3],
    [2, 4],
  ]);
});
