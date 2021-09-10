let signals = '';

function operations(a, b) {
  switch (signals) {
    case "+":
      return a + b ;
      break;
    case "-":
      return a - b ;
      break;
    case "*":
      return a * b;
      break;
    case "/":
      return a / b;
      break;
    case "%":
      return a % b;
      break;
  
    default:
      return "Erro: Operador inválido!";
      break;
  }
}
signals = "+";
console.log(operations(31, 2));