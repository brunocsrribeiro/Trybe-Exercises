const fs = require('fs').promises;

const theSimpsons = './simpsonsFamily.json';
const encoding = 'utf8';

function replaceNelsonWithMaggie() {
  const replace = fs.readFile(theSimpsons, encoding)
    .then((fileContent) => {
      return JSON.parse(fileContent);
    })
    .then((nelsonMuntz) => {
      return nelsonMuntz.filter((nelson) => {
        return nelson.id !== '8';
      })
    })
    .then((simpsonsNelson) => {
      return simpsonsNelson.concat([{ id: '8', name: 'Maggie Simpson' }]);
    })
    .then((simpsonsMaggie) => {
      fs.writeFile(theSimpsons, JSON.stringify(simpsonsMaggie));
    })
}

replaceNelsonWithMaggie();
