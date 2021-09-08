let lines = 13;
let symbols = "*";
let inputLine = "";
let middleTriangle = (lines + 1)/2;
let controlRight = middleTriangle;
let controlLeft = middleTriangle;

for (let lineIdx = 0; lineIdx <= middleTriangle; lineIdx += 1) {
  for (let columnsIdx = 1; columnsIdx <= lines; columnsIdx += 1) {
    if (columnsIdx > controlLeft && columnsIdx < controlRight) {
      inputLine += symbols;
    } else {
      inputLine += " ";
    }
  }
  console.log(inputLine);
  inputLine = "";
  controlRight += 1;
  controlLeft -= 1;
}
