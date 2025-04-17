#! /usr/bin/env bun

// IIFE（Immediately Invoked Function Expression） 是一种在 JavaScript 中立即执行的函数表达式。简单来说，它是一个函数声明被立即调用的模式。

// IIFE 的特点：
// 立即执行：IIFE 会在定义后立即执行，而不是等待调用。
// 隔离作用域：IIFE 创建了一个新的作用域，这对于避免污染全局作用域非常有用，尤其在浏览器端的 JavaScript 编程中。
// 私有变量：通过 IIFE 可以创建私有变量，这些变量仅在函数内部可见，外部无法访问。

(() => {
  console.log("running in IIFE");
})();
