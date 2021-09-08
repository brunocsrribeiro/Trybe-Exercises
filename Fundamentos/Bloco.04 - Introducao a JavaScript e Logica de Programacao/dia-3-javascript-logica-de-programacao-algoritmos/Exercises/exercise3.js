let lines = 5;
let symbols = "*";
let inputLine = "";
let inputPosition = lines;

for (let lineIdx = 1; lineIdx <= lines; lineIdx += 1) {
  for (let columnsIdx = 1; columnsIdx <= lines; columnsIdx += 1) {
    if (columnsIdx < inputPosition) {
      inputLine += " ";
    } else {
      inputLine += symbols;
    }
  }
  console.log(inputLine);
  inputLine = "";
  inputPosition -= 1;
}