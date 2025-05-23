for await (const chunk of Bun.stdin.stream()) {
  // chunk is Uint8Array
  // this converts it to text (assumes ASCII encoding)
  const chunkText = Buffer.from(chunk).toString();
  console.log(`Chunk: ${chunkText}`);
}

// https://bun.sh/guides/process/stdin

// echo "hello" | bun run from-stdin.ts
// Chunk: hello
