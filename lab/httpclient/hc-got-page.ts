import got from "got";

const countLimit = 10;

const pagination = got.paginate(
  "https://api.github.com/repos/sindresorhus/got/commits",
  {
    pagination: { countLimit },
  }
);

console.log(`Printing latest ${countLimit} Got commits (newest to oldest):`);

for await (const commitData of pagination) {
  console.log(commitData.commit.message);
}
