const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
const addNightShiftLessons2 = (objLesson2, key, value) => objLesson2[key] = value;

addNightShiftLessons2(lesson2, 'turno', 'noite');

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const listObjectKeys = (listKeys) => Object.keys(listKeys);

listObjectKeys(lesson2);

// Crie uma função para mostrar o tamanho de um objeto.
const lengthObject = (lengthObj) => Object.keys(lengthObj).length;

lengthObject(lesson3);

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const listObjectValues = (listValues) => Object.values(listValues);

listObjectValues(lesson3);

// Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

console.log(allLessons);

// Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
const sumStudents = (lessons) => {
  let total = 0;
  let arr = Object.keys(lessons);

  for(idx in arr) {
    total += lessons[arr[idx]].numeroEstudantes;
  }
  return total;
}

console.log(sumStudents(allLessons));

// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.
const orderedObjectValue = (order, position) => Object.values(order)[position];

console.log(orderedObjectValue(lesson1, 0));

// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.
const verifyObject = (obj, key, value) => {
  const arr = Object.entries(obj);
  let compare = false;

  for (idx in arr) {
    if (arr[idx][0] === key && arr[idx][1] === value) compare = true;
  }
  return compare;
}
console.log(verifyObject(lesson2,'professor','Carlos'));
console.log(verifyObject(lesson3, 'materia', 'Portugues'));