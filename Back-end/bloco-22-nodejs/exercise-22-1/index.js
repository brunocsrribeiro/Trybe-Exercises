const readline = require('readline-sync');

function whichScriptShouldBeRun() {
  const chosenScript = readline.question('Qual script deve ser executado? ');

 if (chosenScript === 'imc') {
   return require('./imc.js');
 }

 if (chosenScript === 'velocidade') {
  return require('./velocidade.js');
 }

 if (chosenScript === 'sorteio') {
  return require('./sorteio.js');
 }

 if (chosenScript === 'fatorial') {
  return require('./fatorial.js');
 }

 if (chosenScript === 'fibonacci') {
   return require('./fibonacci.js');
 }

 if (chosenScript === '') {
  return console.log('Valor inválido!');
}
}

whichScriptShouldBeRun();
