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

import { useState } from 'react'


export default function Atv01UmItem() {
  const [resultado, setResultado] = useState(<p>sss</p>)
  async function requisicao() {
    await fetch('https://jsonplaceholder.typicode.com/todos/1',
      { method: 'get', }
    )
      .then((resposta) => {
        console.log(resposta)
        return resposta.json()
      })
      .then((resultado) => {

        console.log(resultado)

        const usuario = <p>{resultado.userId} - {resultado.title}: {resultado.completed ? 'feito' : 'a fazer'}</p>


        // Jogamos o valor da lista de itens a serem exibidos para
        // a variável de estado "resultado"
        setResultado(usuario)
      })
  }

  return (
    <div>
      <button onClick={() => requisicao()}>Clique abaixo para carregar uma atividade</button>
      <p>{resultado}</p>
    </div>
  )
}
