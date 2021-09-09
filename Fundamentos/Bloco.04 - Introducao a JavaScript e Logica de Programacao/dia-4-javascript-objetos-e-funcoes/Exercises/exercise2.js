// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

// SOLUÇÂO DO GABARITO
// Utilizei a mesma lógica do gabarito e meu entendimento foi:
 // Ao declarar uma variável (checked) na estrutura da função, que recebe a String da função utilizando o metódo .split('') com uma string vazia, que irá separar essa string por caracteres e retornar uma array, mais o metódo .reverse(), que irá inverter as posições deste array, onde o valor que está na primeira posição do index passa a ocupar a última posição e a última posição passa a ocupar a primeira. Após os metódos  separarem e inverterem as posições o .join(''), com uma string vazia vai unir todos os caracteres formando uma string que ocupará uma única posição dentro da array. Na sequência é utilizada a condicional if que irá comparar se há igualdade entre os valores. Caso a condição seja verdadeira, será retornado true, agora, caso condição seja falsa, ela entra no else e o retorno será false. 
function palindromeCheck(animal) {
  let checked = animal.split('').reverse().join('');
  if (checked === animal) {
    return true;
  } else {
    return false;
  }
}

palindromeCheck('arara');
palindromeCheck('desenvolvimento');

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

// MINHA SOLUÇÃO
function highestArr(arrInt) {
  let highestValue = arrInt.indexOf(Math.max.apply(0, arrInt));
  console.log(highestValue);
}

highestArr([2, 4, 6, 7, 10, 2, -3]);

// SOLUÇÃO GABARITO
function highestArray(arrInt) {
  let highestValues = 0;
  for (let idx in arrInt) {
    if (arrInt[highestValues] < arrInt[idx]) {
      highestValues = idx;
    } 
  }
  console.log(highestValues);
}

highestArray([2, 4, 6, 7, 10, 2, -3]);