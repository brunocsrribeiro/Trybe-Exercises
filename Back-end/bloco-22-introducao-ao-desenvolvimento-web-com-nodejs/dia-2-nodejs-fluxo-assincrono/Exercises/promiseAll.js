const fs = require('fs').promises;

const encoding = 'utf8';

async function toFiles() {
  const strings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

  const createFilePromises = strings
    .map((string, i) => {
      fs.writeFile(`./file_${i +1 }.txt`, string);
  });

  await Promise.all(createFilePromises);

  const fileNames = [
    'file_1.txt',
    'file_2.txt',
    'file_3.txt',
    'file_4.txt',
    'file_5.txt',
  ];

  const fileContents = await Promise.all(
    fileNames
      .map((file) => {
        fs.readFile(file, encoding);
    })
  );

  const newFile = fileContents.join(' ');

  await fs.writeFile('./fileAll.txt', newFile);
}

toFiles();
