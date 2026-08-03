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
import {useState} from "react"

export default function Atv04TratarErrosMuitos(){

  const [ itens,setItens] = useState(<p>comentarios</p>)

    async function Comentarios () {
      await fetch(
        'https://jsonplaceholder.typicode.com/comments',
        {method: "GET"} 
          )
          .then((resposta) = {
            if(resposta.ok == true) {
              throw new Error(`erro na requisição!Status: ${resposta.status}`);
            }
            return resposta.json()
          })
          .then((resultado) = {
            setItens(<divstyle= {{display:flex, flexDirectiom:"column", gap: 10px}}>
            {resultado.map(comentarios) = {
              return <div style={{
                backgroundColor: "#abba44",
                padding: "10px",
                width: "500px",
                margin: "10px auto",
              }}>
              <p>[comentario.postId]: [comentario.id] - [comentario.email]</p>
              <p>[comentario.name]</p>
              <p>[comentario.body]</p>

              </div>
            }}  
              </div>)
          })
          .catch((erro)={
            window.alert(erro)
          })    
    }
    return(<div>
      <button
      onClick = { () = carregarComentarios()}
    >Clique abaixo para carregar uma atividade</button>
    {itens}
    </div>)
}