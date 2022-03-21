function main(a, b, c) {
  const promise = new Promise((resolve, reject) => {
    if (typeof(a) !== 'number' || typeof(b) !== 'number' || typeof(c) !== 'number') {
      return reject(new Error('Informe apenas números'));
    }
    const result = ((a + b) * c);
    if (result < 50) {
      return reject(new Error('Valor muito baixo'))
    }
    resolve(result);
  });
  return promise;
}

main(9, 5, 5)
  .then((result) => console.log(`O valor é: ${result}`))
  .catch((e) => console.log(e.message));
  