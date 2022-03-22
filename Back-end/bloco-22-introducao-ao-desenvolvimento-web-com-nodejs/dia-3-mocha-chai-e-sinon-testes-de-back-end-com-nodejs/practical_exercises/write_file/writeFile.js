const fs = require('fs');

function writeFile(file, content) {
  fs.writeFile(`${__dirname}/${file}`, content);

  return 'OK';
}

module.exports = writeFile;
