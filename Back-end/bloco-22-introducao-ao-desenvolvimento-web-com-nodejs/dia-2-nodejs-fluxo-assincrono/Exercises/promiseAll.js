const fs = require('fs').promises;

const encoding = 'utf8';

async function toFiles() {
  const strings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

  const createFilePromises = strings
    .map((string, i) => {
      fs.writeFile(`./files${i +1 }.txt`, string);
  });

  await Promise.all(createFilePromises);

  const fileNames = [
    'files1.txt',
    'files2.txt',
    'files3.txt',
    'files4.txt',
    'files5.txt',
  ];

  const fileContents = await Promise.all(
    fileNames
      .map((file) => {
        fs.readFile(file, encoding);
    })
  );

  const newFile = fileContents.join(' ');

  await fs.writeFile('./filesAll.txt', newFile);
}

toFiles();
