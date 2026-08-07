/*
  * ATIVIDADE 01: UM ITEM
  *
  * Crie e exporte por padrão um componente chamado Atv01UmItem, que deve ter
  * uma <div>, e dentro desta <div> um <button> com o conteúdo 
  * "Clique abaixo para carregar uma atividade", que quando pressionado
  * fará uma requisição usando "fetch" para a URL abaixo:
  *
  * https://jsonplaceholder.typicode.com/todos/1
  *
  * Esta URL envia um objeto JSON com as propriedades:
  * userId: número inteiro
  * id: número inteiro
  * title: texto
  * completed: booleano
  *
  * Ao receber este conteúdo, ele deve ser exibido da seguinte forma
  * dentro de um elemento <p> abaixo do <button>:
  * [id] - [title]: [status]
  * Os colchetes indicam que deve se tratar de uma variável, e não
  * do texto dentro deles.
  * O valor de "status" deve ser "feito" se completed for true, 
  * ou "a fazer" se completed for false
  */
import { useState } from "react";

const estilo = {
  container: {
    backgroundColor: "rgb(35, 52, 57)",
    padding: "10px",
    borderRadius: "10px",
    margin: "20px",
  },

  botao: {
    borderRadius: "5px",
    backgroundColor: "#505560",
    padding: "10px",
    margin: "10px",
    width: "500px",
    cursor: "pointer",
  },

  textoBotao: {
    color: "#eee",
    fontSize: "16px",
    margin: 0,
  },

  resultado: {
    margin: "10px",
    padding: "10px",
    backgroundColor: "rgb(40, 72, 81)",
    color: 'white',
    borderRadius: "5px",
  },
};

export default function Atv01UmItem() {
  const [atividade, setAtividade] = useState(null);

  function carregarAtividade() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((dados) => {
        setAtividade(dados);
      });
  }

  return (
    <div style={estilo.container}>
      <button style={estilo.botao} onClick={carregarAtividade}>
        <p style={estilo.textoBotao}>
          Clique abaixo para carregar uma atividade
        </p>
      </button>

      {atividade && (
        <div style={estilo.resultado}>
          <p>
            {atividade.id} - {atividade.title}:{" "}
            {atividade.completed ? "feito" : "a fazer"}
          </p>
        </div>
      )}
    </div>
  );
}






















