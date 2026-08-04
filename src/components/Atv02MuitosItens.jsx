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

export default function Atv02MuitosItens() {
  const [atividades, setAtividades] = useState([]);

  function carregarAtividades() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setAtividades(data));
  }

  return (
    <div>
      <button onClick={carregarAtividades}>
        Clique abaixo para carregar várias atividades
      </button>

      <div>
        {atividades.map((atividade) => (
          <p key={atividade.id}>
            {atividade.id} - {atividade.title}:{" "}
            {atividade.completed ? "feito" : "a fazer"}
          </p>
        ))}
      </div>
    </div>
  );
}