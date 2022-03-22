const fs = require('fs').promises;

const theSimpsons = './simpsons.json';
const encoding = 'utf8';

async function simpsonFamily() {
  const characterSimpsons = await fs.readFile(theSimpsons, encoding)
    .then((fileContent) => JSON.parse(fileContent));

  const simpsonsFamily = './simpsonsFamily.json';

  const newArray = Array
    .from({ length: 5 }, (a, b) => b);

  const createFamily = characterSimpsons
    .filter((simpson) => newArray.toString().includes(simpson.id));

  await fs.writeFile(simpsonsFamily, JSON.stringify(createFamily));
}

simpsonFamily();