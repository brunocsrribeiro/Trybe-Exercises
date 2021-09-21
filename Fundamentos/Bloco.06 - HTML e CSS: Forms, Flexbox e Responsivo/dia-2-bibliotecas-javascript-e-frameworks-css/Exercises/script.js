import './node_modules/just-validate/dist/js/just-validate.js'
import './node_modules/just-validate/dist/js/just-validate.min.js'

function createStateOptions() {
  let states = document.getElementById('state');
  let stateOptions = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

  for (let index = 0; index < stateOptions.length; index += 1) {
    let createOptions = document.createElement('option');
    states.appendChild(createOptions).innerText = stateOptions[index];
    states.appendChild(createOptions).value = stateOptions[index];
  }
}

new JustValidate('.js-form', {
  rules: {
    name: {
      required: true,
      minLength: 3,
      maxLength: 40
    },
    email: {
      required: true,
      email: true,
      minLength: 50
    },
    cpf: {
      required: true,
      maxLength: 11
    },
    address: {
      required: true,
      minLength: 4,
      maxLength: 200
    },
    city: {
      required: true,
      maxLength: 28
    },
    state: {
      required: true
    },
    radio: {
      required: true
    },
    text: {
      required: true,
      maxLength: 1000
    },
    role: {
      required: true,
      maxLength: 40
    },
    description: {
      required: true,
      maxLength: 500
    },
    date: {
      required: true
    },
    submitHandler: function (form, values) {
      console.log(form, values,);
    }
  }
});

const clearButton = document.querySelector('.clear-button');

clearButton.addEventListener('click', () => {
  const formElements = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea')
  for (let index = 0; index < formElements.length; index += 1) {
    const userInput = formElements[index];
    userInput.value = '';
    textArea.value = '';
  }
});

const picker = new Pikaday({
  field: document.getElementById('datepicker'),
  format: 'D/M/YYYY',
  toString(date, format) {
    // you should do formatting based on the passed format,
    // but we will just return 'D/M/YYYY' for simplicity
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  },
  parse(dateString, format) {
    // dateString is the result of `toString` method
    const parts = dateString.split('/');
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[2], 10);
    return new Date(year, month, day);
  }
});

window.onload = function () {
  createStateOptions();
}