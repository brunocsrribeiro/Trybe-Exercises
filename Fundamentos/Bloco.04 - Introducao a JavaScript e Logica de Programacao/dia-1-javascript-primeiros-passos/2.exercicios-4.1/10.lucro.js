const custoProduto = 120;
const valorVenda   = custoProduto + ((custoProduto / 100) * 20);
let lucroTotal = (valorVenda - custoProduto) * 1000;

if (custoProduto <= 0 || valorVenda <= 0) {
  return "Erro! Valores inválidos";
} else {
  return "Lucro total da empresa: " + lucroTotal;
}