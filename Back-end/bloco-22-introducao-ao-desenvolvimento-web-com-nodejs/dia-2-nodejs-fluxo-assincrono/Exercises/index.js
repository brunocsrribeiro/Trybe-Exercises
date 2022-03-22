function exerciseMathPromise(a, b, c) {
  console.log(a, b, c);
  const promise = new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
      reject(new Error('Informe apenas números'));
    }
    const result = ((a + b) * c);
    if (result < 50) {
      return reject(new Error('Valor muito baixo'))
    }
    resolve(result);
  });
  return promise;
}

function randomNumberGenerator() {
  return Math.floor(Math.random() * 100 + 1);
}

// function callNumbers() {
//   const randomNumber = Array.from({length: 3}, randomNumberGenerator);

//   exerciseMathPromise(...randomNumber)
//     .then((result) => console.log(result))
//     .catch((e) => console.error(e.message));
// }

async function callNumbersAsync() {
  const randomNumber = Array.from({length: 3}, randomNumberGenerator);

  try {
    const newResult = await exerciseMathPromise(...randomNumber);
    console.log(newResult);
  } catch(e) {
    console.error(e.message)
  }
}

// callNumbers();
callNumbersAsync();