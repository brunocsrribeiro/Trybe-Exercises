// 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .

// SOLUÇÃO GABARITO
// Com a ajuda do Airton Lopes, consegui compreender toda a lógica da função. Tive dificuldade para entender a lógica que foi aplicada na condicional if. Porém com a ajuda ficou claro.
function checkEndWord(word, ending) {
  word = word.split('');
  ending = ending.split('');
  control = true;
  for (let idx = 0; idx < ending.length; idx += 1) {
    if (word[word.length - ending.length + idx] !== ending[idx]) {
      control = false;
      break;
    }
  }
  return control;
}

console.log(checkEndWord('trybe', 'be'));
console.log(checkEndWord('joaofernando', 'fernan'));
