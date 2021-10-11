// 1 - (Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.
// Atenção! Esse exercício já apareceu no processo seletivo de uma grande multinacional!
// Dicas:
// Uma string é um array de caracteres, então cada elemento do array é uma letra.
// O valor de cada numeral romano é:
// Que tal criar um objeto que associe cada letra a um numeral para fácil consulta?
// Atenção! Quando você tem um número pequeno à direita de um número grande, eles devem ser somados. Exemplo: XI = 10 + 1 = 11. No entanto, se o número pequeno está à esquerda de um número maior que ele, ele deve ser subtraído. Exemplo: IX = 10 - 1 = 9.

// SOLUÇÃO GABARITO

// A solução segue a lógica do gabarito. tentarei a partir dela desenvolver outra lógica. Mas, de momento vou usar essa para concluir o exercício, pois entendo como funciona a função. Minha única dúvida esta apenas no porque a variável idx do for iniciasse com o valor 2. Fora isso todo o código é funcional.
const romanNumbers = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}

function sumRomanNumbers(addRomanNumerals) {
  addRomanNumerals = addRomanNumerals.toUpperCase();
  const RomanNum = addRomanNumerals.length;
  let sumNumber = romanNumbers[addRomanNumerals[RomanNum -1]];
  let actualNumber = romanNumbers[addRomanNumerals[RomanNum -1]];
  for (let idx = 2; idx <= RomanNum; idx += 1) {
    const romans = romanNumbers[addRomanNumerals[RomanNum - idx]];
    if (actualNumber <= romans) {
      sumNumber += romans;
    } else {
      sumNumber -= romans;
    }
    actualNumber = romans;
  }
     return sumNumber;
}

console.log(sumRomanNumbers("mcmlxxxv"));
console.log(sumRomanNumbers("mmxxi"));
console.log(sumRomanNumbers("mcmlxxxvi"));
