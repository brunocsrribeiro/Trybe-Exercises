const salarioBruto = 6000.00;
let salarioLiquido = null;

if (salarioBruto <= 1556.94) {
  salarioLiquido = salarioBruto - ((salarioBruto / 100) * 8);
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
  salarioLiquido = salarioBruto - ((salarioBruto / 100) * 9);
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
  salarioLiquido = salarioBruto - ((salarioBruto / 100) * 11);
} else if (salarioBruto > 5189.82) {
  salarioLiquido = salarioBruto - 570.88;
}

let resultado = salarioLiquido;

if (resultado <= 1903.98) {
  return "Isento de Imposto de Renda";
} else if (resultado >= 1903.99 && resultado <= 2826.65) {
  resultado = resultado - ((resultado / 100) * 7.5 - 142.80);
  return "O seu sálario líquido é: " + resultado;
} else if (resultado >= 2826.66 && resultado <= 3751.05) {
  resultado = resultado - ((resultado / 100) * 15 - 354.80);
  return "O seu sálario líquido é: " + resultado;
} else if (resultado >= 3751.0 && resultado <= 4664.68) {
  resultado = resultado - ((resultado / 100) * 22.5 - 636.13);
  return "O seu sálario líquido é: " + resultado;
} else if (resultado > 4664.68) {
  resultado = resultado - ((resultado / 100) * 27.5 - 869.36);
  return "O seu sálario líquido é: " + resultado;
}
