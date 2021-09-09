// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
function biggestName(name) {
  let checked = '';
  for (let idx in name) {
    if (checked.length < name[idx].length) {
      checked = name[idx];
    }
  }
  return checked;
}
console.log(biggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
