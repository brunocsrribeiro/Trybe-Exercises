const readline = require('readline-sync');

function mediaVelocidade() {
  const distancia = readline.questionInt('Distancia: ');
  const tempo = readline.questionInt('Tempo: ');

  const media = (distancia / tempo).toFixed(2);

  console.log(`Velocidade média: ${media}`);
}

mediaVelocidade();