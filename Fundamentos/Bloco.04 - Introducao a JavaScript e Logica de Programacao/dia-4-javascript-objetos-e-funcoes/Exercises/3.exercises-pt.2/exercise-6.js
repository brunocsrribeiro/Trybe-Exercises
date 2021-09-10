// 6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
function addingNumbers(numbers) {
  let result = 0;
  for (let idx = 1; idx <= numbers; idx += 1) {
    result += idx;
  }
  return result;
}

console.log(addingNumbers(5));
