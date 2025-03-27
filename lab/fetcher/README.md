# fetcher

Try node native `fetch` and `node-fetch` package

fetch 函数是现代 JavaScript 中的一个标准化 Web API，用于发起网络请求。
主要用于替代旧的 XMLHttpRequest（XHR）接口，提供了更简单、基于 Promise 的 API，使得异步编程更加易读和易维护。

fetch 是一个用于发起网络请求并处理响应的函数。它是一个内建的全局函数，标准化 API 中的一部分，通常用于替代旧有的 XMLHttpRequest。

可以根据 Node.js 版本选择一个方案：
Node.js 18+：使用原生 fetch。
Node.js <18：使用 node-fetch，并全局定义。

## 是否支持proxy

- fetch 的请求会遵循浏览器或运行环境的代理设置
- https://www.npmjs.com/package/https-proxy-agent
- https://www.npmjs.com/package/proxy-agent
- https://www.npmjs.com/package/socks-proxy-agent