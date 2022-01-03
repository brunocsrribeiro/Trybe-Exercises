const ESTADO_INICIAL_1 = {
  nome: 'Rodrigo',
  sobrenome: 'Santos da Silva',
  endereco: 'Rua Soldado Mathias, 765',
  cidade: 'Belo Horizonte',
};

const ESTADO_INICIAL_2 = {
  nome: 'Bruna',
  sobrenome: 'Santana Oliveira',
  endereco: 'Rua Holanda, 332',
  cidade: 'São Paulo',
};

const CHANGE_NAME_LASTNAME_1 = "CHANGE_NAME_LASTNAME_1";
const CHANGE_NAME_LASTNAME_2 = "CHANGE_NAME_LASTNAME_2"

const meuPrimeiroReducer = (state = ESTADO_INICIAL_1, action) => {
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

const meuSegundoReducer = (state = ESTADO_INICIAL_2, action) => {
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

const rootReducer = Redux.combineReducers({ meuPrimeiroReducer, meuSegundoReducer });

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
  }, 3000);
};

store.subscribe(() => {
  const { meuPrimeiroReducer, meuSegundoReducer } = store.getState();

  document.getElementById('nome-1')
    .innerHTML = meuPrimeiroReducer.nome;
  
  document.getElementById('sobrenome-1')
    .innerHTML = meuPrimeiroReducer.sobrenome;

  document.getElementById('nome-2')
    .innerHTML = meuSegundoReducer.nome;

  document.getElementById('sobrenome-2')
    .innerHTML = meuSegundoReducer.sobrenome;
});
