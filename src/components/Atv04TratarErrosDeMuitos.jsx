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
  container: {
    backgroundColor: "rgb(236, 73, 223)",
    padding: "10px",
    borderRadius: "10px",
    margin: "20px",
  },

  botao: {
    borderRadius: "5px",
    backgroundColor: "rgb(236, 73, 223)",
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
    backgroundColor: "rgb(210, 28, 195)",
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

export default function Atv04TratarErrosDeMuitos(){
  const[comentarios, setComentarios] = useState([])

    function carregarComentario(){
      fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        if(!response.ok){
          throw new Error(`Erro na requisição! Status: ${response.status}`);
        }
        
        return response.json();
      })
      .then((dados) => {
        setComentarios(dados);
      })
      .catch((erro) => {
        console.log("Erro:", erro)
      })
    }

    return (<>
    <div style={estilo.container}>
      <div>
        <button style={estilo.botao} onClick={carregarComentario}>
          <p style={estilo.textoBotao}>
            Clique abaixo para carregar uma atividade
          </p>
        </button>
      </div>

      {comentarios.length > 0 && (
        <div>
           {comentarios.map((comentario) => (
                <div key={comentario.id} style={estilo.resultado}>
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
            ))}
        </div>
      )}
    </div>
    </>)

}