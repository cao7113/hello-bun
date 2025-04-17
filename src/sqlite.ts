// https://bun.sh/docs/api/sqlite

import { Database } from "bun:sqlite";

// https://bun.sh/docs/bundler/loaders#sqlite
// SQLite loader. with { "type": "sqlite" } import attribute
// In the runtime and bundler, SQLite databases can be directly imported. This will load the database using bun:sqlite.
// import db from "./my.db" with { type: "sqlite" };

// // embed the database into the bundle
// import db from "./my.db" with { type: "sqlite", embed: "true" };

const db = new Database(":memory:");
const query = db.query("select 'Hello world' as message;");
const result = query.get(); // => { message: "Hello world" }
console.log(result);

console.log(db.query(`create table users (id int);`).run());
