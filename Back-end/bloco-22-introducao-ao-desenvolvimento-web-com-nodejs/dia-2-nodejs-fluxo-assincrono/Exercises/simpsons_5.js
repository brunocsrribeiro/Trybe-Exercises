const fs = require('fs').promises;

const theSimpsons = './simpsonsFamily.json';
const encoding = 'utf8';

async function addNelsonToFamily() {
  const addFamily = await fs
   .readFile(theSimpsons, encoding)
   .then((fileContent) => {
      return JSON.parse(fileContent)
   });

  addFamily.push({ "id": "8","name": "Nelson Muntz" });

  await fs.writeFile(theSimpsons, JSON.stringify(addFamily));
}

addNelsonToFamily();
