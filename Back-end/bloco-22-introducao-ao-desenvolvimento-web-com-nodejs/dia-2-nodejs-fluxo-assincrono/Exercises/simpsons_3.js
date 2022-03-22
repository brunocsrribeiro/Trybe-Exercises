const fs = require('fs').promises;

const theSimpsons = './simpsons.json';
const encoding = 'utf8';

async function filterCharacter() {
  const characterSimpsons = await fs.readFile(theSimpsons, encoding)
    .then((fileContent) => JSON.parse(fileContent));

  chosenSimpsons = characterSimpsons.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');

  await fs.writeFile(theSimpsons, JSON.stringify(chosenSimpsons));
}

filterCharacter();