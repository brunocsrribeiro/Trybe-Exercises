// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
function palindromeCheck(animal) {
  let checked = animal.split('').reverse().join('');
  if (checked === animal) {
    return true;
  } else {
    return false;
  }
}

console.log(palindromeCheck('arara'));
console.log(palindromeCheck('desenvolvimento'));

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
function highestValue(arrInt) {
    return arrInt.indexOf(Math.max.apply(0, arrInt));
}

console.log(highestValue([2, 4, 6, 7, 10, 0, -3]));
