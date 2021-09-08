let num1 = '';
let num2 = '';
let num3 = '';

function biggerOfTheThree(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return (num1 + " É o maior dos três números");
  } else if (num2 > num1 && num2 > num3) {
    return (num2 + " É o maior dos três números");
  } else {
    return (num3 + " É o maior dos três números");
  }
}

console.log(biggerOfTheThree(56, 93, 58));