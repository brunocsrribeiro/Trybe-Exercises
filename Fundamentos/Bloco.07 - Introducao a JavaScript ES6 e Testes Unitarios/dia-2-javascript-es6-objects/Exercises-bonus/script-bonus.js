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

// Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

console.log(allLessons);

// Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. 
const sumStudentsOfMath = (lessons) => {
  let total = 0;
  let arr = Object.keys(lessons);
  let materia = 'Matemática';

  for(idx in arr) {
    if(lessons[arr[idx]].materia === materia) {
      total += lessons[arr[idx]].numeroEstudantes;
    }
  }
  return total;
}

console.log(sumStudentsOfMath(allLessons));
