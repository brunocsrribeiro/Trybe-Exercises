// Exercício 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for ( let idx = 0; idx < numbers.length; idx += 1) {
  console.log("");
  console.log("Exercicio 1");
  console.log(numbers[idx]);
}

// Exercício 2
// Ref: https://www.devmedia.com.br/javascript-reduce-reduzindo-uma-colecao-em-um-unico-objeto/37981 - Nesse artigo pude entender melhor como utilizar a função .reduce() para somar todos os elementos de um array. E as maneiras como utlizar.

// código sem a função .reduce()
let soma = 0;
for (let idx = 0; idx < numbers.length; idx += 1) {
  soma += numbers[idx];
  console.log("");
  console.log("Exercicio 2 - sem função reduce");
  console.log(soma);
}


// códigos com a função .reduce()
let total = numbers.reduce(function(total, numbers) {
  return total + numbers;
}, 0);
console.log("");
console.log("Exercicio 2 - função reduce 1");
console.log(total);

let somarArr = numbers.reduce((somarArr, numbers) => somarArr + numbers, 0);
console.log("Exercicio 2 - função reduce 2");
console.log(somarArr);

// Exercício 3
let mediaAritmetica = numbers.reduce((mediaAritmetica, numbers) => mediaAritmetica + numbers, 0);
console.log("");
console.log("Exercicio 3");
console.log(mediaAritmetica / numbers.length);

// Exercício 4
if (mediaAritmetica > 20) {
  console.log("valor maior que 20");
} else {
  console.log("valor menor ou igual a 20");
}

// Exercício 5
let maiorNumero = 0;
for (let idx = 0; idx < numbers.length; idx += 1) {
  let testeNumero = numbers[idx];
  if (testeNumero > maiorNumero) {
    maiorNumero = testeNumero;
  } 
}
console.log(maiorNumero);

// Exercício 6
let numerosImpares = 0;
for (let idxImp = 0; idxImp < numbers.length; idxImp += 1) {
  let testeNumero = numbers[idxImp];
  if (testeNumero %  2 !== 0) {
    numerosImpares += 1;
  }

  if (numerosImpares === 0) {
    console.log("nenhum valor ímpar encontrado");
  } else {
    console.log(numerosImpares);
  }
}

// Exercício 7
let menorNumero = Math.min.apply(0, numbers);
for (let idxMenor = 0; idxMenor < numbers.length; idxMenor += 1) {
  let testeMenor = numbers[idxMenor];
  if (testeMenor <= menorNumero) {
    menorNumero = testeMenor;
  }
}
console.log(menorNumero);

// Exercício 8
let arrNumbers = [];
let number = 25;
for (let index = 1; index <= number; index += 1) {
  arrNumbers.push(index);
}
console.log(arrNumbers);

// Exercício 9
for (let arrNumber of arrNumbers) {
  console.log(arrNumber / 2);
}

// BÔNUS

// Bônus 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let arrNum = 1; arrNum < numbers.length; arrNum += 1) {
  for (let secondArrNum = 0; secondArrNum < arrNum; secondArrNum += 1) {
    if (numbers[arrNum] < numbers[secondArrNum]) {
      let posicao = numbers[arrNum];
      numbers[arrNum] = numbers[secondArrNum];
      numbers[secondArrNum] = posicao;
    }
  }
}
console.log(numbers);

// Bônus 2
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let arrNum = 1; arrNum < numbers.length; arrNum += 1) {
  for (let secondArrNum = 0; secondArrNum < arrNum; secondArrNum += 1) {
    if (numbers[arrNum] > numbers[secondArrNum]) {
      let posicao = numbers[arrNum];
      numbers[arrNum] = numbers[secondArrNum];
      numbers[secondArrNum] = posicao;
    }
  }
}
console.log(numbers);

// Bônus 3
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let arrMultiplica = [];
for (let indMulti = 0; indMulti < numbers.length; indMulti += 1) {
  arrMultiplica.push(numbers[indMulti] * numbers[indMulti + 1] || 2);
}
console.log(arrMultiplica);