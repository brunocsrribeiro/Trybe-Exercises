const readline = require('readline-sync');

function calculateElement(qty) {
  let num_1 = 1;
  let num_2 = 1;

  for (i = qty; i >= 0; i -= 1) {
    if (num_2) {
      console.log(num_2);
    }

    const temp = num_1;

    num_1 = num_1 + num_2;

    num_2 = temp;
  }

  console.log(num_2);
  return num_2;
}

function performCalculation() {
  const n = readline.questionInt('Digite um valor: ');

  if (n <= 0) {
    console.log('Digite um valor maior que 0!');
    return;
  }

  console.log(`n: ${n}`);
  calculateElement(n - 2);
}

performCalculation();
