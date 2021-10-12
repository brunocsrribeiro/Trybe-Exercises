
const button = document.querySelector('#btnCount');

let count = 0;
let text = document.getElementById('txt');

button.addEventListener('click', () => text.innerHTML = count += 1);

