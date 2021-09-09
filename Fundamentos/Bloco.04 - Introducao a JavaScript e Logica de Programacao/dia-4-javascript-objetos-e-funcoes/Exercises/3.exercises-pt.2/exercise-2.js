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

highestArray([2, 3, 6, 7, 10, 1]);
