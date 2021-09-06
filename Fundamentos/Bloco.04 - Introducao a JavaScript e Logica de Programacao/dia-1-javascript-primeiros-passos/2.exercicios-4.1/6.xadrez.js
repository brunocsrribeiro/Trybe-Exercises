let chess = "HORSE";

switch (chess.toLowerCase()) {
  case "bishop":
    console.log("Diagonals");
    break;
  case "horse":
    console.log("L");
    break;
  case "tower":
    console.log("Verticals");
    break;
  default:
    console.log("Valor não identificado!");
    break;
}
