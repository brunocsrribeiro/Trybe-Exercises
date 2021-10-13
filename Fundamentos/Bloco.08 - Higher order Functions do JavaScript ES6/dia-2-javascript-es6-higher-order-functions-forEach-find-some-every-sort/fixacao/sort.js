const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];
// Array original
console.log(people);

// Array em ordem crescente
Object.values(people).sort((A, B) => A.age - B.age);
console.log(Object.values(people).sort((A, B) => A.age - B.age));


// Array em ordem decrescente
Object.values(people).sort((A, B) => B.age - A.age);
console.log(Object.values(people).sort((A, B) => B.age - A.age));