
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
