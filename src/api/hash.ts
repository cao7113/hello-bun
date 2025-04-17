// https://bun.sh/docs/api/hashing

const password = "super-secure-pa$$word";
const hash = await Bun.password.hash(password);
// => $argon2id$v=19$m=65536,t=2,p=1$tFq+9AVr1bfPxQdh6E8DQRhEXg/M/SqYCNu6gVdRRNs$GzJ8PuBi+K+BVojzPfS5mjnC8OpLGtv8KJqF99eP6a4
console.log(hash);

const isMatch = await Bun.password.verify(password, hash);
// => true

// // use argon2 (default)
// const argonHash = await Bun.password.hash(password, {
//   algorithm: "argon2id", // "argon2id" | "argon2i" | "argon2d"
//   memoryCost: 4, // memory usage in kibibytes
//   timeCost: 3, // the number of iterations
// });

// // use bcrypt
// const bcryptHash = await Bun.password.hash(password, {
//   algorithm: "bcrypt",
//   cost: 4, // number between 4-31
// });
