#! /usr/bin/env bun

// bun --print process.env

// https://bun.sh/docs/runtime/env#dotenv
// Generally speaking, you won't need dotenv or dotenv-expand anymore, because Bun reads .env files automatically.

console.log(`process.env.HELLO = ${process.env.HELLO}`);

// Bun also exposes these variables via Bun.env and import.meta.env, which is a simple alias of process.env.
console.log(`Bun.env.HELLO = ${Bun.env.HELLO}`);
console.log(`import.meta.env.HELLO = ${import.meta.env.HELLO}`);

// console.log(`Hello via Bun version: ${Bun.version} \nfile: ${__filename} \npath: ${import.meta.path} from import.meta!`);
console.log(`Hello Bun
  version: ${Bun.version} 
  main: ${Bun.main}
  file: ${__filename} 
  path: ${import.meta.path} from import.meta.path!
  `);
