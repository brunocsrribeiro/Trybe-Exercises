function fatorial(num) {
  let result = 1;
  for(let idx = 1; idx <= num; idx += 1) {
    result *= idx;
  }
  return result;
}
console.log(fatorial(5));
