/*
  * ATIVIDADE 03: TRATAR ERROS DE UM
  *
  * Crie e exporte por padrão um componente chamado Atv03TratarErrosDeUm, que deve ter
  * uma <div>, e dentro desta <div> um <button> com o conteúdo 
  * "Clique abaixo para carregar uma atividade", que quando pressionado
  * fará uma requisição usando "fetch" para a URL abaixo:
  *
  * https://jsonplaceholder.typicode.com/comments/20
  *
  * Esta URL envia um objeto JSON com as propriedades:
  * postId: número inteiro
  * id: número inteiro
  * name: texto
  * email: texto
  * body: texto
  *
  * Ao receber este conteúdo, você deve tratar ele dentro do primeiro ".then"
  * para verificar se existe um "ok" dentro da resposta, e tratar por erros
  * de requisição após o segundo ".then" dentro de um ".catch".
  *
  * No segundo ".then" o valor recebido deve ser exibido da forma abaixo:
  * Dentro de um elemento <div> abaixo do <button>:
  * <p>[postId]: [id] - [email]</p>
  * <p>[name]</p>
  * <p>[body]</p>
  * Os colchetes indicam que deve se tratar de uma variável, e não
  * do texto dentro deles.
  */
import { useState } from "react";

export default function Atv03TratarErrosDeUm() {
  const [comentario, setComentario] = useState(null);

  function carregar() {
    fetch("https://jsonplaceholder.typicode.com/comments/20")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro na requisição");
        }
        return response.json();
      })
      .then((data) => {
        setComentario(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <button onClick={carregar}>
        Clique abaixo para carregar uma atividade
      </button>

      {comentario && (
        <div>
          <p>
            {comentario.postId}: {comentario.id} - {comentario.email}
          </p>
          <p>{comentario.name}</p>
          <p>{comentario.body}</p>
        </div>
      )}
    </div>
  );
}