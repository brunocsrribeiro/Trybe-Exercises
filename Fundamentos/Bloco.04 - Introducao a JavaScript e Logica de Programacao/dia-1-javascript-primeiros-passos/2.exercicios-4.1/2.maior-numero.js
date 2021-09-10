let num1 = '';
let num2 = '';
function biggerNumber(num1, num2) {
  if (num1 > num2) {
    return (num1 + " É maior que " + num2);
  } else {
    return (num2 + " É maior que " + num1);
  }
}

console.log(biggerNumber(20, 5));