let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge'
}

for (let idx in names) {
  console.log(`Olá ${names[idx]}`);
}

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
}

for (let index in car) {
  console.log(index);
}