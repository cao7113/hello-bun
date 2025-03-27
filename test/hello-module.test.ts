// https://exploringjs.com/js/book/ch_modules.html#cheat-sheet-modules

import { test, expect } from "bun:test";
import hello from "../src/hello-module";

test("hello module", () => {
  expect(hello()).toBe("Hello module");
});
