class BlankClass {}

class Point {
  x: number;
  y: number;
}

class Dog {
  // https://www.typescriptlang.org/docs/handbook/2/classes.html#caveats
  // Unlike TypeScripts’s private, JavaScript’s private fields (#) remain private after compilation and do not provide the previously mentioned escape hatches like bracket notation access, making them hard private.
  #barkAmount = 0;
  personality = "happy";

  constructor() {}
}

class Foo {
  static #count = 0;

  get count() {
    return Foo.#count;
  }

  // static Blocks in Classes
  // Static blocks allow you to write a sequence of statements with their own scope that can access private fields within the containing class. This means that we can write initialization code with all the capabilities of writing statements, no leakage of variables, and full access to our class’s internals.

  // static {
  //   try {
  //     const lastInstances = loadLastInstances();
  //     Foo.#count += lastInstances.length;
  //   } catch {}
  // }
}

export { Point };
