const fs = require('fs').promises;

const theSimpsons = './simpsons.json';
const encoding = 'utf8';

fs.readFile(theSimpsons, encoding)
  .then((fileContent) => {
    return JSON.parse(fileContent);
  })
  .then((simpsons) => {
    return simpsons.map((simpson) => `${simpson.id} - ${simpson.name}`);
  })
  .then((strings) => {
    return strings.forEach(string => console.log(string));
  });