// 2 - Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro. Através de um loop for , percorra essa variável, busque os números pares e os adicione a um novo array que deverá ser retornado ao final pela pela função.

let vector =[[1, 2], [3,4,5,6], [7,8,9,10]];

function arrayOfNumbers(vector) {
  let arrEvenNumbers = [];
  for (let idx of vector) {
    for (let ind of idx) {
      if(ind % 2 === 0) {
        arrEvenNumbers.push(ind);
      }
    }
  }
  return arrEvenNumbers;
}
console.log(arrayOfNumbers(vector));