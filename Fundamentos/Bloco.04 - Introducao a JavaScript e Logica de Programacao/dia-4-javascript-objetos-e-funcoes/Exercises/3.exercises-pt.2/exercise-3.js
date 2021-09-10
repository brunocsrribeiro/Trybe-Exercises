// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
function smallerArr(arrInt) {
  let lowerValue = arrInt.indexOf(Math.min.apply(0, arrInt));
  console.log(lowerValue);
}

smallerArr([2, 4, 6, 7, 10, 2, -3]);
