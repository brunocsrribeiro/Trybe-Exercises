let lines = 7;
let middle = (lines + 1) / 2;
let controlRight = middle;
let controlLeft = middle;
let symbol = "*";

for (let lineIdx = 1; lineIdx <= middle; lineIdx += 1) {
  let outputLine = "";
  for (let columnsIdx = 1; columnsIdx <= lines; columnsIdx += 1) {
    if (columnsIdx == controlLeft || columnsIdx == controlRight || lineIdx == middle) {
      outputLine += symbol;
    } else {
      outputLine += " ";
    }
  }
  controlLeft -= 1;
  controlRight += 1;
  console.log(outputLine);
}
