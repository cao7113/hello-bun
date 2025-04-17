import got from "got";

// https://github.com/sindresorhus/got/blob/main/documentation/quick-start.md

const info = await got.get("https://httpbin.org/get").json();
console.info(`Response info: \n${JSON.stringify(info, null, 2)}`);
