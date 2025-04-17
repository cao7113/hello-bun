// A file can declare a main export via export default:
// https://exploringjs.com/js/book/ch_modules.html#cheat-sheet-modules

export default function hello() {
  return "Hello module";
}

/**
ES6（ECMAScript 2015）引入了模块机制，从而为 JavaScript 提供了原生的模块化支持。模块化的核心思想是将代码拆分到不同文件中，每个文件（模块）可以声明对外暴露的接口（export），并通过 import 来引入其他模块的功能。这种设计带来了多方面的好处。

---

### 1. 模块化的动机和历史背景

- **早期的模块化方式：**  
  在 ES6 出现之前，JavaScript 没有内置模块系统。开发者常用的模块化方案有 CommonJS（Node.js 中使用的 `require`/`module.exports`）、AMD（浏览器中使用的异步模块定义，如 RequireJS）等。这些方案在不同环境间存在差异，且缺乏统一标准。

- **ES6 标准化模块：**  
  为了统一模块的写法和提高代码优化能力，ES6 采用了静态模块结构。静态模块意味着：  
  - 模块的依赖关系在编译时就能得到解析，有利于静态分析、Tree Shaking 和编译器优化。  
  - 标准化语法使得在不同环境（浏览器、Node.js、Bun 等）中都能以相同的方式管理模块。

---

### 2. export 指令

- **作用：**  
  export 用于将模块内部的变量、函数、类等公开，让其他模块可以 import 到这些导出的功能。

- **两种导出方式：**  
  - **命名导出（Named Exports）：**  
    使用 export 可以分别导出多个实体。例如：
    ````typescript
    // 导出变量和函数
    export const PI = 3.14159;

    export function square(x: number): number {
      return x * x;
    }
    ````
    导入时可使用同样的命名：
    ````typescript
    import { PI, square } from './math';
    ````
  - **默认导出（Default Export）：**  
    每个模块只能有一个默认导出，它适合导出一个主要功能：
    ````typescript
    // 默认导出一个函数
    export default function greet(name: string): string {
      return `Hello, ${name}!`;
    }
    ````
    导入时：
    ````typescript
    import greet from './greet';
    ````

- **重新导出（Re-exporting）：**  
  允许从另一个模块导入后立即导出，帮助构建集中化的模块接口：
  ````typescript
  // 将 math 模块的所有导出重新导出
  export * from './math';
  ````

---

### 3. import 指令

- **作用：**  
  import 用来引入其他模块通过 export 暴露出来的功能，使得代码可以像使用本地变量一样使用这些导入的实体。

- **多种导入方式：**  
  - **命名导入：**  
    ````typescript
    import { PI, square } from './math';
    ````
  - **默认导入：**  
    ````typescript
    import greet from './greet';
    ````
  - **混合导入：**  
    如果一个模块既有默认导出又有命名导出，可以同时导入：
    ````typescript
    import greet, { sayHi } from './greet';
    ````
  - **整体导入：**  
    将模块所有导出聚合到一个对象上：
    ````typescript
    import * as MathModule from './math';
    console.log(MathModule.PI);
    ````

- **动态导入：**  
  ES2020 引入了动态 import（import() 语法），用于按需加载模块，返回一个 Promise：
  ````javascript
  import('./math')
    .then(math => {
      console.log(math.square(5));
    })
    .catch(error => console.error('加载模块失败:', error));
  ````

---

### 4. 静态性和好处

- **静态分析：**  
  与 CommonJS 的动态 require 不同，ES6 模块的依赖关系在编译时解析，可以使工具在打包时消除未使用的代码（Tree Shaking），提高代码效率。

- **提升代码规范：**  
  模块间的依赖关系清晰明了，避免了全局变量冲突。每个模块都有独立作用域，增强了代码的模块化和可维护性。

- **浏览器/服务器统一：**  
  原生模块使得浏览器也能直接加载模块（例如使用 `<script type="module">`），推动了 Web 开发的现代化。

---

### 5. 小结

ES6 模块化通过引入 import/export 指令，为 JavaScript 提供了更好的组织代码的方式。这种方式：
- 允许在文件之间共享变量和函数；
- 通过静态结构实现更高效的编译和打包；
- 简化了依赖管理和作用域控制。

整体来看，import/export 是现代 JavaScript 开发的重要组成部分，广泛应用在各类前端、后端以及跨平台项目中。

*/
