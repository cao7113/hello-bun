// https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html

interface Person {
  firstName: string;
  middleName?: string;
  lastName?: string;
}

class Student {
  fullName: string;

  constructor(
    // Also of note, the use of public on parameters to the constructor is a shorthand that allows us to automatically create properties with that name.
    public firstName: string,
    public middleName: string,
    public lastName: string
  ) {
    this.fullName = firstName + " " + middleName + " " + lastName;
  }
}

function greeter(person: Person) {
  return (
    "Hello, " +
    person.firstName +
    " " +
    (person.middleName || "") +
    " " +
    (person.lastName || "")
  );
}

let user = new Student("Jane", "M.", "User");
console.log(greeter(user));
