const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arrays, name) => arrays.some((arr) => arr === name);

console.log(hasName(names, 'Ana'));
console.log(hasName(names, 'Barney'));