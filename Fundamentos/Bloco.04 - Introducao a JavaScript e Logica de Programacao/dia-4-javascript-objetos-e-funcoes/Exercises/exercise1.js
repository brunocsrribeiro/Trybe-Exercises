let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
}

// 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:
console.log(`Bem-vinda ${info.personagem}`);
console.log('\n');

// 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:
info['recorrente'] = 'Sim';
console.log('\n');

// 3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:
for (const index in info) {
  console.log(index);
}
console.log('\n');

// 4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:
for (let index in info) {
  console.log(info[index]);
}
console.log('\n');

// 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:
let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
  nota: 'O último MacPatinhas'
}

info2['recorrente'] = 'Sim';

for (let index in info) {
  if (
    index === 'recorrente' &&
    info[index] === 'Sim' &&
    info2[index] === 'Sim'
  ) {
    console.log('Ambos recorrentes');
  } else {
    console.log(`${info[index]} e ${info2[index]}`);
  }
}



