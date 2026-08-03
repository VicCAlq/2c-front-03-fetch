/*
  * ATIVIDADE 04: TRATAR ERROS DE MUITOS
  *
  * Crie e exporte por padrão um componente chamado Atv04TratarErrosDeMuitos, 
  * que deve ter uma <div>, e dentro desta <div> um <button> com o 
  * conteúdo "Clique abaixo para carregar uma atividade", que quando 
  * pressionado fará uma requisição usando "fetch" para a URL abaixo:
  *
  * https://jsonplaceholder.typicode.com/comments
  *
  * Esta URL envia uma lista de objetos JSON, cada um com as propriedades:
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
  * Dentro de um elemento <div> abaixo do <button>, cada item será
  * exibido dentro de sua própria <div> com o conteúdo abaixo:
  * <p>[postId]: [id] - [email]</p>
  * <p>[name]</p>
  * <p>[body]</p>
  * Os colchetes indicam que deve se tratar de uma variável, e não
  * do texto dentro deles.
  */
import { useState } from "react";

const estilo = {
  atividade: {
    backgroundColor: "rgba(32, 116, 40, 1)",
    padding: "10px",
    borderRadius: "10px",
    margin: "20px",
  },
  textoBotao: {
    color: "#eee",
    fontSize: "16px",
  },
  botao: {
    borderRadius: "5px",
    backgroundColor: "#505560",
    padding: "10px",
    margin: "10px",
    border: "none",
    cursor: "pointer",
  },
  resultado: {
    margin: "10px",
    padding: "5px",
    backgroundColor: "#a89",
    borderRadius: "5px",
  },
};

export default function Atv04TratarErrosDeMuitos() {
  const [itens, setItens] = useState(<p>
    Os comentários aparecerão aqui
  </p>)

  async function carregarComentarios() {
  
    await fetch(
      "https://jsonplaceholder.typicode.com/comments",     { method: 'GET', }
    )
    .then((resposta) => {
      if(!resposta.ok == true) {
        throw new Error (`Erro na requisição! Status:" ${resposta.status}`);
      }
      return resposta.json()
    })
    .then((resultado) => {
      setItens(<div style={{ display: "flex", flexDirection: "column", gap: "10px"}}>

        {resultado.map((comentario) => {
          return <div style={{backgroundColor: "#aabbff", padding: "10px", width: "500px", margin: "10px auto"}}>
            <p>{comentario.postId}: {comentario.id} - {comentario.email}</p>
            <p>{comentario.name}</p>
            <p>{comentario.body}</p>
            </div>;
        })}
      </div>)
    })
    .catch((erro) => {
      window.alert(erro)
    })
  }
  
  
  return(<div style={estilo.atividade}>
    <button style={estilo.botao}  onClick = {() => carregarComentarios()}>Clique abaixo para carregar uma atividade</button>
    {itens}
  </div>)
}
