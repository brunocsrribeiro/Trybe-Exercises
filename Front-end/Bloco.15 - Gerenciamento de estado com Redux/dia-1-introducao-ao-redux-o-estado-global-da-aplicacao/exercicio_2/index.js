const INITIAL_STATE_ONE = {
  nome: 'Rodrigo',
  sobrenome: 'Santos da Silva',
  endereco: 'Rua Soldado Mathias, 765',
  cidade: 'Belo Horizonte',
};

const INITIAL_STATE_TWO = {
  nome: 'Bruna',
  sobrenome: 'Santana Oliveira',
  endereco: 'Rua Holanda, 332',
  cidade: 'São Paulo',
};

const CHANGE_NAME_LASTNAME_1 = "CHANGE_NAME_LASTNAME_1";
const CHANGE_NAME_LASTNAME_2 = "CHANGE_NAME_LASTNAME_2"

const myFirstReducer = (state = INITIAL_STATE_ONE, action) => {
  switch (action.type) {
    case CHANGE_NAME_LASTNAME_1:
      return {
        ...state,
        nome: action.nome,
        sobrenome: action.sobrenome,
      }
    default:
      return state;
  }
};

const mySecondReducer = (state = INITIAL_STATE_TWO, action) => {
  switch (action.type) {
    case CHANGE_NAME_LASTNAME_2:
      return {
        ...state,
        nome: action.nome,
        sobrenome: action.sobrenome,
      }
    default:
      return state;
  }
};

const rootReducer = Redux.combineReducers({ myFirstReducer, mySecondReducer });

const store = Redux.createStore(rootReducer);

window.onload = () => {
  setTimeout(() => {
    store.dispatch({
      type: CHANGE_NAME_LASTNAME_1,
      nome: "Bruna",
      sobrenome: "Santana Oliveira",
    });

    store.dispatch({
      type:CHANGE_NAME_LASTNAME_2,
      nome: "Roberto",
      sobrenome: "Santos da Silva",
    })
  }, 5000);
};

store.subscribe(() => {
  const { myFirstReducer, mySecondReducer } = store.getState();

  document.getElementById('nome-1')
    .innerHTML = myFirstReducer.nome;
  
  document.getElementById('sobrenome-1')
    .innerHTML = myFirstReducer.sobrenome;

  document.getElementById('nome-2')
    .innerHTML = mySecondReducer.nome;

  document.getElementById('sobrenome-2')
    .innerHTML = mySecondReducer.sobrenome;
});
