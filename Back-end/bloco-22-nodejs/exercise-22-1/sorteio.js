const readline = require('readline-sync');

function sorteio(numeroEscolhido, numeroSorteado) {

  if (numeroSorteado === numeroEscolhido) {
    return console.log('\nParabéns, número correto!');
  }
  return console.log(`\nOpa, não foi dessa vez. O número era ${numeroSorteado}`);
}

function jogo() {
  const numero = parseInt(Math.random() * 10);
  const resposta = readline.questionInt(`\nTente a sorte! Escolha um número de 0 a 10 e veja se acerta: `)

  sorteio(resposta, numero);

  const queroTentarDeNovo = readline.question(`\nTentar novamente: (y/n)`);

  if (queroTentarDeNovo !== 'y') {
    return console.log('OK, até a próxima!');
  }
  jogo();
}

jogo();
