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
  const fileName = await question('File to read: ');

  const originalContent = await fs.readFile(fileName, encoding)
    .catch((e) => {
    console.error(`Error reading file: ${e}`);

    return false;
  });

  if (!originalContent) return;

  const oldWord = await question('Which word do you want to replace? ');
  const newWord = await question('And which word should take its place? ');

  const newContent = originalContent
    .replace(new RegExp(oldWord, 'g'), newWord);

    console.log('Replacement result: ');
    console.log(newContent);

    const destinationPath = await question('Where do you want to save the result? ');
    await fs.writeFile(destinationPath, newContent);

}

startFlow();
