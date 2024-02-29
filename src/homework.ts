// 1. Given the data below, define a type alias for representing users.

//MAN this one took some googling
type User = {
  name: string;
  age: number;
  company?: string;
}[];

let users: User = [
  {
    name: "Shoha Tsuchida",
    age: 99,
    company: "Coding Temple",
  },
  {
    name: "Dylan Katina",
    age: 99,
  },
];

// 2. Define a type for representing the days of week. Valid values are “Monday”, “Tuesday”, etc.

type Days =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

let day:Days = "Monday";

// 3. Given the Person class below, create a getter for getting the full name of a person.

class Person {
  constructor(public firstName: string, public lastName: string) {}

  fullNamePrint = (): void => console.log(this.firstName, this.lastName);

  fullNameReturn = (): string => `${this.firstName} ${this.lastName}`;
}
const tommy = new Person("Tommy", "Makurat");
tommy.fullNamePrint();
console.log(tommy.fullNameReturn());

// 4. Create a new class called "Employee" that extends "Person" and adds a new property called salary.

class Employee extends Person {
  constructor(firstName: string, lastName: string, protected salary: number) {
    super(firstName, lastName);
  }
}

// 5. Given the data below, define an interface for representing employees:
// HINT: You'll need 2 interfaces.

//I didn't seem to need two interfaces? Did I misinterpret something?
interface info {
    name: string;
    salary: number;
    address: {
        street: string;
        city: string;
        zipCode: number;
    }
}

let employee:info = {
  name: "Christian Askew",
  salary: 1_000_000,
  address: {
    street: "Thieves st",
    city: "Seattle",
    zipCode: 98101,
  },
};
