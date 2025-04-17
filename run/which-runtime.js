#! /usr/bin/env node

// #! /usr/bin/env bun
// bun -b run/which-runtime.js

// more ref https://github.com/honojs/hono/blob/main/src/helper/adapter/index.ts#L50

if (typeof Bun !== "undefined") {
  console.log("run by runtime: Bun");
} else if (
  typeof process !== "undefined" &&
  process.release &&
  process.release.name === "node"
) {
  console.log("run by runtime: Node");
} else {
  console.log("Unknown runtime");
}
