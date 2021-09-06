const num1 = 40;
const num2 = 50;
const num3 = 30;

if (num1 > num2 && num1 > num3) {
  return (num1 + " É o maior dos três números");
} else if (num2 > num1 && num2 > num3) {
  return (num2 + " É o maior dos três números");
} else {
  return (num3 + " É o maior dos três números");
}