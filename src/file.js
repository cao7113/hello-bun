const file = Bun.file(import.meta.dir + "/file-package.json"); // BunFile
// console.log(file);

const pkg = await file.json(); // BunFile extends Blob
pkg.name = "my-package";
pkg.version = "1.0.1";

await Bun.write(file, JSON.stringify(pkg, null, 2));
