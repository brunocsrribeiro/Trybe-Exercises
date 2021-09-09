// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
function repeatingNumber(repeatingNumberInArray) {
  let repeatingNumber = 0;
  let account = 0;
  let accountII = 0;
  for (let idx in repeatingNumberInArray) {
    let checked = repeatingNumberInArray[idx];
    for (let idxII in repeatingNumberInArray) {
      if (checked === repeatingNumberInArray[idxII]) {
        account += 1;
      }
    }
    if (account > accountII) {
      accountII = account;
      repeatingNumber = idx;
    }
    account = 0;
  }
  return repeatingNumberInArray[repeatingNumber];
}

console.log(repeatingNumber([2, 3, 2, 5, 8, 2, 3]));
