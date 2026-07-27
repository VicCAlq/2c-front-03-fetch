import { useState } from 'react'

const estilo = {
  usuario: {
    backgroundColor: "#dac",
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

export default function Exemplo01Fetch() {

  const [resultado, setResultado] = useState(<p>Os dados do usuário aparecerão no lugar deste texto</p>)

  async function carregarUsuario() {
    await fetch(
      'https://jsonplaceholder.typicode.com/users/1',
      { method: 'GET', }
    )
    .then((resposta) => {
      console.log(resposta)
      return resposta.json()
    })    
    .then((resultado) => {
      console.log(resultado)
      const usuario = <div style={{
        margin: "10px", padding: "5px", backgroundColor: "#a89", borderRadius: "5px",
      }}>
        <p>Nome: {resultado.name}</p>
        <p>Email: {resultado.email}</p>
        <p>Site: {resultado.website}</p>
        <p>UserName: {resultado.username}</p>
        <p>Fone: {resultado.phone}</p>
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
