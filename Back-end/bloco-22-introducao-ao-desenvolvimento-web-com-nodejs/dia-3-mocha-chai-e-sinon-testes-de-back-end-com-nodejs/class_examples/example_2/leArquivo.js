const fs = require('fs');


const encoding = 'utf8';

function leArquivo(fileName) {
  try {
    const fileContent = fs.readFileSync(fileName, encoding);

    return fileContent;
  } catch (e) {
    return null;
  };
}

module.exports = leArquivo;