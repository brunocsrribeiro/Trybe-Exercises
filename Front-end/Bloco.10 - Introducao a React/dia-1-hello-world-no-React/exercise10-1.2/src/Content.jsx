import React, { Component } from "react";

const conteudos = [
  {
    conteudo: "High Order Functions",
    bloco: 8,
    status: "Aprendido",
  },
  {
    conteudo: "Composicao de Componentes",
    bloco: 11,
    status: "Aprendendo",
  },
  {
    conteudo: "Composicao de Estados",
    bloco: 12,
    status: "Aprenderei",
  },
  {
    conteudo: "Redux",
    bloco: 16,
    status: "Aprenderei",
  },
];

class Content extends Component {
  render() {
    return (
      <article className='App-content'>
        {conteudos.map((el) => (
          <article key='{el.conteudo}' className='App-card'>
            <h1>{`O conteúdo é: ${el.conteudo}`}</h1>
            <p>{`Status: ${el.status}`}</p>
            <p>{`Bloco: ${el.bloco}`}</p>
          </article>
        ))}
      </article>
    );
  }
}
export default Content;
