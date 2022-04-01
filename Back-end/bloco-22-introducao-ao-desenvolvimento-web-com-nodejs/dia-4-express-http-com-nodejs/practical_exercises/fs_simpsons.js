const fs = require('fs').promises;

const theSimpsons = './simpsons.json';
const encoding = 'utf-8';

function getSimpsons() {
  return fs.readFile(theSimpsons, encoding)
    .then(fileContent => JSON.parse(fileContent));
};

function setSimpsons(newCharacter) {
  return fs.writeFile(
    theSimpsons, 
    JSON.stringify(newCharacter)
  );
};

module.exports = { getSimpsons, setSimpsons };
