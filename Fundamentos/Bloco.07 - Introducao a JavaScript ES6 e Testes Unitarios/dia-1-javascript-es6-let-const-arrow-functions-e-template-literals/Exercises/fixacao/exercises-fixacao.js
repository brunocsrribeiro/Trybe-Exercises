// Código de teste
// function testingScope(escopo) {
//   if (escopo === true) {
//     var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//     console.log(ifScope);
//   } else {
//     var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
//   console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
// }

// testingScope(true);

// Código refatorado
const testingScope = escopo => (
  escopo === true ? `Não devo ser utilizada fora do meu escopo (if)` : `Não devo ser utilizada fora meu escopo (else)`
);

console.log(testingScope(true));
console.log(testingScope(false));


const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
let order = oddsAndEvens.sort((a, b) => a - b);
console.log(`Assim ficará o array ordenado: ${order}`); // será necessário alterar essa linha 😉