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



import { useState } from 'react'

export default function Atv04TratarErrosDeMuitos() {
  const [itens, setItens] = useState('As informações apareceram aqui')

  const styles = {
    container: {
      maxWidth: '600px',
      margin: '40px auto',
      padding: '24px',
      fontFamily: 'Arial, sans-serif',
    },
    button: {
      display: 'block',
      margin: '0 auto 20px',
      padding: '10px 20px',
      fontSize: '16px',
      backgroundColor: '#2563eb',
      color: '#fff',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
    },
    lista: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
    },
    item: {
      border: '1px solid #ddd',
      borderRadius: '6px',
      padding: '12px 16px',
      backgroundColor: '#f9fafb',
    },
  }

  function carregarComentarios() {
    fetch("https://jsonplaceholder.typicode.com/comments", { method: "GET" })
      .then((resposta) => {
        if (!resposta.ok) {
          throw new Error(`Erro na requisição! Status: ${resposta.status}`)
        }
        return resposta.json()
      })
      .then((resultado) => {
        setItens(
          resultado.map((item) => (
            <div key={item.id} style={styles.item}>
              <p>{item.postId}: {item.id} - {item.email}</p>
              <p>{item.name}</p>
              <p>{item.body}</p>
            </div>
          ))
        )
      })
      .catch((erro) => {
        console.error(erro)
      })
  }

  return (
    <div style={styles.container}>
      <button style={styles.button} onClick={() => carregarComentarios()}>
        Clique abaixo para carregar uma atividade
      </button>
      <div style={styles.lista}>
        {itens}
      </div>
    </div>
  )
}