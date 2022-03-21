function calcularDivisao(n1, n2) {
  const promise = new Promise((resolve, reject) => {
    if (n2 == 0) reject(new Error('Não pode ser feito uma divisão por zero!'));

    const resultado = n1 / n2;

    resolve(resultado);
  });

  return promise;
}

calcularDivisao(4, 3)
  .then((result) => console.log(result))
  .catch((err) => console.log(err.message));