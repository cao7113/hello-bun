// https://bun.sh/docs/bundler/loaders#toml

// import 中的 from 路径是相对于当前文件（toml-reader.ts）所在的目录，而不是相对于进程的工作目录（pwd）。
// 例如：当前文件路径为 /Users/rj/dev/jslab/hello-bun/try/toml-reader.ts
// 那么 import config from "../bunfig.toml"; 实际会去 /Users/rj/dev/jslab/hello-bun/bunfig.toml 加载文件
import config from "../bunfig.toml";

console.log(`toml test: ${JSON.stringify(config, null, 2)}`);
