const path = "./package.json";
const file = Bun.file(path);

const contents = await file.json();
// { name: "my-package" }

// file.type; // => "application/json;charset=utf-8";

console.log(contents);
