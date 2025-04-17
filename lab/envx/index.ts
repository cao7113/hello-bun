// console.log("Hello via Bun!");

require("@dotenvx/dotenvx").config({ path: [".env.test"] });

console.log(`Hello ${process.env.HELLO}`);
