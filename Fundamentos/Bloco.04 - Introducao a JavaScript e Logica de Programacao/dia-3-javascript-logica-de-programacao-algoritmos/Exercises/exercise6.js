let divisor = 1;
let numberToCheck = 31;

for (let number = 2; number <= numberToCheck; number += 1) {
  if (numberToCheck % number === 0) {
    divisor +=1;
  }
  if (divisor === 2) {
    console.log(`${numberToCheck} é primo!`);
  } else {
    console.log(`${numberToCheck} não é primo!`);
  }
}
