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
import { useState } from 'react'

export default function Atv02MuitosItens() {

  const [resultado, setResultado] = useState(<p>Os dados do usuário aparecerão no lugar deste texto</p>)

  async function carregarUsuario() {
    await fetch(
      'https://jsonplaceholder.typicode.com/todos',
      { method: 'GET', }
    )
    .then((resposta) => {
      console.log(resposta)
      return resposta.json()
    })    
    .then((resultado) => {
      console.log(resultado.map)
      const listaDeUsuario = <div style={{
        margin: "10px", padding: "5px", backgroundColor: "#a89", borderRadius: "5px",
      }}>
       <p>[id]</p>
       <p>[title]</p>
       <p>[status]</p>
      </div>

      setResultado(usuario)
    })
  }

  return(
    <div style={estilo.usuario}>
      <p>
        Carregue o usuário abaixo:
      </p>
      <button style={estilo.botao} onClick={() => carregarUsuario()}>
        <p style={estilo.textoBotao}>Carregar usuário</p>
      </button>
      {resultado}
    </div>
  )
}
