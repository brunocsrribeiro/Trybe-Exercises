const readline = require('readline-sync');

function calcula_imc() {
  const peso = readline.questionFloat('Qual é seu peso? ');
  const altura = readline.questionFloat('Qual é sua altura? ');

  const imc = (peso / Math.pow(altura, 2)).toFixed(2);

  console.log(`\nIMC: ${imc}`);

  if (imc >= 40.0) {
    console.log(`\n${imc}: Obesidade graus III e IV`);
  } 
  
  if (imc >= 35.0 && imc <= 39.9) {
    console.log(`\n${imc}: Obesidade graus II`);
  }
  
  if (imc >= 30.0 && imc <= 34.9) {
    console.log(`\n${imc}: Obesidade graus I`);
  }
  
  if (imc >= 25.0 && imc <= 29.9) {
    console.log(`\n${imc}: Acim do peso (sobrepeso)`);
  }
  
  if (imc >= 18.5 && imc <= 24.9 ) {
    console.log(`\n${imc}: Peso normal`);
  } else {
    console.log(`\n${imc}: Abaixo do peso (magreza)`);
  }
}

calcula_imc();
