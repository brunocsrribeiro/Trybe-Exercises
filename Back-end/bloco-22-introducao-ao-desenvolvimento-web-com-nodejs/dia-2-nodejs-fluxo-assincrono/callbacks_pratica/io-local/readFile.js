// const fs = require('fs');

// const fileName = './myFile.txt';

// fs.readFile(fileName, 'utf8', (err, data) => {
//   if (err) {
//     console.error(`Could not read file ${fileName}\n Error: ${err}`);
//     process.exit(1);
//   }

//   console.log(`File Contents: ${data}`);
// })

const fs = require('fs').promises;

const fileName = 'myFile.txt';

fs.readFile(fileName, 'utf8')
  .then((data) => {
    console.log(`File Contents: ${data}`);
  })
  .catch((e) => {
    console.error(`Could not read file ${fileName}\n Error: ${e}`);
    process.exit(1);
  });
