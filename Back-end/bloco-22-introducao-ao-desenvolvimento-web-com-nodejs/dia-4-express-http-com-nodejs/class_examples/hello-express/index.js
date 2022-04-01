const express = require('express');

const app = express(); // Cria uma nova aplicação Express;

app.get('/hello', handleHelloWorldRequest); // Dizer ao Express que, quando uma requisição com método GET for recebida no caminho /hello , a função handleHelloWorldRequest deve ser chamada;

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
}); // Pede ao Express que crie um servidor HTTp e escute por requisições na porta 3001;

function handleHelloWorldRequest(_request, response) {
  response.status(200).send('Olá, mundão!'); // Ao tratar uma requisição com método GET no caminho /hello , enviar o status HTTP 200 que significa OK e a mensagem "Hello world!".
}
