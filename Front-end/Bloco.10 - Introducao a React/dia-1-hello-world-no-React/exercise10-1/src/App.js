import './App.css';

const Task = (value) => {
  return (
    <li key='{value}'>{value}</li>
  )
}

const arrTasks = ['Caminhada', 'Estudos', 'Preparar o almoço', 'Assistir series'];

function App() {
  return (
    <ul>{ arrTasks.map((task) => Task(task)) }</ul>
  );
}

export default App;
