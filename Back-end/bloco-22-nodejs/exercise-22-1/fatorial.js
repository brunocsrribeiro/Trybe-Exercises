const readline = require('readline-sync');

function performFactorization(num) {
  return [0, 1].includes(num)
    ? 1
    : num * performFactorization(num - 1);
}

function performCalculation() {
  const num = readline.questionInt('Informe o valor: ');
  if (num < 0) {
    console.log('Informe um valor maior que 0');
    return;
  }
  
  console.log(`num: ${num}`);

  const resposta = performFactorization(num);

  console.log(`Resposta: ${resposta}`);
}

performCalculation();
