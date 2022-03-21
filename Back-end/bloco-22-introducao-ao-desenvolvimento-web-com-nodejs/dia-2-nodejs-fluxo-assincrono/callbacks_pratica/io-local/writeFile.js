const fs = require('fs').promises;

// fs.writeFile('./myFile.txt', 'Meu textão')
//   .then(() => {
//     console.log('Arquivo escrito com sucesso!');
//   })
//   .catch((e) => {
//     console.error(`Erro ao escrever o arquivo: ${e.message}`);
//   });

// async function main() {
//   try {
//     await fs.writeFile('./myFile.txt', 'Meu textão');
//     console.log('Arquivo escrito com sucesso!');
//   } catch (e) {
//     console.error(`Erro ao escrever o arquivo: ${e.message}`);
//   }
// }

// main();

// Promise.all([
//   fs.readFile('file_1.txt'),
//   fs.readFile('file_2.txt'),
//   fs.readFile('file_3.txt')
// ])
// .then(([file_1, file_2, file_3]) => {
//   const fileSizeSum = file_1.byteLength + file_2.byteLength + file_3.byteLength;
//   console.log(`Lidos 3 arquivos totalizando ${fileSizeSum} bytes`);
// })
// .catch((e) => {
//   console.error(`Erro ao ler arquivos ${e.message}`);
// });


fs.writeFile('./meu-arquivo.txt', 'Eu estive aqui :eyes:', {flag: 'wx'})
  .then(() => {
    console.log('Arquivo salvo');
  })
  .catch((e) => {
    console.error('e');
  });