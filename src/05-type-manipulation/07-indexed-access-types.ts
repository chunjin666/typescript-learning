type Person = { age: number; name: string; alive: boolean };
type Age = Person["age"];
//   ^ = type Age = number

type I1 = Person["age" | "name"];
//   ^ = type I1 = string | number


type I2 = Person[keyof Person];
//   ^ = type I2 = string | number | boolean

type AliveOrName = "alive" | "name";
type I3 = Person[AliveOrName];
//   ^ = type I3 = string | boolean

type I4 = Person["alve"]; // Property 'alve' does not exist on type 'Person'.


// ------------------------------------------
const MyArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
];

// 和下面的方式等价，有点懵B
type MyArrayType = typeof MyArray[0];
type User = typeof MyArray[number];
//   ^ = type User = {
//       name: string;
//       age: number;
//   }
type Age2 = typeof MyArray[number]["age"];
//   ^ = type Age2 = number
// Or
type Age3 = User["age"];
//   ^ = type Age3 = number