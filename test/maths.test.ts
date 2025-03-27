import { test, expect } from "bun:test";

import { pi, phi } from "../src/maths";
// take all of the exported objects and put them into a single namespace using * as name
import * as maths from "../src/maths.ts";

// import "./maths.js";
// import a file and not include any variables into your current module via import "./file":
// In this case, the import does nothing. However, all of the code in maths.ts was evaluated,
// which could trigger side-effects which affect other objects.

test("maths", () => {
  expect(pi).toEqual(3.14);
  expect(phi).toEqual(1.61);
  expect(maths.pi).toEqual(3.14);
});
