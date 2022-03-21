const fs = require('fs');

function readFilePromise(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, content) => {
      if (err) return reject(err);

      resolve(content);
    });
  });
}


readFilePromise('file_1.txt')
  .then((content) => {
    console.log(`Lido file_1.txt com ${content.byteLength} bytes.`);
    return readFilePromise('file_2.txt');
  })
  .then((content) => {
    console.log(`Lido file_2.txt com ${content.byteLength} bytes.`);
    return readFilePromise('file_3.txt');
  })
  .then((content) => {
    console.log(`Lido file_3.txt com ${content.byteLength} bytes.`);
  })
  .catch((err) => {
    console.error(`Erro ao ler arquivo: ${err.message}`);
  })