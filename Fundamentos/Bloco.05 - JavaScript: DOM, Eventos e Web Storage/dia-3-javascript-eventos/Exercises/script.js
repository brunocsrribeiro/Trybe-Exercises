function createDaysOfTheWeek() {
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
function createDaysOfTheMonth() {
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
function createButtonHoliday(btnHoliday) {
  const buttons = document.querySelector('.buttons-container');
  const createButton = document.createElement('button');
  createButton.innerText = btnHoliday;
  createButton.id = 'btn-holiday';
  buttons.appendChild(createButton);
}
createButtonHoliday('Feriados');

function getHoliday() {
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
  })
}
getHoliday();

function createButtonFriday(btnFriday) {
  const buttons = document.querySelector('.buttons-container');
  const createButton = document.createElement('button');
  createButton.innerText = btnFriday;
  createButton.id = 'btn-friday';
  buttons.appendChild(createButton);
}
createButtonFriday('Sexta-feira');

function getFriday(friday) {
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

function dayMouseOver() {
  const dayOver = document.querySelector('#days');

  dayOver.addEventListener('mouseover', (evt) => {
    evt.target.style.fontSize = '25px';
    evt.target.style.fontWeight = '600';
  });
};

function dayMouseOut() {
  const dayOut = document.querySelector('#days');

  dayOut.addEventListener('mouseout', (evt) => {
    evt.target.style.fontSize = '20px';
    evt.target.style.fontWeight = '200';
  });
};
dayMouseOver();
dayMouseOut();