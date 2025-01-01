function greeter(person: string): string;
function greeter(person: number): string;
function greeter(person: string | number): string {
  if (typeof person === 'string') {
    return "Hello, " + person;
  } else {
    return "Hello, " + person.toString();
  }
}

let user = "Jane User";
let num = 123;

console.log(greeter(user));
console.log(greeter(num));