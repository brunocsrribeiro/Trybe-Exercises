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