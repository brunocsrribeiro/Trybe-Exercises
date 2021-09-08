let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];
let indexOfPortfolio = menu.indexOf('Portfólio');

menu.push('Contato');
 
console.log(menuServices);
console.log(indexOfPortfolio);
console.log(menu);

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let idx = 0; idx < groceryList.length; idx += 1) {
  console.log(groceryList[idx]);
}

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (const name of names) {
  console.log(names);
}