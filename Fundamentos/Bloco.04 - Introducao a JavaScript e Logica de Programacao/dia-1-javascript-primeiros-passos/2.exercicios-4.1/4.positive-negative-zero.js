const isValid = "";

function constantValue(isValid) {
  switch (isValid) {
    case "positivo":
      return "positive";
      break;
    case "negativo":
      return "negative";
      break;
    default:
      return "zero";
      break;
  }
}
console.log(constantValue("zero"));