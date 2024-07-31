#! /usr/bin/env bun

console.time("test");
for (let i = 0; i < 10000; i++) console.log(i);
console.timeEnd("test");
