const fs = require('fs').promises;
const readline = require('readline');
const { stdin: input, stdout: output} = require('process');

const encoding ='utf8';

function question(message) {
  const rl = readline.createInterface({ input, output });

 return new Promise((resolve) => {
   rl.question(message, (answer) => {
     rl.close();

     resolve(answer);
   })
 })
}

async function startFlow() {
  const fileName = await question('Digite o arquivo que deseja ler: ');

  try {
    const fileContent = await fs.readFile(fileName, encoding);
    console.log(fileContent);
  } catch (e) {
    console.error('Arquivo inexistente!');
  };
}

startFlow();