// https://bun.sh/docs/bundler/loaders#file

import logo from "./logo.svg";
console.log(logo);

// In the runtime, Bun checks that the logo.svg file exists and converts it to an absolute path to the location of logo.svg on disk.

// bun run logo.ts
// /path/to/project/logo.svg
