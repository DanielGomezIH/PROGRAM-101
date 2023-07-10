interface Person {
  name: string;
  age: number;
  isActive: boolean;
}

export let daniel: Person = {
  name: "Daniel",
  age: 19,
  isActive: true,
};

let julian: Person = {
  name: "Julián",
  age: 23,
  isActive: true,
};

let laura: Person = {
  name: "Laura",
  age: 26,
  isActive: true,
};

let people: Person[] = [daniel, julian, laura];

for (let i = 0; i <= people.length - 1; i++) {
  let person = people[i];
  console.log(person.name + " " + person.age);
}
