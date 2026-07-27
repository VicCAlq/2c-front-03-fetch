import { useState } from 'react'

const estilo = {
  usuario: {
    backgroundColor: "#acd",
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
  },
}

export default function Exemplo03VariosItens() {

  const [resultado, setResultado] = useState(<p>A lista de usuários aparecerá aqui no lugar deste texto</p>)

  async function carregarLista() {
    await fetch(
      'https://jsonplaceholder.typicode.com/users/',
      { method: 'GET', }
    )
    .then((resposta) => {
      if (!resposta.ok) {
        throw new Error(`Erro na requisição! Status: ${resposta.status}`);
      }
      return resposta.json()
    })
    .then((resultado) => {
      console.log(resultado)
      const listaDeUsuarios = <div>
        {resultado.map((conteudo) => {
          return <div style={{
            margin: "5px", padding: "5px", backgroundColor: "#7ab",
          }}>
            <p>Nome: {conteudo.name}</p>
            <p>Email: {conteudo.email}</p>
            <p>Site: {conteudo.website}</p>
          </div>
        })}
      </div>

      setResultado(listaDeUsuarios)
    })
    .catch(error => {
      console.log("Erro: ", error)
    })
  }

  return(
    <div style={estilo.usuario}>
      <p>
        Carregue a lista de usuários abaixo:
      </p>
      <button style={estilo.botao} onClick={() => carregarLista()}>
        <p style={estilo.textoBotao}>Carregar usuário</p>
      </button>
      {resultado}
    </div>
  )
}
