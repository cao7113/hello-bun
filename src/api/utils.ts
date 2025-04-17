// https://bun.sh/docs/api/utils

// sync sleep
console.log(`begin time: ${Date.now()}`);
Bun.sleepSync(50);
console.log(`end time: ${Date.now()}`);

// show table
console.log(
  Bun.inspect.table([
    { a: 1, b: 2, c: 3 },
    { a: 4, b: 5, c: 6 },
    { a: 7, b: 8, c: 9 },
  ])
);
console.table([
  { a: 1, b: 2, c: 3 },
  { a: 4, b: 5, c: 6 },
  { a: 7, b: 8, c: 9 },
]);
