const angle = [110, 45, 25];
let triangle = angle.reduce(function(triangle, angle) { return triangle + angle; }, 0);

if (triangle === 180) {
   console.log(true);
 } else if (triangle !== 180) {
    console.log(false);
 } else {
    console.log('Erro: Ângulo inválido!');
 }