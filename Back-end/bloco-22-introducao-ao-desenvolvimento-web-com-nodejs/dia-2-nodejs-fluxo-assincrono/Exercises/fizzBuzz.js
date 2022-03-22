function fizzBuzz(num) {
  return new Promise((resolve, reject) => {
    if (num % 3 === 0 && num % 5 === 0) {
      return resolve('FizzBuzz');
    } else if (num % 3 === 0) {
      return resolve('Fizz');
    } else if (num % 5 === 0) {
      return resolve('Buzz');
    }

    reject(num);
  });
}

fizzBuzz(1).catch(console.error);
fizzBuzz(3).then(console.log);
fizzBuzz(5).then(console.log);
fizzBuzz(15).then(console.log);