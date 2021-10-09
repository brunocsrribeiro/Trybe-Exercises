const createDaysOfTheWeek = () => {
  const weekDaysList = document.querySelector('.week-days');
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};
createDaysOfTheWeek();

// Função para criar dias do mês e suas classes especificas
const createDaysOfTheMonth = () => {
  const daysMonth = document.querySelector('#days');
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  for(let idx = 0; idx < dezDaysList.length; idx += 1) {
    const dayMonth = dezDaysList[idx];
    const dayMonthListItem = document.createElement('li');

    if (dayMonth === 24 | dayMonth === 31) {
      dayMonthListItem.classList = 'day holiday';
      dayMonthListItem.innerHTML = dayMonth;
      daysMonth.appendChild(dayMonthListItem);
    } else if (dayMonth === 4 | dayMonth === 11 | dayMonth === 18) {
      dayMonthListItem.classList = 'day friday';
      dayMonthListItem.innerHTML = dayMonth;
      daysMonth.appendChild(dayMonthListItem);
    } else if (dayMonth === 25) {
      dayMonthListItem.classList = 'day holiday friday';
      dayMonthListItem.innerHTML = dayMonth;
      daysMonth.appendChild(dayMonthListItem);
    } else {
      dayMonthListItem.innerHTML = dayMonth;
      dayMonthListItem.classList = 'day';
      daysMonth.appendChild(dayMonthListItem);
    }
  }
}
createDaysOfTheMonth();

// Função para criar botão feriado
const createButtonHoliday = (btnHoliday) => {
  const buttons = document.querySelector('.buttons-container');
  const createButton = document.createElement('button');
  createButton.innerText = btnHoliday;
  createButton.id = 'btn-holiday';
  buttons.appendChild(createButton);
}
createButtonHoliday('Feriados');

const getHoliday = () => {
  const getButton = document.querySelector('#btn-holiday');
  const getHoliday = document.querySelectorAll('.holiday');

  getButton.addEventListener('click', () => {
    for(let idx = 0; idx < getHoliday.length; idx += 1) {
      if(getHoliday[idx].style.backgroundColor === 'white') {
        getHoliday[idx].style.backgroundColor = 'rgb(238,238,238)';
      } else {
        getHoliday[idx].style.backgroundColor = 'white';
      }
    }
  });
}
getHoliday();

// Função para criar botão friday
const createButtonFriday = (btnFriday) => {
  const buttons = document.querySelector('.buttons-container');
  const createButton = document.createElement('button');
  createButton.innerText = btnFriday;
  createButton.id = 'btn-friday';
  buttons.appendChild(createButton);
}
createButtonFriday('Sexta-feira');

const getFriday = (friday) => {
  const getButtonFriday = document.querySelector('#btn-friday');
  const getFriday = document.querySelectorAll('.friday');
  const mufasa = `It's Friday then`;

  getButtonFriday.addEventListener('click', () => {
    for(let idx = 0; idx < getFriday.length; idx += 1) {
      if(getFriday[idx].innerHTML !== mufasa) {
        getFriday[idx].innerHTML = mufasa;
      } else {
        getFriday[idx].innerHTML = friday[idx];
      }
    }
  });
}
let fridays = [4, 11, 18, 25];
getFriday(fridays);

const dayMouseOver = () => {
  const daysOver = document.querySelector('#days');
  daysOver.addEventListener('mouseover', (evt) => {
    evt.target.style.fontSize = '25px';
    evt.target.style.fontWeight = '600';
  });
};

const dayMouseOut = () => {
  const daysOut = document.querySelector('#days');
  daysOut.addEventListener('mouseout', (evt) => {
    evt.target.style.fontSize = '20px';
    evt.target.style.fontWeight = '200';
  });
};
dayMouseOver();
dayMouseOut();

const tasks = (task) => {
  const tasksContainer = document.querySelector('.my-tasks');
  const taskName = document.createElement('span');

  taskName.innerHTML = task;
  tasksContainer.appendChild(taskName);
};
tasks('Ler');

const taskDiv = (color) => {
  const tasksContainer = document.querySelector('.my-tasks');
  const newTask = document.createElement('div');

  newTask.classList = 'task';
  newTask.style.backgroundColor = color;
  tasksContainer.appendChild(newTask);
};
taskDiv('red');

const taskClass = () => {
  const selectedTask = document.getElementsByClassName('task selected');
  const myTasks = document.querySelector('.task');
  myTasks.addEventListener('click', function(evt) {
    if (selectedTask.length === 0) {
      evt.target.classList = 'task selected';
    } else {
      evt.target.classList = 'task';
    }
  });
};
taskClass();

const setDayColor = () => {
  const selectedTask = document.getElementsByClassName('task selected');
  const days = document.querySelector('#days');
  const taskDiv = document.querySelector('.task');
  const taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function(evt){
    const eventTargetColor = evt.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      const color = selectedTask[0].style.backgroundColor;
      evt.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      evt.target.style.color = 'rgb(119,119,119)';
    }
  });
};
setDayColor();

const addNewTask = () => {
  const getInputField = document.querySelector('#task-input');
  const addInputButton = document.querySelector('#btn-add');
  const getTaskList = document.querySelector('.task-list');

  addInputButton.addEventListener('click', function() {
    if (getInputField.value.length > 0) {
      const newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    } else {
      alert('Error: Digite ao menos 1 caractere.');
    }
  })

  getInputField.addEventListener('keyup', function(event) {
    if (event.keyCode === 13 && getInputField.value.length > 0) {
      const newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    }
  });
};
addNewTask();
