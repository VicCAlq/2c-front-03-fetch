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

const estilo = {
  container: {
    backgroundColor: "rgb(138, 214, 24)",
    padding: "10px",
    borderRadius: "10px",
    margin: "20px",
  },

  botao: {
    borderRadius: "5px",
    backgroundColor: "rgb(138, 214, 24)",
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
    backgroundColor: "rgb(69, 107, 11)",
    borderRadius: "5px",
  },

  titulo: {
    fontWeight: "bold",
    fontSize: "18px",
  },

  texto: {
    margin: "8px 0",
  },
};

export default function Atv03TratarErrosDeUm() {
  const [comentario, setComentario] = useState(null)

  function carregarComentario() {
    fetch("https://jsonplaceholder.typicode.com/comments/20")
    .then((response) => {
      if (!response.ok){
        throw new Error(
                    `Erro na requisição! Status: ${response.status}`
        );
      }

      return response.json();
    })
    .then((dados) => {
      setComentario(dados);
    })
    .catch((erro) => {
      console.log("Erro:", erro);
    })
  }


  return (<>
    <div style={estilo.container}>
        <button style={estilo.botao} onClick={carregarComentario}>
            <p style={estilo.textoBotao}>
                Clique abaixo para carregar uma atividade
            </p>
        </button>

        {comentario && (
            <div style={estilo.resultado}>
                <p style={estilo.titulo}>
                    {comentario.postId}: {comentario.id} - {comentario.email}
                </p>

                <p style={estilo.texto}>
                    {comentario.name}
                </p>

                <p style={estilo.texto}>
                    {comentario.body}
                </p>
            </div>
        )}
    </div>
</>);
}