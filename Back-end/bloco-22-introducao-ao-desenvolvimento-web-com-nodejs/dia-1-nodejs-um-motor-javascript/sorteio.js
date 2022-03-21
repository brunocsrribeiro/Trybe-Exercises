const readline = require('readline-sync');

function prizeDraw(chosenNumber, drawnNumber) {

  if (drawnNumber === chosenNumber) {
    return console.log('\nParabéns, número correto!');
  }
  return console.log(`\nOpa, não foi dessa vez. O número era ${drawnNumber}`);
}

function game() {
  const number = parseInt(Math.random() * 10);
  const answer = readline.questionInt(`\nTente a sorte! Escolha um número de 0 a 10 e veja se acerta: `)

  prizeDraw(answer, number);

  const iWantToTryAgain = readline.question(`\nTentar novamente: (y/n)`);

  if (iWantToTryAgain !== 'y') {
    return console.log('OK, até a próxima!');
  }
  game();
}

game();
