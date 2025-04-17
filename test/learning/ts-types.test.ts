import { test, expect } from "bun:test";

// all ts types
// https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html#built-in-types

// There is already a small set of primitive types available in JavaScript:
// boolean, bigint, null, number, string, symbol, and undefined, which you can use in an interface.

// TypeScript extends this list with a few more, such as
// any (allow anything),
// unknown (ensure someone using this type declares what the type is),
// never (it’s not possible that this type could happen), and
// void (a function which returns undefined or has no return value).

test("types by inference", () => {
  // TypeScript knows the JavaScript language and will generate types for you in many cases. For example in creating a variable and assigning it to a particular value, TypeScript will use the value as its type.
  let helloWorld = "Hello World";
  expect(typeof helloWorld).toBe("string");

  typeof undefined === "undefined";
});

test("explicit type", () => {
  // ts type declaration
  interface User {
    name: string;
    id: number;
  }

  const user: User = {
    name: "Hayes",
    id: 0,
  };
  expect(typeof user).toBe("object");

  // work with js class or oo feature
  class UserAccount {
    name: string;
    id: number;

    constructor(name: string, id: number) {
      this.name = name;
      this.id = id;
    }
  }

  const user2 = new UserAccount("Murphy", 1);
  expect(user2.id).toEqual(1);
});

// function deleteUser(user: User) {
//   // ...
// }

// function getAdminUser(): User {
//   //...
// }

// type WindowStates = "open" | "closed" | "minimized";
// type LockStates = "locked" | "unlocked";
// type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

// function getLength(obj: string | string[]) {
//   return obj.length;
// }

// interface Backpack<Type> {
//   add: (obj: Type) => void;
//   get: () => Type;
// }

// // This line is a shortcut to tell TypeScript there is a
// // constant called `backpack`, and to not worry about where it came from.
// declare const backpack: Backpack<string>;

// TypeScript provides another construct called intersection types that is mainly used to combine existing object types.

// An intersection type is defined using the & operator.

// interface Colorful {
//   color: string;
// }
// interface Circle {
//   radius: number;
// }

// type ColorfulCircle = Colorful & Circle;

// type User = Record<"id" | "name" | "email", string>;

// const user: User = {
//   id: "123",
//   name: "Alice",
//   email: "alice@example.com",
// };
