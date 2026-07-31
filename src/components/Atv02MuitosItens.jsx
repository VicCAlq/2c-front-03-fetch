/*
  * ATIVIDADE 02: MUITOS ITENS
  *
  * Crie e exporte por padrão um componente chamado Atv02MuitosItens, que deve ter
  * uma <div>, e dentro desta <div> um <button> com o conteúdo 
  * "Clique abaixo para carregar várias atividades", que quando pressionado
  * fará uma requisição usando "fetch" para a URL abaixo:
  *
  * https://jsonplaceholder.typicode.com/todos
  *
  * Esta URL envia uma lista de objetos JSON, cada um com as propriedades:
  * userId: número inteiro
  * id: número inteiro
  * title: texto
  * completed: booleano
  *
  * Ao receber este conteúdo, ele deve ser exibido da seguinte forma
  * dentro de uma <div> abaixo do <button>, onde cada item será
  * um <p> dentro dessa view:
  * [id] - [title]: [status]
  * Os colchetes indicam que deve se tratar de uma variável, e não
  * do texto dentro deles.
  * O valor de "status" deve ser "feito" se completed for true, 
  * ou "a fazer" se completed for false
  */

import { useState } from "react";

const estilo = {
  container: {
    backgroundColor: "#acd",
    padding: "10px",
    borderRadius: "10px",
    margin: "20px",
  },

  botao: {
    borderRadius: "5px",
    backgroundColor: "#505560",
    padding: "10px",
    margin: "10px",
    cursor: "pointer",
  },

  textoBotao: {
    color: "#eee",
    fontSize: "16px",
    margin: 0,
  },

  lista: {
    marginTop: "20px",
  },

  item: {
    margin: "5px",
    padding: "8px",
    backgroundColor: "#7ab",
    borderRadius: "5px",
  },
};

export default function Atv02MuitosItens(){
  const [atividade, setAtividade ] = useState([])

  function carregarAtividade(){
       fetch("https://jsonplaceholder.typicode.com/todos")
       .then((response) => response.json())
       .then((dados) => { setAtividade(dados);
       });
    }

  return (<>
     <div style={estilo.container}>
    <button style={estilo.botao} onClick={carregarAtividade}>
      <p style={estilo.textoBotao}>
        Clique abaixo para carregar várias atividades
      </p>
    </button>

    {atividade.length > 0 && (
      <div style={estilo.lista}>
        {atividade.map((item) => (
          <div key={item.id} style={estilo.item}>
            <p>
              {item.id} - {item.title}:{" "}
              {item.completed ? "feito" : "a fazer"}
            </p>
          </div>
        ))}
      </div>
    )}
  </div>
  </>)
}