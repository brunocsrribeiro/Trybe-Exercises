function calcularDivisao(n1, n2) {
  if (n2 == 0) throw new Error('Não pode ser feito uma divisão por zero!');

  const resultado = n1 / n2;

  return resultado;
}

try {
  const resultado = calcularDivisao(4,2);
  console.log(`Resultado: ${resultado}`);
} catch (e) {
  console.log(`Erro: ${e.message}`);
}