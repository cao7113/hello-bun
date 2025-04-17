// https://www.typescriptlang.org/docs/handbook/2/classes.html
// Classes are a template for creating objects.

import { test, expect } from "bun:test";
// import { Point } from "../src/hello-class";

test("hello class", () => {
  class Point {
    x: number;
    y: number;
  }

  const pt = new Point();
  pt.x = 0;
  // pt.y = 0;
  expect(pt.x).toEqual(0);

  class Point2 {
    // Fields can also have initializers; these will run automatically when the class is instantiated:
    x = 0;
    y = 0;

    // // Constructor overloads
    // constructor(x: number, y: number);
    // constructor(xy: string);
    // constructor(x: string | number, y: number = 0) {
    //   // Code logic here
    // }
  }
  const pt2 = new Point2();
  expect(pt2.x).toEqual(0);

  class GoodGreeter {
    name: string;

    // the field needs to be initialized in the constructor when using --strictPropertyInitialization
    constructor() {
      this.name = "hello";
    }
  }

  class MyClass {
    name = "MyClass";
    getName = () => {
      return this.name;
    };
  }
  const c = new MyClass();
  const g = c.getName;
  // Prints "MyClass" instead of crashing
  expect(g()).toEqual("MyClass");

  class MyClass2 {
    name = "MyClass";
    getName() {
      return this.name;
    }
  }
  const c2 = new MyClass2();
  const obj = {
    name: "obj",
    getName: c2.getName,
  };
  // Prints "obj", not "MyClass"
  expect(obj.getName()).toEqual("obj");

  // class MyClass {
  //   name = "MyClass";
  //   getName(this: MyClass) {
  //     return this.name;
  //   }
  // }
  // const c = new MyClass();
  // // OK
  // c.getName();

  // // Error, would crash
  // const g = c.getName;
  // console.log(g());
  // The 'this' context of type 'void' is not assignable to method's 'this' of type 'MyClass'.

  class Params {
    constructor(
      public readonly x: number,
      protected y: number,
      private z: number
    ) {
      // No body necessary
    }
  }
  const a = new Params(1, 2, 3);
  expect(a.x).toEqual(1);

  const someClass = class<Type> {
    content: Type;
    constructor(value: Type) {
      this.content = value;
    }
  };
  const m = new someClass("Hello, world");
  expect(m.content).toEqual("Hello, world");
});

test("Constructor Signatures https://www.typescriptlang.org/docs/handbook/2/classes.html#constructor-signatures", () => {
  class Point {
    createdAt: number;
    x: number;
    y: number;
    constructor(x: number, y: number) {
      this.createdAt = Date.now();
      this.x = x;
      this.y = y;
    }
  }
  type PointInstance = InstanceType<typeof Point>;

  function moveRight(point: PointInstance) {
    point.x += 5;
  }

  const point = new Point(3, 4);
  moveRight(point);
  expect(point.x).toEqual(8);
});

test("abstract class", () => {
  abstract class Base {
    abstract getName(): string;

    printName(): string {
      return "hello";
    }
  }

  // Cannot create an instance of an abstract class.ts(2511)
  // const b = new Base();

  class Derived extends Base {
    getName(): string {
      return "world";
    }
  }

  const d = new Derived();
  expect(d.getName()).toEqual("world");

  // function greet(ctor: typeof Base) {
  //   const instance = new ctor();
  //   //Cannot create an instance of an abstract class.
  //   instance.printName();
  // }

  function greet(ctor: new () => Base): string {
    const instance = new ctor();
    return instance.printName();
  }

  // Now TypeScript correctly tells you about which class constructor functions can be invoked - Derived can because it’s concrete, but Base cannot.
  expect(greet(Derived)).toEqual("hello");
  // greet(Base);
});
