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

import { useState } from 'react'

export default function Atv03TratarErrosDeUm() {
  const [resultado, setResultado] = useState(<p>Os dados da atividade aparecerão aqui.</p>)

  async function carregarAtividade() {
    await fetch('https://jsonplaceholder.typicode.com/comments/20', { method: 'GET' })
      .then((resposta) => {
        if (!resposta.ok) {
          throw new Error(`Erro na requisição! Status: ${resposta.status}`)
        }
        return resposta.json()
      })
      .then((dados) => {
        setResultado(
          <div>
            <p>{dados.postId}: {dados.id} - {dados.email}</p>
            <p>{dados.name}</p>
            <p>{dados.body}</p>
          </div>
        )
      })
      .catch((error) => {
        console.log(error)
        setResultado(<p>Erro ao carregar a atividade.</p>)
      })
  }

  return (
    <div>
      <button onClick={() => carregarAtividade()}>
        Clique abaixo para carregar uma atividade
      </button>
      {resultado}
    </div>
  )
}

