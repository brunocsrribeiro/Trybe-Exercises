const fs = require('fs').promises;

const theSimpsons = './simpsons.json';
const encoding = 'utf8';

async function findCharacterById(id) {
  const characterSimpsons = await fs.readFile(theSimpsons, encoding)
    .then((fileContent) => JSON.parse(fileContent));

  const chosenSimpsons = characterSimpsons.find((simpson) => simpson.id === id);

  if (!chosenSimpsons) {
    throw new Error('Id não encontrado!');
  }

  return chosenSimpsons;
}

findCharacterById('9');