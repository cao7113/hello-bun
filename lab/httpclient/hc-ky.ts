import ky from "ky";

// https://github.com/sindresorhus/ky/tree/main
// https://adrian-beria-blog.netlify.app/blog/73_ky-over-axios/

const info = await ky.get("https://httpbin.org/get").json();
console.info(`Response info: \n${JSON.stringify(info, null, 2)}`);
