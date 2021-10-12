function encode(strCode) {
  for (let idx in strCode) {
    if (strCode[idx] === 'a') {
      strCode = strCode.replace('a', '1')
    } else if (strCode[idx] === 'e') {
      strCode = strCode.replace('e', '2');
    } else if (strCode[idx] === 'i') {
      strCode = strCode.replace('i', '3');
    } else if (strCode[idx] === 'o') {
      strCode = strCode.replace('o', '4');
    } else if (strCode[idx] === 'u') {
      strCode = strCode.replace('u', '5');
    }
  }
  return strCode;
}

function decode(strDCode) {
  for (let idx in strDCode) {
    if (strDCode[idx] === '1') {
      strDCode = strDCode.replace('1', 'a')
    } else if (strDCode[idx] === '2') {
      strDCode = strDCode.replace('2', 'e');
    } else if (strDCode[idx] === '3') {
      strDCode = strDCode.replace('3', 'i');
    } else if (strDCode[idx] === '4') {
      strDCode = strDCode.replace('4', 'o');
    } else if (strDCode[idx] === '5') {
      strDCode = strDCode.replace('5', 'u');
    }
  }
  return strDCode;
}

module.exports = {encode, decode};