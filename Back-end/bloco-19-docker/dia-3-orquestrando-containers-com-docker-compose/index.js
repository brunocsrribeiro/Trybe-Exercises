function main() {
  const erro = new Error('Ops!');
  console.log(erro.message);
  console.log(erro.name);
  console.log(erro.stack);
}

main();