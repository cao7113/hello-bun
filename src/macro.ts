import { random } from './random.ts' with { type: 'macro' };

console.log(`Your random number is ${random()}`);

// bun build ./this-file.ts